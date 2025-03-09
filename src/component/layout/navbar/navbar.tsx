import { NavbarWrapper, NavHead } from "./NavbarStyles"
import Picture from "../../../../public/images/Vector (5).svg"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src={Picture} />
      <NavHead>Manage Task</NavHead>
    </NavbarWrapper>
  )
}

export default Navbar
