import Image from "next/image";
import Link from "next/link";

const imgData = [
  {
    src: "/linkdin-1.svg",
    width: 20,
    height: 20,
    href: "/",
  },
  {
    src: "/facebook-1.svg",
    width: 20,
    height: 20,
    href: "/",
  },
  {
    src: "/twitter-1.svg",
    width: 20,
    height: 20,
    href: "/",
  },
];

const Box = () => {
  return (
    <>

      <div className=" bg-gradient-to-r from-fuchsia-200 to-purple-300 border w-auto h-7 mt-5 rounded-md flex justify-between">
        <div className="px-10 text-center pt-1 flex"> 
          {imgData.map((data, index) => {
            return (
              <>
                <Link href={data.href}>
                  <Image
                    key={index}
                    src={data.src}
                    alt="Icons"
                    width={data.width}
                    height={data.height}
                  />
                </Link>
              </>
            );
          })}
        </div>
        <div>
          <ul className=" inline flex flex-row gap-1 pt-1 pr-10">
            <li className="pt-1">
              <img src="./flag.svg" />
            </li>
            <li className="text-[#FFFFFF] text-lg font-Aclonica">EN</li>
            <li className="pt-1">
              <img src="./flat-color-icons_settings.svg" alt="image" />

            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Box;
