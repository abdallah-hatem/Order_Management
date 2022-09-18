import { LoadPanel } from "devextreme-react";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
const UpdateDelete = ({
  data,
  Updata,
  Delete,
  ComponentID,
  withoutUpdate = false,
}) => {
  const { i18n } = useTranslation();
  let [stateload, setstateload] = useState(false);
  const position = { of: ComponentID };

  return (
    <div>
      <LoadPanel
        shadingColor="rgba(0,0,0,0.4)"
        position={position}
        onHiding={useCallback(() => setstateload(false), [])}
        visible={stateload}
        shading={true}
        showPane={false}
      />
      <div
        style={{
          direction: i18n.language === "en" ? "rtl" : "ltr",
          fontSize: "20px",
        }}
      >
        {withoutUpdate ? null : (
          <i
            className="far fa-edit aboutus-editicon"
            onClick={() => Updata(data)}
          ></i>
        )}
        <i
          className="fas fa-backspace aboutus-deleteicon"
          onClick={async () => {
            setstateload(true);
            await Delete(data.Id);
            setstateload(false);
          }}
        ></i>
      </div>
    </div>
  );
};

export default React.memo(UpdateDelete);
