import React from "react";
import PropTypes from "prop-types";

const PDFReader = ({width, height, docId}) => {
    let baseUrl = "//e.issuu.com/embed.html#36654334/";
    let markUpGenerator = () => {
        return {
            __html: `
                <iframe width=${width || "100%"} height=${height || "100%"} 
                    src=${baseUrl + docId} frameborder="0" allowfullscreen>
                </iframe>
            `
        };
    };
    return (
        <div dangerouslySetInnerHTML={markUpGenerator()} />
    );
};

PDFReader.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    docId: PropTypes.string.isRequired
  };

export default PDFReader;