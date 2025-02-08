import React from "react";
import Download from "../products/Download";
import qr1 from "../../assets/images/falconQR.png";

const FalconBarcode = () => {
  return (
    <Download
      qrCode={qr1}
      downloadLink="https://drive.google.com/file/d/1Q9PJRLP707NHLKQoS1Yi1arugAna26b9/view"
      text="AirBio Bio Safety Cabinets deliver unmatched reliability and protection for laboratory workflows."
    />
  );
};

export default FalconBarcode;
