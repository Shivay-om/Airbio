import React from "react";
import Download from "../products/Download";
import qr3 from "../../assets/images/agiesQR.png";

const AgiesQR = () => {
  return (
    <Download
      qrCode={qr3}
      downloadLink="https://drive.google.com/file/d/1YS6anjVvC8DDViJJqN3GoODupGTzg_I6/view"
      text="AirBio Bio Safety Cabinets deliver unmatched reliability and protection for laboratory workflows."
    />
  );
};

export default AgiesQR;
