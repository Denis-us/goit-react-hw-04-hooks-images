import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  openModal,
}) {
  return (
    <li id={id} onClick={openModal} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-img={largeImageURL}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
