import cl from 'classnames';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import Pixelit from '@/shared/lib/pixelit';

import styles from './index.module.scss';

const PixelizedImage = (props) => {
  const { className, src, alt, pixelScale } = props;
  const imageRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    if (src && imageRef.current && imageRef.current.complete) {
      pixelizeImg(imageRef.current);
    }
  }, [src, imageRef.current]);

  const pixelizeImg = (img) => {
    const px = new Pixelit({
      from: img,
      to: canvasRef.current,
    });
    let scale = pixelScale; // Начальный масштаб

    px.setScale(scale).pixelate();

    setInterval(() => {
      scale = scale === pixelScale ? pixelScale - 1 : pixelScale;
      px.setScale(scale).pixelate();
    }, 800);
  };

  return (
    <div className={cl(styles.image, className)}>
      <img ref={imageRef} src={src} alt={alt} onLoad={() => pixelizeImg(imageRef.current)} />
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PixelizedImage;
