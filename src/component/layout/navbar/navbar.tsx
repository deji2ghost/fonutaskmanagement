import { NavbarWrapper, NavHead } from "./NavbarStyles";
import { NavbarProps } from "./NavbarTypes";

const Navbar: React.FC<NavbarProps> = ({ text, pic }) => {
  return (
    <NavbarWrapper>
      <img src={pic} />
      <NavHead>{text}</NavHead>
    </NavbarWrapper>
  );
};

export default Navbar;
