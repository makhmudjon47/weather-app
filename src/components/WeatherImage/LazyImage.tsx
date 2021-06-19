import React, { useState, useEffect } from "react";
import { thumbnails } from '../../utils/assets'

interface IProps {
  code: string
  src: string
  alt?: string
  className?: string
}

export const LazyImage: FunctionComponent<IProps> = ({ src, alt, code, className }) => {
  const [imageSrc, setImageSrc] = useState(thumbnails[code]);
  const [imageRef, setImageRef] = useState();
  const [isblured, setIsblured] = useState(true);

  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;
    if (imageRef && imageSrc === thumbnails[code]) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                setIsblured(false);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%"
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [setIsblured, setImageSrc, imageRef]);

  return (
    <div className={(isblured ? "blured " : '') + className}>
      <img
        className={"custom-image w-full h-full"}
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};
