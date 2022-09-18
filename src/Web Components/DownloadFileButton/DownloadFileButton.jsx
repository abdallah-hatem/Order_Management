import React from "react";
import { useTranslation } from "react-i18next";

function DownloadFileButton({ link }) {
  const { t } = useTranslation();

  return (
    <a
      href={link}
      class="btn btn-primary pull-right"
      style={{ height: "40px" }}
    >
      <i class="fa fa-download"></i> {t("Download Sample File")}
    </a>
  );
}

export default DownloadFileButton;
