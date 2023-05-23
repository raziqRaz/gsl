import React from "react";
import SampleTable from "../Table/SampleTable";
import LeadsFilterSearch from "./LeadsFilterSearch";

import { Grid } from "@mui/material";
import LeadersSearchHeader from "./LeadersSearchHeader";

function All_leadListTable(props) {
  return (
    <>
      <LeadersSearchHeader />
      {/* <div style={{display:"flex",justifyContent:"space-evenly", width:"auto"}}> */}
      <Grid container sx={{ mt: 5 }}>
        <Grid item lg={2} md={2} xs={12}>
          <LeadsFilterSearch />
        </Grid>
        <Grid item lg={10} md={8} xs={12}>
          <SampleTable toggle={props.toggle} />
        </Grid>
      </Grid>
    </>
  );
}

export default All_leadListTable;
