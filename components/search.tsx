import { FC, useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";



const Search: FC = () => {
  return (
    <Paper
      component="form"
      //影
      elevation={3}
      sx={{
        p: "0px 2px",
        display: "flex",
        alignItems: "center",
        width: "30%",
        height: 35,
        borderRadius: "15px",
        marginLeft: "10px",
      }}
    >
      <IconButton sx={{ p: "4%" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ flex: 1 }}
        placeholder="検索"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
};

export default Search;
