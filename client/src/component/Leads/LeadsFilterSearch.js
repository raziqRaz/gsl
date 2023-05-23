import React, { useState } from 'react'
import { MdClear } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

function LeadsFilterSearch() {

    const [open, setOpen] = useState(false);
    const [secListopen, setSecListOpen] = useState(false);
    const [thirdListopen, setThirdListOpen] = useState(false);
    const [fourthListopen, setFourthListOpen] = useState(false);
    const [fifthListopen, setFifthListOpen] = useState(false);
    const [sixthListopen, setSixthListOpen] = useState(false);
    const [sevenListopen, seventhListOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
    const handleClick2 = () => {
      setSecListOpen(!secListopen);
    };
    const handleClick3 = () => {
      setThirdListOpen(!thirdListopen);
    };
    const handleClick4 = () => {
      setFourthListOpen(!fourthListopen);
    };
    const handleClick5 = () => {
      setFifthListOpen(!fifthListopen);
    };
    const handleClick6 = () => {
      setSixthListOpen(!sixthListopen);
    };
    const handleClick7 = () => {
      seventhListOpen(!sevenListopen);
    };

  return (
        <>
        
        <List
        sx={{
          width:"fit-content",
          maxWidth: "316px",
          height: "620px",
          bgcolor: "background.paper",
          borderRadius: "25px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          overflow: "scroll",
          overflowX: "hidden",
        }}
          
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>Filter</div>
              <div>
                <MdClear /> clear all
              </div>
            </div>
          </ListSubheader>
        }
      >
        {/* first List */}
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="city" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* collapse */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              🇬🇧
              <ListItemText primary="uk" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              🇦🇺
              <ListItemText primary="australia" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              🇨🇦
              <ListItemText primary="canada" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              🇺🇸
              <ListItemText primary="United States of america" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* second List */}
        <ListItemButton onClick={handleClick2}>
          <ListItemText primary="prefferred country" />
          {secListopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={secListopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <TextField
                label="Search Here"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <AiOutlineSearch />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#F8469A",
                        "&.Mui-checked": {
                          color: "#F8469A",
                        },
                      }}
                    />
                  }
                  label="united kindom"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#F8469A",
                        "&.Mui-checked": {
                          color: "#F8469A",
                        },
                      }}
                    />
                  }
                  label="Required"
                />
              </FormGroup>
            </ListItemButton>
          </List>
          <ListItemButton sx={{ pl: 4 }}>
            <Typography color="#F8469A" variant="p">
              view all ...
            </Typography>
          </ListItemButton>
        </Collapse>

        {/* third List */}
        <ListItemButton onClick={handleClick3}>
          <ListItemText primary="status" />
          {thirdListopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* collapse */}
        <Collapse in={thirdListopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* fourth List */}
        <ListItemButton onClick={handleClick4}>
          <ListItemText primary="assigned" />
          {fourthListopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* collapse */}
        <Collapse in={fourthListopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* fifth List */}
        <ListItemButton onClick={handleClick5}>
          <ListItemText primary="source" />
          {fifthListopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* collapse */}
        <Collapse in={fifthListopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* sixth List */}
        <ListItemButton onClick={handleClick6}>
          <ListItemText primary="branch" />
          {sixthListopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* collapse */}
        <Collapse in={sixthListopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* seventh List */}
        <ListItemButton onClick={handleClick7}>
          <ListItemText primary="type" />
          {sevenListopen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        {/* collapse */}
        <Collapse in={sevenListopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  )
}

export default LeadsFilterSearch