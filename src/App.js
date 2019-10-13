import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bachelor from './Bachelor'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Copyright from './Component/Copyright';
import useStyles from './Component/Material-UI-Styles';
import {footer as footer_data}  from './Data/All';
import {documents} from './Data/Bachelor';
import PdfTooltip from './Component/PdfTooltip';

function App() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BangBang Education
          </Typography>
        </Toolbar>
      </AppBar>
        {/* <Bachelor/> */}
        {documents.A.map(doc => (
          <PdfTooltip pdfName={doc.pdfName} pdfNameCN={doc.pdfNameCN} pdfUrl={doc.pdfUrl} numPages={doc.numPages}/>
        ))}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {/* footer title */}
          {footer_data.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {/* footer body */}
          {footer_data.body}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;
