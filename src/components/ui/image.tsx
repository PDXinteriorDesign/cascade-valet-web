
import React, { useState } from 'react';
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
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!hasError ? (
        <img 
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          className={cn("object-contain", className)} 
          onError={(e) => {
            console.error('Image failed to load:', src);
            setHasError(true);
          }}
          {...props} 
        />
      ) : (
        <div 
          className={cn(
            "flex items-center justify-center bg-gray-100 text-gray-500 text-sm", 
            className
          )}
          style={{ width: width || 'auto', height: height || 200 }}
        >
          {alt || 'Image not found'}
        </div>
      )}
    </>
  );
};

export default Image;
