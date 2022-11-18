import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
export default function Grid(props) {
  const { data } = props;
  const [index, setIndex] = useState(-1);
  const currentImage = data.images[index];
  const nextIndex = (index + 1) % data.images.length;
  const nextImage = data.images[nextIndex] || currentImage;
  const prevIndex = (index + data.images.length - 1) % data.images.length;
  const prevImage = data.images[prevIndex] || currentImage;
  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <>
      <Gallery
        images={data.images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
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