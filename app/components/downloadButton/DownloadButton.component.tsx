"use client";

import React from "react";
import { saveAs } from "file-saver";

const DownloadButton = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/149yCZwRUDlfQrZN0id1tyTELgUe1x8id";

  const handleDownload = () => {
    saveAs(pdfUrl, "karim.altohamy-frontEnd-resume.pdf");
  };

  return (
    <button className="btn_Download" onClick={handleDownload}>
      Download The Resume
    </button>
  );
};

export default DownloadButton;
