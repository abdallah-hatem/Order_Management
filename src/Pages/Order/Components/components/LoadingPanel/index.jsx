import { LoadPanel } from "devextreme-react/load-panel";
import { useTranslation } from "react-i18next";

const LoadingPanel = ({ loading, onHiding = () => {} }) => {
  const { t, i18n } = useTranslation();
  return (
    <LoadPanel
      shadingColor="rgba(0,0,0,0.4)"
      position={"#load-test-div"}
      onHiding={onHiding}
      visible={loading}
      showIndicator={true}
      shading={true}
      showPane={true}
      hideOnOutsideClick={false}
    />
  );
};

export default LoadingPanel;
