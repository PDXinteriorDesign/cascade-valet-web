
import React from 'react';
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  ...props 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height} 
      className={cn("object-contain", className)} 
      onError={(e) => {
        console.error('Logo image failed to load:', src);
        e.currentTarget.style.display = 'none';
      }}
      {...props} 
    />
  );
};

export default Image;

