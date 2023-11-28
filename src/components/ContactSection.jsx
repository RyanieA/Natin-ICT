import React from "react";
export default function ContactSection() {
  return (
    <div className="container-screen py-6" id="contact">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <img
            src="/contact.png"
            alt="Contact"
            className="aspect-video object-contain"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <table>
            <tr>
              <td className="font-medium">Email:</td>
              <td>
                <a
                  className="hover:underline hover:underline-offset-2"
                  href="mailto:info@natin.sr"
                >
                  info@natin.sr
                </a>
              </td>
            </tr>
            <tr>
              <td className="font-medium">Telefoon:</td>
              <td> 490497 / 490579</td>
            </tr>
            <tr>
              <td className="font-medium">Adres:</td>
              <td> Mr. J. Lachmonstraat 180-182</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
