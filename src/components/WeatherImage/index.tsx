import React, { useState, useEffect, FunctionComponent } from "react";
import { assets } from '../../utils/assets';
import { LazyImage } from './LazyImage';

interface IProps {
  src: string
  className?:string
  alt?:string
}

const WeatherImage: FunctionComponent<IProps> = ({ src, alt, className }) => (
  <LazyImage
      src={assets[src]}
      code={src}
      alt={alt || 'loading...'}
      className={className}
    />
)

export default WeatherImage