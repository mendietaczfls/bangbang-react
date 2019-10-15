import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Component/Material-UI-Styles';
import {header} from './Data/Bachelor';
import {documents} from './Data/Bachelor';
import PdfTooltip from './Component/PdfTooltip';


export default function DocList(){
    const classes = useStyles();
    return (
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {header.documentList.title}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {header.documentList.body}
            </Typography>
          </Container>
        </div>
        {documents.A.map(doc => (
          <PdfTooltip pdfName={doc.pdfName} pdfNameCN={doc.pdfNameCN} pdfUrl={doc.pdfUrl} numPages={doc.numPages}/>
        ))}
      </main>
    )
};