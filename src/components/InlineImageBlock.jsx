import React from "react";

export default function InlineImageBlock({ imagePosition, children, image }) {
  return (
    <div className="grid grid-cols-2">
      <div className={imagePosition === "right" ? "order-1" : "order-2"}>
        {children}
      </div>
      <div className={imagePosition === "right" ? "order-2" : "order-1"}>
        <img src={image} alt="image" className="aspect-video object-contain" />
      </div>
    </div>
  );
}
