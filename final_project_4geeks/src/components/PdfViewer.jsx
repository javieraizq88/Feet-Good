import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = props => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = result => {
        setNumPages(result.numPages);
    }
    console.log(numPages);
    const goToPrevPage = () =>
        setPageNumber(pageNumber => pageNumber - 1);
    const goToNextPage = () =>
        setPageNumber(pageNumber => pageNumber + 1);

    return (
        <>
            <div className="m-auto col-8">
                <Document
                    file={props.file}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} width={600} />
                </Document>
                {
                    pageNumber > 1 &&
                    <button className="btn btn-outline-info m-2 mb-3 float-left" onClick={goToPrevPage}>Anterior</button>
                }
                {
                    pageNumber !== numPages &&
                    <button className="btn btn-outline-info m-2 mb-3 float-right" onClick={goToNextPage}>Siguiente</button> 
                }
                
                <br/>
            </div>
        </>
    )
}

export default PdfViewer;