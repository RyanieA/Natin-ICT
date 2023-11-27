import React from "react";

export default function Hero() {
  return (
    <section className="container-screen py-20">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center gap-4 order-2 md:order-1">
          <h3 className="font-bold text-xl">
            Natin Informatie Communicatie & Technologie
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            dignissimos in iure facilis eligendi consequatur ad pariatur a.
            Expedita, possimus sunt. Corrupti laudantium, minima atque
            praesentium voluptatem omnis ducimus sapiente!
          </p>
        </div>
        <div className="md:order-2">
          <img
            src="/hero.png"
            alt="Hero"
            className="aspect-video object-contain"
          />
        </div>
      </div>
    </section>
  );
}
