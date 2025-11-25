import SectionsTitle from "../SectionsTitle/SectionsTitle";
import BrandsItem from "../ForBarndsProducts/BrandsItem/BrandsItem";
import { allBrandLogo } from "../../../Data.js";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function BrandsSupplements() {
  const [sliderRef] = useKeenSlider({
    rtl: true,
    slides: {
      perView: 5,
      spacing: 15,
    },
      breakpoints: {
    "(max-width: 1200px)": {
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    "(max-width: 992px)": {
      slides: {
        perView: 3,
        spacing: 8,
      },
    },
    "(max-width: 768px)": {
      slides: {
        perView: 2,
        spacing: 6,
      },
    },
    "(max-width: 480px)": {
      slides: {
        perView: 3,
        spacing: 4,
      },
    }},
  });
  return (
    <div className="bg-white pt-4 pb-4 pr-3 pl-3 container-custom">
      <SectionsTitle title="برند های تحت پوشش" />
      <div className="gap-2 mt-5 mb-5 items-center justify-center">
        <div ref={sliderRef} className="keen-slider md:hidden w-full">
          {allBrandLogo.map((logo) => (
            <BrandsItem key={logo.id} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
}
