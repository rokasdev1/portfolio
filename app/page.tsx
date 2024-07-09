import NavBar from "@/components/NavBar";
import Home from "@/pages/Home";
import Image from "next/image";

export default function App() {
  return (
    <main className="w-full h-full bg-black absolute">
      {/* <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 blur-sm">
        <source src="video.mp4" type="video/mp4" />
      </video> */}
      <img
      alt="bg"
      src="forest.jpg"
      className="absolute inset-0 w-full h-full object-cover z-0 "
      />
    
      <div className="z-10 backdrop-blur-md">
        <NavBar />
        <div className="py-10" />
        <Home />
      </div>
    
    </main>
  );
}
