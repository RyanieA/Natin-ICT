import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

export default function SubjectCard({ image, title, description }) {
  return (
    <div className="relative">
      <img
        alt="img"
        src={image}
        className="max-w-[345px] z-20 absolute left-0"
      />
      <Card className="!rounded-lg !shadow-sm mt-32" sx={{ maxWidth: 345 }}>
        <CardContent className="mt-10">
          <p className="font-medium">{title}</p>
          <p className="text-sm mt-2">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
