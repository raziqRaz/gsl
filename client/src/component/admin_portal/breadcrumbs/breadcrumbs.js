import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function HeadBreadcrumbs(props) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{mt:2}}>
      <Typography variant="h5" fontWeight='bold'>{props?.first}</Typography>
        <Link underline="hover" color="inherit" href={props?.head}>
         {props?.head}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href={props?.sechead}
        >
          {props?.sechead}
        </Link>
        {/* <Typography color="text.primary">{props?.sechead}</Typography> */}
      </Breadcrumbs>
    </div>
  );
}
