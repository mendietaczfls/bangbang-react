import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import ReactTooltip from 'react-tooltip'
import "../style.css";

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
                <a data-tip className="data-tip" data-for={this.state.pdfName}>{this.state.pdfNameCN}</a>

                <ReactTooltip className="tool-tip" id={this.state.pdfName} place={"bottom"} delayHide={500} delayShow={500} delayUpdate={500}>
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