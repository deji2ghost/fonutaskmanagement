import "./App.css";
import Navbar from "./component/layout/navbar/navbar";
import { GlobalStyles } from "./styles/GlobalStyles.style";
import Home from "./page/Home";
import Picture from "../public/images/Vector (5).svg";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Navbar text="Manage Task" pic={Picture} />
      <Home />
    </div>
  );
}

export default App;
