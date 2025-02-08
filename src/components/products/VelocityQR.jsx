import React from "react";
import Download from "../products/Download";
import qr2 from "../../assets/images/velocityQR.png";

const VelocityQR = () => {
  return (
    <Download
      qrCode={qr2}
      downloadLink="https://drive.google.com/file/d/1ygs2s572HtaKESl3awZ0kAr-NtQvxQJy/view"
      text = 'Choose the Velocity laminar air flow cabinet for unparalleled cleanliness, safety, and efficiency in your laboratory workflows.'
    />
  );
};

export default VelocityQR;
