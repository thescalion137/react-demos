import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import { uuidv4, add } from "../utils";
import { PageContext } from "../context/Page";
import { Button, TextField } from "@mui/material";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Sidebar = () => {
  const [title, setTitle] = useState("Note");
  const { sidebar } = useContext(PageContext);
  const [pages, setPages] = sidebar;

  const addNewPage = () => {
    const page = {
      id: uuidv4(),
      title: "📔 " + title,
      content: {
        blocks: [],
      },
      children: [],
    };

    add(page);
    setPages([...pages, page]);
  };

  const saveNote = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <div className="custom-ui">
              <h4>Please add title</h4>
              <TextField
                label="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <br />
              <div>
                <Button
                  style={{ marginTop: 20 }}
                  onClick={() => onClose()}
                  variant="contained"
                  color="error"
                >
                  Cancel
                </Button>
                &nbsp;
                <Button
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    addNewPage();
                    onClose();
                  }}
                  variant="contained"
                  color="success"
                >
                  Create Note
                </Button>
              </div>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <aside>
      <div className="logo">
        <img src="img/noteed.png" />
        <span>Noteed</span>
      </div>
      <Navigation pages={pages} />
      <button onClick={addNewPage}>
        <img src="img/add.png" width="25px" height="25px" /> New Note
      </button>
    </aside>
  );
};

export default Sidebar;
