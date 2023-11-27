import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";

export default function AboutCard() {
  return (
    <Card className="!rounded-lg !shadow-sm !border" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/hero.png"
        alt="green iguana"
      />
      <CardContent>
        <p className="font-medium">lorem</p>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          quia provident. Dignissimos iste iure nostrum velit at. Consequatur
          animi excepturi natus eos vel, deleniti, in deserunt adipisci esse
          veniam repudiandae!
        </p>
      </CardContent>
    </Card>
  );
}
