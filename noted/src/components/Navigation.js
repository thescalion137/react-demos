import React, { useContext, useState } from "react";
import { PageContext } from "../context/Page";
import { TextField } from "@mui/material";

const Navigation = ({ pages, level }) => {
  const { page } = useContext(PageContext);
  const [activePage, setActivePage] = page;
  const [search, setSearch] = useState("");

  return (
    <div>
      <div style={{ margin: "37px" }}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {pages
          ?.filter((page) => {
            if (search === "") {
              return page;
            } else if (
              page.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return page;
            } else {
              <li>
                <span>No Notes Found</span>
              </li>;
            }
          })
          .map((page) => (
            <li key={page.id}>
              <span
                className={activePage.id === page.id ? "active" : null}
                onClick={() => setActivePage(page)}
              >
                <img src="img/chevron-empty.png" />
                {page.title}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navigation;
