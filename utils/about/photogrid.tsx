import Image from 'next/image'
import React, { useState, useCallback } from 'react'
import { Fade } from 'react-awesome-reveal'
import useAxios from 'axios-hooks'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from './photogrid.module.scss'

export function VPhotoGrid() {
  const [{ data, loading, error }, refetch] = useAxios('/api/gallery');
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div className={styles.photoGallery}>
      <Gallery photos={data.photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={data.photos.map((x: any) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
          </div>
  )
}

//TO-DO refactoring of VPhotoGrid