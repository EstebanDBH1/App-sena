import "./App.css";
import LayoutHome from "./components/layoutHome/LayoutHome";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div id="app"  >
      <Navbar />
      <main>
        <LayoutHome />
      </main>
    </div>
  );
};

export default App;
