import React, { useEffect, useState } from 'react';
import {
  GalleryArrow,
  GalleryCaption,
  GalleryMain,
  GalleryThumb,
  GalleryThumbs,
  GalleryViewport,
  GalleryWrap,
  GalleryZoomTarget,
  Lightbox,
  LightboxClose,
  LightboxInner,
  LightboxViewport,
} from './ProjectGallery.styled';

const ProjectGallery = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeImage = images[activeIndex];
  const hasManyImages = images.length > 1;

  const showImage = (index) => {
    if (!images.length) return;

    const nextIndex = (index + images.length) % images.length;
    setActiveIndex(nextIndex);
  };

  const handleControlMouseDown = (event) => {
    event.preventDefault();
  };

  const handleSelectImage = (event, index) => {
    event.preventDefault();
    showImage(index);
    event.currentTarget.blur();
  };

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false);
      }

      if (event.key === 'ArrowRight') {
        showImage(activeIndex + 1);
      }

      if (event.key === 'ArrowLeft') {
        showImage(activeIndex - 1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, images.length, lightboxOpen]);

  if (!activeImage) return null;

  return (
    <GalleryWrap>
      <GalleryMain>
        <GalleryViewport>
          <GalleryZoomTarget
            type="button"
            onMouseDown={handleControlMouseDown}
            onClick={() => setLightboxOpen(true)}
            aria-label="Otwórz podgląd zdjęcia realizacji"
          >
            <img
              src={activeImage.full}
              width={activeImage.width}
              height={activeImage.height}
              alt={activeImage.alt}
              loading="lazy"
              decoding="async"
            />
            <span aria-hidden="true" />
          </GalleryZoomTarget>

          {activeImage.caption && <GalleryCaption>{activeImage.caption}</GalleryCaption>}

          {hasManyImages && (
            <>
              <GalleryArrow
                type="button"
                $side="left"
                onMouseDown={handleControlMouseDown}
                onClick={() => showImage(activeIndex - 1)}
                aria-label="Poprzednie zdjęcie"
              >
                <span aria-hidden="true">&lsaquo;</span>
              </GalleryArrow>
              <GalleryArrow
                type="button"
                $side="right"
                onMouseDown={handleControlMouseDown}
                onClick={() => showImage(activeIndex + 1)}
                aria-label="Następne zdjęcie"
              >
                <span aria-hidden="true">&rsaquo;</span>
              </GalleryArrow>
            </>
          )}

        </GalleryViewport>
      </GalleryMain>

      {hasManyImages && (
        <GalleryThumbs aria-label="Zdjęcia realizacji">
          {images.map((image, index) => (
            <GalleryThumb
              type="button"
              key={image.thumb}
              $active={index === activeIndex}
              onMouseDown={handleControlMouseDown}
              onClick={(event) => handleSelectImage(event, index)}
              aria-pressed={index === activeIndex}
              aria-label={`Pokaż zdjęcie ${index + 1}`}
            >
              <img
                src={image.thumb}
                width={image.thumbWidth}
                height={image.thumbHeight}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <span>{index + 1}</span>
            </GalleryThumb>
          ))}
        </GalleryThumbs>
      )}

      {lightboxOpen && (
        <Lightbox role="dialog" aria-modal="true" aria-label="Podgląd zdjęcia realizacji">
          <LightboxClose type="button" onClick={() => setLightboxOpen(false)} aria-label="Zamknij">
            &times;
          </LightboxClose>

          {hasManyImages && (
            <>
              <GalleryArrow
                type="button"
                $side="left"
                onMouseDown={handleControlMouseDown}
                onClick={() => showImage(activeIndex - 1)}
                aria-label="Poprzednie zdjęcie"
              >
                <span aria-hidden="true">&lsaquo;</span>
              </GalleryArrow>
              <GalleryArrow
                type="button"
                $side="right"
                onMouseDown={handleControlMouseDown}
                onClick={() => showImage(activeIndex + 1)}
                aria-label="Następne zdjęcie"
              >
                <span aria-hidden="true">&rsaquo;</span>
              </GalleryArrow>
            </>
          )}

          <LightboxInner>
            <LightboxViewport>
              <img
                src={activeImage.full}
                width={activeImage.width}
                height={activeImage.height}
                alt={activeImage.alt}
                decoding="async"
              />
            </LightboxViewport>
            {activeImage.caption && <figcaption>{activeImage.caption}</figcaption>}
          </LightboxInner>
        </Lightbox>
      )}
    </GalleryWrap>
  );
};

export default ProjectGallery;
