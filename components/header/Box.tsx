import Image from "next/image";
import Link from "next/link";

const imgData = [
  {
    src: "/linkdin.svg",
    width: 20,
    height: 20,
    href: "/",
  },
  {
    src: "/facebook.svg",
    width: 20,
    height: 20,
    href: "/",
  },
  {
    src: "/twitter.svg",
    width: 20,
    height: 20,
    href: "/",
  },
];

const Box = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-fuchsia-200 to-purple-300 border w-auto h-7 mt-5 rounded-md flex">
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
      </div>
    </>
  );
};

export default Box;
