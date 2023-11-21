import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PDFViewer = ({pdfUrl}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  // const pdfUrl2 = 'https://drive.google.com/uc?id=1-Md1WD6g5D0riERVfgOviklhv3_JDnHi';
  // const pdfUrl3 = 'https://drive.google.com/file/d/1-Md1WD6g5D0riERVfgOviklhv3_JDnHi/view?usp=sharing';

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={800} pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
// https://drive.google.com/uc?id=1-Md1WD6g5D0riERVfgOviklhv3_JDnHi
