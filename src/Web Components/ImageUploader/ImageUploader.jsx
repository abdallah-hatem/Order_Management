import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import ImageUploading from "react-images-uploading";
import "./style.css";

export function ImageUploader() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);

    const formData = new FormData();
    formData.append("image", imageList[0].file);

    console.log(formData);
  };
  const { t } = useTranslation();

  return (
    <div className="App">
      <ImageUploading
        // multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div
            className="upload__image-wrapper"
            style={{ overflowX: "scroll" }}
          >
            <div style={{ marginBottom: images.length > 0 && 5 }}>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className="button-14"
              >
                {t("Click or Drop here")}
              </button>
              &nbsp;
              {/* {images.length === 0 && t("No File Chosen")} */}
              {images.length > 0 && (
                <button className="button-14" onClick={onImageRemoveAll}>
                  Remove all images
                </button>
              )}
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button
                    style={{ marginTop: 5, marginRight: 5 }}
                    className="button-14"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="button-14"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
