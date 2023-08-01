import Navbar from "../header/Navbar";
import Image from "next/image";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="flex flex-row  homepage ">
        <div className="w-1/2 mt-10">
          <div className="mt-40 text mx-14 text-7xl">
            <span className="">
              Make your <span className="font-bold text-blue-950">own</span>
              <br />
            </span>
            <div className="mt-5">
              signature <span className="font-bold text-blue-950">style</span>
            </div>
          </div>
          <div className="mt-12 text mx-14 text-xl">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              quisquam ratione deleniti? Harum recusandae autem consequatur
              ullam illo voluptate culpa.
            </p>
          </div>

          <div className="h-28">
            <button className=" mt-20 ml-20 relative font rounded-md w-36 h-10 [background:linear-gradient(rgba(150s,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_linear-gradient(-90deg,_rgba(255,_255,_255,_0.15),_rgba(255,_0,_31,_0.15)),_linear-gradient(255.4deg,_rgba(255,_255,_255,_0.15),_rgba(255,_0,_184,_0.15)),_linear-gradient(109deg,_rgba(255,_255,_255,_0.15),_rgba(143,_0,_255,_0.15)),_linear-gradient(103.98deg,_rgba(255,_255,_255,_0.15),_rgba(36,_0,_255,_0.15)),_linear-gradient(245.87deg,_rgba(255,_255,_255,_0.15),_rgba(0,_255,_163,_0.15)),_linear-gradient(-90deg,_rgba(255,_255,_255,_0.15),_rgba(250,_255,_0,_0.15)),_linear-gradient(-90deg,_rgba(255,_255,_255,_0.15),_rgba(255,_122,_0,_0.15)),_rgba(255,_0,_77,_0.6)] shadow-[1px_1px_2px_rgba(0,_0,_0,_0.48),_0px_0px_1px_rgba(0,_0,_0,_0.5)]  overflow-hidden flex flex-row  box-border items-center justify-center  text-left  text-white font-aclonica">
              Try now
            </button>
          </div>
        </div>

        <div className="w-1/2 ml-36 mt-20 mr-3 ">
          <Image
            src="/pretty_girl.svg"
            alt="div_image"
            width={430}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
