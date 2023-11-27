import React from "react";
import AboutCard from "./aboutCard";

export default function AboutSection() {
  return (
    <section className="pt-6 bg-neutral-50">
      <div className="container-screen">
        <h3 className="font-semibold text-lg mb-4">Vakken</h3>
        <div className="grid grid-cols-3">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </section>
  );
}
