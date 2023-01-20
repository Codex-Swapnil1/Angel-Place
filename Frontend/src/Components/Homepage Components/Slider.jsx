import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'swiper/less/navigation';

import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

const imagedatalink = [
  "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_flash_sale_flat60_desktop1674107461072.gif",
  "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/hp_dp_pmp_up1100_jan_994x3991672653045548.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/hp_mktg_p01_buy3_soi_desktop1674107046331.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/slurrpfarm_hp_mkt_po3_all_2_slur401672214030878.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_soi_19thjan1674046450680.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/unique_baby_names_desktop1674121815733.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_8mlb_20thjan1674146296378.webp",
  "https://cdn.fcglcdn.com/brainbees/banners/hp_190120231674104354326.webp"

]

export default function Slider() {
  // console.log(Swiper)
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          {
            imagedatalink.map((data,index)=>{
              return <SwiperSlide key={index+1}>
                        <Image sx={{cursor:"pointer",maxWidth:"994px"}} src={data} alt={`image${index}`}/>
                      </SwiperSlide>
            })
          }
      </Swiper>
    </>
  );
}
