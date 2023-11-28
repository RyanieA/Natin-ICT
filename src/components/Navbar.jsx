import { Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { Menu as MenuToggle } from "lucide-react";

function Navbar() {
  const links = [
    { label: "Over Ons", link: "about" },
    { label: "Intake", link: "intake" },
    { label: "Contact", link: "contact" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="shadow-sm py-4">
      <div className="container-screen flex items-center justify-between">
        <p className="font-bold text-lg"> Hello World </p>
        <div className="hidden lg:flex items-center gap-4">
          {links.map((item) => (
            <a key={item.link} href={item.link}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="lg:hidden">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuToggle className="text-black" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {links.map((item, i) => (
              <MenuItem key={i} onClick={handleClose}>
                <a href={item.link}>{item.label}</a>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
