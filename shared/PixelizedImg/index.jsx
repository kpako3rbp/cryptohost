import cl from 'classnames';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import Pixelit from '@/shared/lib/pixelit';

import styles from './index.module.scss';

const PixelizedImage = (props) => {
  const { children, className, src, alt } = props;

  const imageRef = useRef();

  const pixelizeImg = (img) => {
    const px = new Pixelit({
      from: img,
    });
    let scale = 7; // Начальный масштаб
    px.setScale(scale).pixelate();

    setInterval(() => {
      scale = scale === 7 ? 6 : 7;
      px.setScale(scale).pixelate();
    }, 800);
  };

  useEffect(() => {
    pixelizeImg(imageRef.current);
  }, []);

  return (
    <div>
      <img ref={imageRef} src={src} alt={alt} className={className}></img>
      <canvas data-pixelit={''} className={cl(className, styles.imageBordered)}></canvas>
    </div>
  );
};

export default PixelizedImage;
