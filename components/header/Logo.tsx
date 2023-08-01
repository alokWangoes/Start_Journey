// import image from '../../assets/images/logo.png'

import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="p-6 max-w-sm  w-60 h-auto">
        <Image
          src="/logo.svg" 
          alt="Logo"
          width={600} 
          height={400}  
        />
      </div>
    </>
  );
};

export default Logo;
