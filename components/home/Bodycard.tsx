
// interface item {
    
//     id: number,
//     title: string,
//     description: string,
//     image: string,

// }
// const cardData : item [] = [
//     {
//         id: 1,
//         title: "We Give You The Best Solution",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente non aspernatur repellat doloribus exercitationem nesciunt ratione voluptas debitis aliquam ",
//         image: "/images/slider.png",
//     },
//     {
//         id: 2,
//         title: "We Give You The Best Solution",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente non aspernatur repellat doloribus exercitationem nesciunt ratione voluptas debitis aliquam ",
//         image: "/images/slider.png",
//     },
//     {
//         id: 3,
//         title: "We Give You The Best Solution",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente non aspernatur repellat doloribus exercitationem nesciunt ratione voluptas debitis aliquam ",
//         image: "/images/slider.png",
//     },
//     {
//         id: 4,
//         title: "We Give You The Best Solution",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente non aspernatur repellat doloribus exercitationem nesciunt ratione voluptas debitis aliquam ",
//         image: "/images/slider.png",
//     },
//     {
//         id: 5,
//         title: "We Give You The Best Solution",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente non aspernatur repellat doloribus exercitationem nesciunt ratione voluptas debitis aliquam ",
//         image: "/images/slider.png",
//     },
//     {
//         id: 6,
//         title: "We Give You The Best Solution",
//         description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente non aspernatur repellat doloribus exercitationem nesciunt ratione voluptas debitis aliquam ",
//         image: "/images/slider.png",
//     },
// ];

// const Bodycard = () => {
//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-3 sm: grid-cols-2 gap-10 w-2/3 m-auto mt-32">
//                 {cardData.map((item: item ) => {
//                     return (
//                         <div key={item.id} className="flex flex-col border w-62 rounded-lg ">
//                             <div className=" ">
//                                 <img src="/image/slider.png" alt="" />
//                             </div>
//                             <div className="">
//                                 <div className="w-30 text-center">
//                                     <h3 className="text-xl font-bold text-center mx-3 my-3">
//                                         {item.title}
//                                     </h3>
//                                     <p className="mx-2 my-2 ">{item.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default Bodycard;


interface item {
    
    id: number,
    title: string,
    description: string,
    image: string,

}

const cardData : item []= [
    {
        id: 1,
        title: "Connect multiple providers together",
        description:
            "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed. ",
        image: "/images/slider.png",
    },
    {
        id: 2,
        title: "Connect multiple providers together",
        description:
            "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed. ",
        image: "/images/slider.png",
    },
    {
        id: 3,
        title: "Connect multiple providers together",
        description:
            "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed. ",
        image: "/images/slider.png",
    },
    {
        id: 4,
        title: "Connect multiple providers together",
        description:
            "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed. ",
        image: "/images/slider.png",
    },
    {
        id: 5,
        title: "Connect multiple providers together",
        description:
            "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed. ",
        image: "/images/slider.png",
    },
    {
        id: 6,
        title: "Connect multiple providers together",
        description:
            "Lorem ipsum dolor sit amet consectetur. Mauris mi etiam dignissim turpis integer gravida sed. ",
        image: "/images/slider.png",
    },
];

const Bodycard = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 sm: grid-cols-2 gap-10 w-2/3 m-auto mt-32 items-start">
                {cardData.map((item: item ) => {
                    return (
                        <div key={item.id} className="inline-grid flex-col">
                            <div className="">
                                <img src="/image-1.svg" alt="" style={{borderRadius: "25px 25px 0px 0px",width: "100%"}}/>
                            </div>
                            <div className="" style={{padding: "35px 25px 42px 25px",backgroundColor: "rgba(234,193,205,0.6)",borderRadius: "0px 0px 33px 33px"}}>
                                <div className="w-30 text-center">
                                    <h3 className="text-xl font-bold text-center mb-3" style={{color: "#3D318A"}}>
                                        {item.title}
                                    </h3>
                                    <p className="" style={{color: "#52459B"}}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="grid gap-10 w-2/3 m-auto mt-32 pb-20">
        <div className="flex flex-row items-center border rounded-[165px]" style={{ backgroundColor: "rgba(234, 192, 205, 1)",border: "10px solid rgba(213, 152, 238, 1)",padding: "25px 65px 25px 65px",backgroundImage: "url('./Vector-2.png')",backgroundSize: "cover",backgroundPosition: "center center",backgroundRepeat: "no-repeat"}}>
          <div className="w-1/2">
            <h4 className="mb-8 text-3xl font-bold text-[#3D318A] ">Lorem ipsum dolor sit amet consectetur.</h4>
            <p  className="mb-5 text-[#43397C]">
              Lorem ipsum dolor sit amet consectetur. Ante leo odio luctus urna
              est risus euismod. Semper quis porttitor lorem malesuada nisl a
              non imperdiet. Fames aenean cursus at netus.
            </p>
            <div className="flex justify-center">
            <button className="relative font rounded-md w-36 h-10 overflow-hidden flex flex-row  box-border items-center justify-center  text-left  text-white font-aclonica" style={{backgroundImage: "linear-gradient(to top, rgba(137,129,184,60%), rgba(137,129,184,100%))"}}>
              Subscribe
            </button>
            </div>
          </div>
          <div className="w-1/2 text-end">
            <img src="/img-2.svg" alt="image-right" style={{width: "50%",display: "inline-flex"}}/>
          </div>
        </div>
      </div>
        </>
    );
};

export default Bodycard;

