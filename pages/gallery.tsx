import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import { CustomImage } from 'lib/types'
import LoadingSpinner from 'components/LoadingSpinner'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function GalleryWorks() {
  const [index, setIndex] = useState(-1);
  const {  data , error } = useSWR<[CustomImage]>('/api/gallery', fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <LoadingSpinner />
  /* @ts-ignore */
  const currentImage = data.images[index];
  /* @ts-ignore */
  const nextIndex = (index + 1) % data.images.length;
  /* @ts-ignore */
  const nextImage = data.images[nextIndex] || currentImage;
  /* @ts-ignore */
  const prevIndex = (index + data.images.length - 1) % data.images.length;
  /* @ts-ignore */
  const prevImage = data.images[prevIndex] || currentImage;
  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  
  return (
    <>
      <Gallery
        /* @ts-ignore */
        images={data.images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  )
}