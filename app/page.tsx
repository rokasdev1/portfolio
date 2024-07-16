import NavBar from "@/components/NavBar";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Image from "next/image";

export default function App() {
  return (
    <main className="flex flex-col ">
      <Home/>
      <About/>
      <Projects/>

    </main>
  );
}
