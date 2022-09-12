import React from "react";
import { Logo } from "../Logo";

const Header: React.FC = () => {
  return (
    <header className="w-full py-5 flex items-center justify-center">
      <Logo />
    </header>
  );
};

export default Header;
