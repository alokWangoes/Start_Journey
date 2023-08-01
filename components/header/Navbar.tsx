import HeaderButton from "../button/HeaderButton";
import Box from "./Box";
import Logo from "./Logo";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div style={{width: "1200px",margin: "0 auto"}}>
      <div className="flex items-center">
        <div className="flex-none">
          <Logo />
        </div>
        <div className="box" style={{width : "730px"}}>
          <Box />
        </div>
        <div className="  pt-6 ">
          <div className=" flex flex-row gap-5">
            <div className="text-blue-900 px-4 font-bold underline pt-2 w-8 inline cursor-pointer">
              <li className="inline ">LOGIN</li>
              {/* LOGIN  */}
            
              {/* <li className="ml-1">IN</li> */}
            </div>
            <div className="ml-4 px-8">
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
