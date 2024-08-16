import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchImg } from "../gallery-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { animateScroll as scroll } from "react-scroll";
import ImageModal from "../ImageModal/ImageModal";
import { Image, OpenModalProps } from "../types";

function App() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [images, setImages] = useState<Image[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1000);
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalAlt, setModalAlt] = useState<string>("");
  const [modalLikes, setModalLikes] = useState<number>(0);
  const [modalImage, setModalImage] = useState<string>("");
  const [modalDescription, setModalDescription] = useState<string>("");

  const onSubmit = (newSearch: string) => {
    setQuery(newSearch);
    setImages([]);
    setTotalPages(1000);
    setPage(1);
  };

  function openModal(imageSrc: OpenModalProps) {
    setModalIsOpen(true);
    setModalImage(imageSrc.regular);
    setModalAlt(imageSrc.alt_description);
    setModalDescription(imageSrc.description);
    setModalLikes(imageSrc.likes);
  }

  function closeModal(): void {
    setModalIsOpen(false);
  }

  const loadMoreImg = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    async function getImg() {
      if (!query) return;
      try {
        setLoading(true);
        setError(false);
        const { results, total_pages } = await fetchImg(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalPages(total_pages);
        setLoadMore(page < total_pages);
        if (page > 1) {
          scroll.scrollToBottom();
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImg();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {totalPages === 0 && <p>Not found! Start a new search!</p>}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onClick={openModal} />
          {loading && <Loader loading={loading} />}
          {loadMore && !loading && images.length > 0 && (
            <LoadMoreBtn onClick={loadMoreImg} />
          )}
          {modalImage && (
            <ImageModal
              isOpen={modalIsOpen}
              closeModal={closeModal}
              url={modalImage}
              alt_description={modalAlt}
              likes={modalLikes}
              description={modalDescription}
            />
          )}
        </>
      )}
    </div>
  );
}
export default App;
