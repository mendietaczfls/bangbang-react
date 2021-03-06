import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Material-UI-Styles';
import PdfTooltip from './PdfTooltip';
import PdfTooltip2 from './PdfTooltip2';


export default function DocList({header, documents ,studentTypeDisplay}){
    const classes = useStyles();
    return (
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
              {header.title}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {header.body}&nbsp;{studentTypeDisplay}
            </Typography>
          </Container>
        </div>
        {Array.from(documents).map(doc => (
          <PdfTooltip2 pdfName={doc.pdfName} pdfNameCN={doc.pdfNameCN} pdfUrl={doc.pdfUrl} numPages={doc.numPages}/>
        ))}
      </main>
    )
};