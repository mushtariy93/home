import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import article1 from "../../assets/images/article.png";
import article2 from "../../assets/images/article2.png";
import article3 from "../../assets/images/article3.png";


const link = [
      {
        id: 1,
        url: article1,
        title: "2023 Holiday Gift Guide",
        read: "Read More",
        icon: <FaArrowRightLong />,
      },
      {
        id: 2,
        url: article2,
        title: "2023 Holiday Gift Guide",
        read: "Read More",
        icon: <FaArrowRightLong />,
      },
      {
        id: 3,
        url: article3,
        title: "2023 Holiday Gift Guide",
        read: "Read More",
        icon: <FaArrowRightLong />,
      },
    ];

const Latest = () => {
    const latestItems = link?.map((p) => (
      <div key={p.id} className="flex flex-col gap-4">
        <div className="">
          <img src={p.url} alt="" className="w-hull h-auto rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-[18px] leading-7 text-[#23262F]">
            {p.title}
          </p>
          <Link className="w-[120px] flex items-center gap-2 font-medium text-sm border-b-2 border-b-black">
            {p.read}
            {p.icon}
          </Link>
        </div>
      </div>
    ));

     return (
       <div className="container flex flex-col gap-10 mb-24 px-4">
         <div className="flex justify-between items-center flex-wrap gap-4">
           <p className="font-medium text-[32px] leading-9 max-[500px]:text-[24px]">
             Latest Articles
           </p>
           <Link
             to={"/"}
             className="flex items-center gap-2 border-b-2 border-b-black text-sm"
           >
             View More
             <FaArrowRightLong />
           </Link>
         </div>
         <div className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-2 max-[500px]:grid-cols-1">
           {latestItems}
         </div>
       </div>
     );
  

  
}

export default Latest
