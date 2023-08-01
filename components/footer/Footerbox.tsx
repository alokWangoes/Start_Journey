import Image from "next/image";
import "./Footerbox.css";
import Link from "next/link";
interface images {
  src: string;
  width: number;
}

const IconData: images[] = [
  {
    src: "/linkdin.svg",
    width: 20,
  },
  {
    src: "/facebook.svg",
    width: 20,
  },
  {
    src: "/twitter.svg",
    width: 20,
  },
];

const Footerbox = () => {
  return (
    <>
      <div className="main">
        <div className="footer">
          <div className="flex flex-row pt-10 mx-10 w-auto h-96 justify-center">
            <div className="">
              <Image
                src="/logo.svg"
                alt="logo.img"
                width={250}
                height={250}
              ></Image>
              <div className="pt-10 ">
                <p className="w-52">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis eligendi
                </p>
              </div>
            </div>
            <div className=" pt-6 pl-10">
              <div className=" bg-gradient-to-r from-blue-950 rounded-3xl bg-gradient-to-r h-9 flex flex-row  w-auto gap-60 pt-2 mr-3 ">
                <span className="text-white w-32  text-center  ">
                  Quick links
                </span>
                <span className="text-white w-32  text-center  ">
                  Stay updated
                </span>
                <span className="text-white w-32 text-center">
                  <Image
                    src="/facebook.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                    className="inline px-1 cursor-pointer"
                  ></Image>
                  <Image
                    src="/linkdin.svg"
                    alt="facebook"
                    width={30}
                    height={30}
                    className="inline px-1 cursor-pointer"
                  ></Image>
                  <Image
                    src="/twitter.svg"
                    alt="facebook"
                    width={30}
                    height={0}
                    className="inline px-1 cursor-pointer"
                  ></Image>
                </span>
              </div>
              <div className="flex flex-row mx-4">
                <div className=" flex flex-col gap-4 pt-8  text-blue-950">
                  <Link href={"/"}>
                    <span>Home</span>
                  </Link>
                  <Link href={"/"}>
                    <span>Contact</span>
                  </Link>
                  <Link href={"/"}>
                    <span>FAQs</span>
                  </Link>
                  <Link href={"/"}>
                    <span>Pricing</span>
                  </Link>
                  <Link href={"/"}>
                    <span>Documentation</span>
                  </Link>
                </div>
                <div className="  flex flex-col mx-6 gap-4 pt-8 text-blue-950 ">
                  <Link href={"/"}>
                    <span>Etsy</span>
                  </Link>
                  <Link href={"/"}>
                    <span>Walmart</span>
                  </Link>
                  <Link href={"/"}>
                    <span>eBaby</span>
                  </Link>
                  <Link href={"/"}>
                    <span>Lorem</span>
                  </Link>
                </div>
                <div className="">
                  <p className="font-bold pt-5 pl-14 text-blue-950 ">
                    Please enter your email{" "}
                  </p>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="border-4 rounded-xl h-10 w-76 pl-14 mx-12 mt-3 pt-5"
                    />
                    {/* <button className="bg-pink-500 w-28 h-10 rounded-xl  ">
                    Send
                  </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pb-6">
          <ul className="flex flex-row gap-20 font-Roboto text-center  justify-center  ">
            <li className="   text-[#5972C9] ">
              &copy; 2023 PODfusion. All rights preserved
            </li>
            <li className="   text-[#3D318A] cursor-pointer  ">
              Intellectual Property Policy
            </li>
            <Link href="/">
              <li className="   text-[#3D318A] cursor-pointer  ">
                Terms of Service
              </li>
            </Link>
            <Link href="/">
              <li className="  text-[#3D318A] cursor-pointer  ">
                Privacy Policy
              </li>
            </Link>
            <Link href="/">
              <li className="  text-[#3D318A] cursor-pointer  ">Security</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footerbox;
