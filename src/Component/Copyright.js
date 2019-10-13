import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {footer as footer_data}  from '../Data/All';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={footer_data.website_link}>
        {footer_data.website_name}
      </Link>
      {/* {' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}