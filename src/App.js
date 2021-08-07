import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as fetch from "./Fetch/Fetch";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import CustomLoader from "./components/Loader/Loader";

export default function App() {
  const [search, setSearch] = useState("");
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageId, setLargeImageId] = useState(null);
  const [largeImage, setLargeImage] = useState([]);

  // useEffect(() => {
  //   if (!query) return;
  //   const fetchImages = async () => {
  //     try {
  //       const request = await apiService(query, page);
  //       if (request.length === 0) {
  //         return setError(`No results were found for ${query}!`);
  //       }
  //       setImages(prevImages => [...prevImages, ...request]);
  //     } catch (error) {
  //       setError('Something went wrong. Try again.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchImages();
  // }, [page, query]);

  useEffect(() => {
    if (search === "") {
      return;
    }

    fetchImages();
  }, [search]);

  const onSearch = (search) => {
    setSearch(search);
    setPictures([]);
    setCurrentPage(1);
  };

  const fetchImagesWithScroll = () => {
    fetchImages(true);
  };

  const fetchImages = (scroll) => {
    setLoading(true);

    fetch
      .fetchImages(search, currentPage)
      .then((pictures) => {
        setPictures((prevPictures) => [...prevPictures, ...pictures]);
        setCurrentPage(currentPage + 1);
      })

      // return (pictures[0])
      // });
      .catch((error) => {
        setError("Ошибка");
      })
      .then(() => {
        if (scroll) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const findPicture = () => {
    const largeImg = pictures.find((pictures) => {
      return pictures.id === largeImageId;
    });
    return largeImg;
  };

  // const openModal = (e) => {
  //     setShowModal(true),
  //     setLargeImageId(Number(e.currentTarget.id)),
  // };

  const onOpenModal = (e) => {
    console.log(largeImageId);
    console.log(e.target);
    // largeImageId(e.target.dataset.source);
    // toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div class="App">
      <Searchbar onSubmit={onSearch} />
      <ImageGallery openModal={onOpenModal} pictures={pictures} />
      {loading && <CustomLoader />}
      {pictures.length > 0 && <Button fetchImages={fetchImagesWithScroll} />}
      {showModal && (
        <Modal onToggleModal={toggleModal}>
          <img src={findPicture().largeImageURL} alt={findPicture().tags} />
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
