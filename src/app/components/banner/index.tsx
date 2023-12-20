import "../../styles/global.scss"
import Image from "next/image"
import React from 'react';
import bnn from '../../../../public/bnn.jpg'

interface BannerProps {

}

const Banner: React.FC<BannerProps> = () => {


  return (
    <div className="bg-image"> 
        <div className="content"> 
            <h3 className="text-title">Enjoy the freedom of vision restored.</h3>
            <br />
            <h2 className="text-subtitle">Enjoy the freedom of vision restored.</h2>
        </div>
        <div className="content-image"> 
            <Image
            width={2000}  
            alt=""
            src={bnn} 
            />
        </div>  
  </div>
  );
};

export default Banner;
