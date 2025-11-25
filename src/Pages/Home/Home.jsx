import { useEffect, useState } from "react";
import TopBarMobile from "@Mobile/TopBarMobile/TopBarMobile"
import WrapperCateguryItem from "@/wrapperCateguryItem/wrapperCateguryItem";
import BrandsSupplements from "@/BrandsSupplements/BrandsSupplements";
import ArticlesSections from "@/ArticlesSections/ArticlesSections";
import Footer from "@/Footer/Footer";
import MenuMobile from "@Mobile/MenuMobile/MenuMobile";
import SectionsPreeSellProducts from "@/SectionsPreeSellProducts/SectionsPreeSellProducts";
import DiscriptionHome from "@/DiscriptionHome/DiscriptionHome";
import FrequentlyAskedQuestions from "@/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import TopHomeSections from "@/TopHomeSections/TopHomeSections";
import ArticlesSlider from "@/ArticlesSlider/ArticlesSlider";




export default function Home() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [arrayUserBaskets, setArrayUserBaskets] = useState([]);

  return (
    <>
      <div className="max-w-[1250px] mx-auto">
        <TopBarMobile />
        <div className="pt-20">
          <TopHomeSections />
        </div>
        <div className="flex flex-col gap-10   justify-center">
          <WrapperCateguryItem />
          <div className=" flex flex-col gap-10 pb-10 mt-10-custom">
            <SectionsPreeSellProducts
              setArrayUserBaskets={setArrayUserBaskets}
            />
            <div className="">
              <DiscriptionHome />
            </div>

            <BrandsSupplements />
            <div className="block sm:hidden ">
              <ArticlesSlider />
            </div>
            <div className="hidden sm:block ">
              <ArticlesSections />
            </div>
            <div className=""></div>
            <img src="./../../Images/HomeImage/1.webp" alt="" />
            <FrequentlyAskedQuestions />
          </div>
          <div className="mb-16 sm:mb-0">
            <Footer />
          </div>
        </div>
        <div className="sm:hidden">
          <MenuMobile />
        </div>
      </div>
    </>
  );
}
