import Image from "next/image";
import "./Homebody.css";
import Bodycard from "./Bodycard";
const Homebody = () => {
  return (
    <>
      <div className="body w-full m-auto">
        <div className="g-blue-800 text-center w-auto  border ">
          <div className="mt-20 font-Aclonica text-4xl text-blueberry-900">
            What do you get with
            <Image
              className="inline mb-4 mx-1"
              alt="logo"
              src="/logo.svg"
              width={180}
              height={180}
            ></Image>
            <span>?</span>
          </div>
        </div>
        <div>
         <Bodycard/>
        </div>
      </div>
    </>
  );
};

export default Homebody;
