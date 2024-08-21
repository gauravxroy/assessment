import * as React from "react";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { X, Plus } from "lucide-react";
import SectionTab from "./SectionTab";
import { Checkbox } from "@mui/material";
import axios from "axios";
// eslint-disable-next-line react/prop-types
function SideBar({ onAddWidget, items, onItemChange }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
    console.log(e.target.value);
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="h-screen"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
    >
      <div className="  bg-blue-700  flex justify-end ">
        <div>
          <Button onClick={toggleDrawer(anchor, false)}>
            {<X size={24} color="#fff" />}
          </Button>
        </div>
      </div>
      <SectionTab />
      <Divider />
      <List className="flex flex-col gap-2">
        <div className="flex items-center gap-2 border rounded-lg p-2">
          <Checkbox className="w-4 h-4" />
          <input
            className="text-base text-gray-700 p-2 outline-none"
            placeholder={"Enter widget title"}
            name="title"
            defaultValue={title}
            onChange={handleChange}
          />
        </div>
      </List>
    </Box>
  );
  console.log("The title is", title);
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className=" ">
            <button
              className="flex flex-row justify-center items-center gap-2  mt-20 border-2 rounded-md px-2 py-1 "
              onClick={toggleDrawer(anchor, true)}
            >
              <Plus size={20} color="#475569" />
              <span className="text-[#475569] text-sm">Add Widget</span>
            </button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div className="flex  mb-4 justify-end mr-7 gap-4">
              <Button
                onClick={toggleDrawer(anchor, false)}
                variant="outlined"
                color="error"
              >
                Cancle
              </Button>
              <Button
                onClick={() => {
                  onAddWidget();
                }}
                variant="contained"
                // color=""
              >
                Add
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideBar;
