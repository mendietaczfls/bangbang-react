import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import ReactTooltip from 'react-tooltip'
import "../style.css";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

class PdfToolTip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pdfName: props.pdfName,
            pdfNameCN: props.pdfNameCN,
            pdfUrl: props.pdfUrl,
            numPages: props.numPages, 
            pageNumber: 1
        };

        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };
    
    goToPrevPage = () => {
        if(this.state.pageNumber > 1)
            this.setState({pageNumber: this.state.pageNumber - 1})
    };
    
    goToNextPage = () => {
        if(this.state.pageNumber < this.state.numPages)
            this.setState({pageNumber: this.state.pageNumber + 1})
    };

    render(){
        return(
            <div>
                <a data-tip className="data-tip" data-for={this.state.pdfName} href={this.state.pdfUrl} target="_blank"><DoneOutlineIcon color="primary"/>&nbsp;&nbsp;{this.state.pdfNameCN}</a>

                <ReactTooltip className="tool-tip" id={this.state.pdfName} place={"right"} delayHide={500} delayShow={500} delayUpdate={500} overridePosition={ ({ left, top }, currentEvent, currentTarget, node) => {
                    const d = document.documentElement;

                    left = Math.min(d.clientWidth - node.clientWidth, left);
                    top = Math.min(d.clientHeight - node.clientHeight, top);

                    left = Math.max(0, left);
                    top = Math.max(0, top);

                    return { top, left }
                    } }>
                <nav>
                    <button onClick={this.goToPrevPage}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </nav>

                <div style={{ width: 600 }}>
                    <Document
                    file={this.state.pdfUrl}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}
                    >
                    <Page pageNumber={this.state.pageNumber} width={600} />
                    </Document>
                </div>

                <p>
                    Page {this.state.pageNumber} of {this.state.numPages}
                </p>
                </ReactTooltip>
            </div>
        );
    }

}

export default PdfToolTip;