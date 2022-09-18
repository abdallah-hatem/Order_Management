import React from "react";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";

function CodeGenerator({
   value = "",
   displayValue = false,
   size = 170,
   style,
   label,
   type = "qrCode",
}) {
   return (
      <div className="d-flex flex-column align-items-center">
         {label && <p style={style}>{label}</p>}
         {type === "qrCode" && <QRCode size={size} value={value} />}
         {type === "barCode" && <Barcode value={value} />}
         {displayValue && <p className="mt-1">{value}</p>}
      </div>
   );
}

export default CodeGenerator;
