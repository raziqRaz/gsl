import React, { useState } from "react";
import SampleTable from "../Table/SampleTable";
import LeadsFilterSearch from "./LeadsFilterSearch";

import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlinePlus,
} from "react-icons/ai";
import { RiUserFollowLine } from "react-icons/ri";
import { BsArrowUpCircle, BsArrowRightCircle } from "react-icons/bs";
import { TbArrowsExchange2 } from "react-icons/tb";
import { SiMicrosoftexcel } from "react-icons/si";
import { RiDeleteBinLine } from "react-icons/ri";

import Chip from "@mui/material/Chip";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import {
  Button,
  Checkbox,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  ListItem,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";

function All_leadListTable(props) {
  // button column visible
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // button Export
  const [exportShow, setExportShow] = React.useState(null);
  const openExport = Boolean(exportShow);

  const handleClickExport = (event) => {
    setExportShow(event.currentTarget);
  };
  const handleCloseExport = () => {
    setExportShow(null);
  };

  // button Action
  const [actionShow, setActionShow] = React.useState(null);
  const openAction = Boolean(actionShow);

  const handleClickAction = (event) => {
    setActionShow(event.currentTarget);
  };
  const handleCloseAction = () => {
    setActionShow(null);
  };

  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "10px",
              width: "500px",
            }}
          >
            {chipData.map((data) => {
              let icon;

              if (data.label === "React") {
                icon = <TagFacesIcon />;
              }

              return (
                <ListItem key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={
                      data.label === "React" ? undefined : handleDelete(data)
                    }
                  />
                </ListItem>
              );
            })}
          </div>
        </Grid>

        <div style={{ margin: "10px" }}>
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
        </div>

        <div style={{ margin: "10px" }}>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
            sx={{
              borderColor: "black",
              size: "10px",
              width: "auto",
              padding: 1,
              margin: 1,
            }}
          >
            Column visiblity
          </Button>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ borderColor: "black", borderRadius: "24px" }}
          >
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              Name
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              Phone
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              preffered country
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              Lead source
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              Lead Type
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              Tele caller
            </MenuItem>
            <MenuItem>
              <Checkbox
                sx={{
                  color: "#F8469A",
                  "&.Mui-checked": {
                    color: "#F8469A",
                  },
                }}
              />
              Application processor
            </MenuItem>
          </Menu>
        </div>

        {/* export Button */}
        <div style={{ margin: "10px" }}>
          <Button
            id="demo-positioned-button"
            aria-controls={openExport ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openExport ? "true" : undefined}
            onClick={handleClickExport}
            variant="outlined"
            sx={{
              borderColor: "black",
              size: "10px",
              width: "auto",
              padding: 1,
              margin: 1,
            }}
          >
            Export
          </Button>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={exportShow}
            open={openExport}
            onClose={handleCloseExport}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ borderColor: "black", borderRadius: "24px" }}
          >
            <MenuItem>
              <Icon fontSize="medium" color="secondary" sx={{ m: 1 }}>
                <AiOutlineDownload />
              </Icon>
              Pdf
            </MenuItem>
            <MenuItem>
              <Icon fontSize="medium" color="secondary" sx={{ m: 1 }}>
                <SiMicrosoftexcel />
              </Icon>
              Excel
            </MenuItem>
          </Menu>
        </div>
        {/* Action Button */}
        <div style={{ margin: "10px" }}>
          <Button
            id="demo-positioned-button"
            aria-controls={openAction ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openAction ? "true" : undefined}
            onClick={handleClickAction}
            variant="outlined"
            sx={{
              backgroundColor: "#141E3C",
              size: "10px",
              width: "auto",
              padding: 1,
              margin: 1,
            }}
          >
            Action
          </Button>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={actionShow}
            open={openAction}
            onClose={handleCloseAction}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ borderColor: "black", borderRadius: "24px" }}
          >
            <MenuItem>
              <Button
                startIcon={<AiOutlinePlus />}
                sx={{ backgroundColor: "#141E3C" }}
              >
                Create a New Lead
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                startIcon={<RiUserFollowLine />}
                // sx={{ backgroundColor: "#141E3C" }}
              >
                Add Follow up
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                startIcon={<BsArrowRightCircle />}
                // sx={{ backgroundColor: "#141E3C" }}
              >
                change owner
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                startIcon={<BsArrowUpCircle />}
                // sx={{ backgroundColor: "#141E3C" }}
              >
                change priority
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                startIcon={<TbArrowsExchange2 />}
                // sx={{ backgroundColor: "#141E3C" }}
              >
                change status
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                startIcon={<RiDeleteBinLine />}
                // sx={{ backgroundColor: "#141E3C" }}
              >
                Delete
              </Button>
            </MenuItem>
          </Menu>
        </div>
      </Grid>

      {/* <div style={{display:"flex",justifyContent:"space-evenly", width:"auto"}}> */}
      <Grid container sx={{ mt: 5 }}>
        <Grid item lg={2} xs={12}>
          <LeadsFilterSearch />
        </Grid>
        <Grid item lg={10} xs={12}>
          <SampleTable toggle={props.toggle} />
        </Grid>
      </Grid>
    </>
  );
}

export default All_leadListTable;
