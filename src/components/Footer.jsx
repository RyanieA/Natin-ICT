import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 bg-neutral-50/50">
      <p className="text-center">
        Natin Informatie Communicatie & Technologie {year}©
      </p>
    </footer>
  );
}
