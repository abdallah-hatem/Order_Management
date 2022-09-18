import React, { useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function FileUploader() {
  const fileRef = useRef();

  const [fileName, setFileName] = useState();

  function handleChange(e) {
    const [file] = e.target.files;
    setFileName(file.name);
    console.log(file);
  }
  const { t } = useTranslation();
  return (
    <div>
      <button
        // style={{ marginRight: 5 }}
        onClick={() => fileRef.current.click()}
        className="button-14"
      >
        {t("Choose File")}
      </button>
      <div style={{ display: "inline-block", margin: "0 5px" }}>
        {fileName ? fileName : t("No File Chosen")}
      </div>
      <input
        ref={fileRef}
        onChange={handleChange}
        multiple={false}
        type="file"
        hidden
      />
    </div>
  );
}

export default FileUploader;
