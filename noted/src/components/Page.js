import React, { useContext, useEffect } from "react";
import { PageContext } from "../context/Page";
import { update, remove } from "../utils";
import { TextField } from "@mui/material";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

const editorJS = {
  instance: null,
  getInstance(data) {
    if (!this.instance) {
      this.instance = new EditorJS({
        data,
        tools: {
          header: Header,
          list: List,
          embed: Embed,
          table: Table,
          marker: Marker,
          warning: Warning,
          code: Code,
          linkTool: LinkTool,
          image: Image,
          raw: Raw,
          quote: Quote,
          checklist: CheckList,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage,
        },
      });
    }

    return this.instance;
  },
};

const Page = () => {
  const { page, sidebar } = useContext(PageContext);
  const [activePage, setActivePage] = page;
  const [pages, setPages] = sidebar;

  const editor = editorJS.getInstance(activePage.content);

  useEffect(() => {
    if (activePage.content.blocks.length) {
      editor.render?.(activePage.content);
    }
    return () => {
      editor.clear();
    };
  }, [activePage]);

  const updateHeading = (e) => {
    setActivePage({
      ...activePage,
      title: e.target.value,
    });
  };

  const save = async () => {
    const data = await editor.save();
    console.log();
    const updatePages = (pages) =>
      pages.map((page) => {
        if (page.id === activePage.id) {
          page.content = data;
          page.title = activePage.title;
        }

        return page;
      });

    setPages(updatePages(pages));
    update(activePage);
  };

  const deletePage = () => {
    const filteredPages = pages.filter((page) => page.id !== activePage.id);

    setPages(filteredPages);
    setActivePage(pages[0]);
    remove(activePage);
  };

  const deleteNote = () => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure to delete.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deletePage(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <main>
      <div className="controls">
        {/* <input onChange={updateHeading} value={activePage?.title || ""} /> */}
        <TextField
          className="input"
          // id="outlined-search"
          label="Title"
          type="text"
          onChange={updateHeading}
          value={activePage?.title || ""}
        />
        <img src="img/savenote.png" onClick={save} />
        {/* <FaSave onClick={save} /> */}
        {pages[0].id !== activePage.id && (
          <img src="img/delete.png" onClick={deleteNote} />
        )}
      </div>
      <div id="editorjs" />
    </main>
  );
};

export default Page;
