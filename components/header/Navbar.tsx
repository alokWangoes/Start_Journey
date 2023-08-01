import Link from "next/link";
import HeaderButton from "../button/HeaderButton";
import Box from "./Box";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div style={{ width: "1200px", margin: "0 auto" }}>
      <div className="flex items-center">
        <div className="flex-none">
          <Logo />
        </div>
        <div className="box" style={{ width: "730px" }}>
          <Box />
        </div>
        <div className="flex-1 pt-6 ">
          <div className="inline-flex">
            <Link href="./login">
              <button className="text-blue-900 font-bold underline pt-2">
                <span className="ml-10">LOG</span>
                <span className="ml-1">IN</span>
              </button>
            </Link>
            <div className="ml-4">

              <HeaderButton />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
