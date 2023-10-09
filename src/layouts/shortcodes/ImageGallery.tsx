import ImageFallback from "@/helpers/ImageFallback";
import React from "react";

const ImageGallery = ({
  image,
  title,
}: {
  image: string[] | undefined;
  title: string | undefined;
}) => {
  return (
    <div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            {image && (
              <ImageFallback
                src={image[0]}
                height={800}
                width={1200}
                alt={title}
                className="w-full rounded"
              />
            )}
          </div>
          <div className="w-1/2 p-1 md:p-2">
            {image && (
              <ImageFallback
                src={image[4]}
                height={500}
                width={1200}
                alt={title}
                className="w-full rounded"
              />
            )}
          </div>
          <div className="w-1/2 p-1 md:p-2">
            {image && (
              <ImageFallback
                src={image[5]}
                height={500}
                width={1200}
                alt={title}
                className="w-full rounded"
              />
            )}
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            {image && (
              <ImageFallback
                src={image[1]}
                height={500}
                width={1200}
                alt={title}
                className="w-full rounded"
              />
            )}
          </div>
          <div className="w-1/2 p-1 md:p-2">
            {image && (
              <ImageFallback
                src={image[2]}
                height={500}
                width={1200}
                alt={title}
                className="w-full rounded"
              />
            )}
          </div>
          <div className="w-full p-1 md:p-1">
            {image && (
              <ImageFallback
                src={image[3]}
                height={500}
                width={1200}
                alt={title}
                className="w-full rounded"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
