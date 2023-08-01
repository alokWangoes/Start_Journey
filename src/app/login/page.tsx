import Link from "next/link";
import { Login } from "./Login";
import Mainpage from "../../../components/home/Mainpage";
import Navbar from "../../../components/header/Navbar";
import Footerbox from "../../../components/footer/Footerbox";

const LoginPage = () => {
  return(
     <div className="bg-[url('/image/slider.png')]">
     <Navbar/>
    <Login/>
    <Footerbox/>
     </div>
  );
};
export default LoginPage;
