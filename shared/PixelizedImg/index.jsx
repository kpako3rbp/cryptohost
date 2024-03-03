import cl from 'classnames';
import React, { useEffect, useRef } from 'react';

import Pixelit from '@/shared/lib/pixelit';

import styles from './index.module.scss';

const PixelizedImage = (props) => {
  const { children, className, src, alt, hasBorder = true } = props;

  const imageRef = useRef();

  const pixelizeImg = (img) => {
    const px = new Pixelit({
      from: img,
    });
    let scale = 7; // Начальный масштаб

    setInterval(() => {
      scale = scale === 7 ? 6 : 7;
      px.setScale(scale).pixelate();
    }, 800);
  };

  useEffect(() => {
    pixelizeImg(imageRef.current);
  }, [imageRef.current]);

  if (hasBorder) {
    return (
      <div>
        <img ref={imageRef} src={src} alt={alt} className={className} />
        <canvas data-pixelit={''} className={cl(className, styles.imageBordered)}></canvas>
      </div>
    );
  }
  return (
    <div>
      <img ref={imageRef} src={src} alt={alt} />
      <canvas data-pixelit={''} className={cl(className)}></canvas>
    </div>
  );
};

export default PixelizedImage;
