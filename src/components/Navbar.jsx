function Navbar() {
  const links = [
    { label: "Over Ons", link: "about" },
    { label: "Contact", link: "contact" },
    { label: "Intake", link: "intake" },
  ];

  return (
    <nav className="shadow-sm py-4">
      <div className="container-screen flex items-center justify-between">
        <p className="font-bold text-lg"> Hello World </p>
        <div className="flex items-center gap-4">
          {links.map((item) => (
            <a key={item.link} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
