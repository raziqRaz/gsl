import React, { useState } from "react";

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

function LeadersSearchHeader() {
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
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
                marginTop: "10px",
                width: "100px",
                fontSize:"small"
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
                  size="small"
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

      <div style={{ marginTop: "25px",display:"flex",justifyContent:"end" }}>
        <TextField
          size="small"
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

      <div >
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
            width: "172px",
            height:"40px",
            padding: 1,
            margin: 3,
            color: "black",
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
          sx={{ borderColor: "black", borderRadius: "24px", mt: 6 }}
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
      <div >
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
            padding: 1,
            margin: 3,
            color: "black",
            width: "75px",
            height:"40px",
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
          sx={{ borderColor: "black", borderRadius: "24px", mt: 6 }}
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
      <div >
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
            padding: 1,
            margin: 3,
            color: "#fff",
            width: "75px",
            height:"40px",
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
          sx={{ borderColor: "black", borderRadius: "24px", mt: 6 }}
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
  );
}

export default LeadersSearchHeader;
