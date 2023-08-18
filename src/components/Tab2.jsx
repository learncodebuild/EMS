import React from "react";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const Tab2 = ({ onClick, handleClose, handleOpen }) => {
  return (
    <>
      <Drawer
        anchor="left"
        open={onClick}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <div className="bg-gray-100 text-black text-2xl w-42 px-10 py-2 h-full">
          <h2>Drawer Content</h2>
          <List>
            {["test1", "test2", "test3", "test4", "test5"].map(
              (text, index) => (
                <ListItem
                  key="index"
                  className="mt-4 p-2 border-2 border-transparent hover:border-2 hover:border-b-red-400"
                >
                  <ListItemText className="text-center " primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Tab2;
