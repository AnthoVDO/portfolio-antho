import React from 'react';
import { Document } from 'react-pdf'

const CV = () => {
    return (
        <div>
            <Document
            file="/CVAnthoVDO.pdf" 
            onLoadSuccess={this.onDocumentLoad.bind(this)}
          loading={this.renderLoader()}
            >
            </Document>
        </div>
    );
};

export default CV;