import React, {useState} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import ReactTooltip from 'react-tooltip'
import "../style.css";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function PdfToolTip2 ({pdfName, pdfNameCN, pdfUrl, numPages}) {

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    
    const [pageNumber,setPageNumber] = useState(1);

    // onDocumentLoadSuccess = ({ numPages }) => {
    //     this.setState({ numPages });
    //   };

    return(
        <div>
            <a data-tip className="data-tip" data-for={pdfName} href={pdfUrl} target="_blank"><DoneOutlineIcon color="primary"/>&nbsp;&nbsp;{pdfNameCN}</a>

            {!pdfName? <div/>:<ReactTooltip className="tool-tip" id={pdfName} place={"right"} delayHide={500} delayShow={500} delayUpdate={500} overridePosition={ ({ left, top }, currentEvent, currentTarget, node) => {
                const d = document.documentElement;

                left = Math.min(d.clientWidth - node.clientWidth, left);
                top = Math.min(d.clientHeight - node.clientHeight, top);

                left = Math.max(0, left);
                top = Math.max(0, top);

                return { top, left }
                } }>
            <nav>
                <button onClick={() => {if(pageNumber > 1) {setPageNumber(pageNumber - 1)}}}>Prev</button>
                <button onClick={() => {if(pageNumber < numPages) {setPageNumber(pageNumber + 1)}}}>Next</button>
            </nav>

            <div style={{ width: 600 }}>
                <Document
                file={pdfUrl}
                // onLoadSuccess={onDocumentLoadSuccess()}
                onLoadError={console.error}
                >
                <Page pageNumber={pageNumber} width={600} />
                </Document>
            </div>

            <p>
                Page {pageNumber} of {numPages}
            </p>
            </ReactTooltip>}
        </div>
    );

}

export default PdfToolTip2;