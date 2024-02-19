import React from "react";
import Image from "next/image";

function CustomImage(props: any) {

  const { src, width, height, alt,  ...rest } = props;

  return (
    <>
        <Image
          src={src}
          width={width || 0}
          height={height || 0}
          alt={alt || src}
          blurDataURL={src} 
          // placeholder="blur"
          sizes={"100vw"}
          {...rest}
        />
    </>
  );
}

export default CustomImage;
