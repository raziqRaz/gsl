import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IoNotificationsOutline } from "react-icons/io5";
import { Icon, IconButton, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  return (
    <Box sx={{backgroundColor: "white",width:"auto" }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 2,height:"100px" }} >
        <Toolbar>
          <Typography
            noWrap
            variant="h4"
            component="a"
            href="/"
            sx={{
              ml: 13,
              // fontFamily: 'sans-serifs',
              flexGrow: 1,
              fontWeight: 1000,
              fontSize: "xxl",
              color: "#1F56AE",
              textDecoration: "none",
              marginTop:"30px"
            }}
          >
            Global Study Link
          </Typography>
          <Search sx={{ color: "#ACB1C6",marginTop:"30px",marginLeft:"100px" }}>
            <SearchIconWrapper>
              <SearchIcon size={25} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
             {/* <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                defaultValue="How can we help"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon size={25} />
                    </IconButton>
                  ),
                }}
              /> */}
          </Search>
          <Icon sx={{ color: "#ACB1C6",marginTop:"30px" }}>
            <IoNotificationsOutline size={25} />
          </Icon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
