import React from "react";
import AboutCard from "./aboutCard";
import { Button } from "@mui/material";

export default function AboutSection() {
  const subjects = [
    {
      image: "/hero-removebg.png",
      title: "Programeren",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit placeat voluptas, et doloribus ad. Ullam et labore enim aliquam adipisci eveniet, explicabo dolorum ut sit quae debitis, animi quos",
    },
    {
      image: "/hero-removebg.png",
      title: "Ccna",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit placeat voluptas, et doloribus ad. Ullam et labore enim aliquam adipisci eveniet, explicabo dolorum ut sit quae debitis, animi quos",
    },
    {
      image: "/hero-removebg.png",
      title: "Projecten",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit placeat voluptas, et doloribus ad. Ullam et labore enim aliquam adipisci eveniet, explicabo dolorum ut sit quae debitis, animi quos",
    },
  ];

  return (
    <section className="py-6 bg-neutral-50/50">
      <div className="container-screen">
        <h3 className="font-semibold text-lg mb-4">Vakken</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {subjects.map(({ image, title, description }, i) => (
            <AboutCard
              key={i}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="text" className="!rounded-lg">
            <a href="/about">Read More...</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
