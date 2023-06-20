import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer theme="colored" toastStyle={{backgroundColor: "var(--primary)", color: "var(--aqua-blue)"}}/>
    </div>
  )
}

export default App;
