import TopBarMobile from "../TopBarMobile/TopBarMobile";
import { useParams } from "react-router-dom";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import OnsPageContent from "./OnsPageContent/OnsPageContent";
import SliderProducts from "../SliderProducts/SliderProducts";
import Footer from "../Footer/Footer";
import { allProducts } from "../../../Data";
import { ZoomProvider } from "../../Context/ZoomContext.jsx";

export default function OnsPageProducts() {
  // ================================================================

  const pageID = useParams().ProductID;

  // ====================== Found Categury Prodauct Name ===========

  const nameBreadCrumb = allProducts.find((item) => item.id == pageID);
  let titleBreadCrumb = "";
  let linkCategury = "";
  switch (nameBreadCrumb.categury) {
    case "creatin":
      {
        titleBreadCrumb = "کراتین";
        linkCategury = "/categuryByProducts/cratin";
      }
      break;
    case "gainer":
      {
        titleBreadCrumb = "گینر";
        linkCategury = "/categuryByProducts/gainer";
      }
      break;
    case "Growth hormone":
      {
        titleBreadCrumb = "هورمون رشد";
      }
      break;
    default: {
      titleBreadCrumb = "در حال توسعه";
    }
  }

  // ==============================================================

  return (
    <>
      <div className="container-custom">
        <TopBarMobile />
        <div className="relative top-[90px] sm:pt-10">
          <RoadMapSite
            name={nameBreadCrumb.name}
            titleBreadCrumb={titleBreadCrumb}
            linkCategury={linkCategury}
          />
          <ZoomProvider>
            <div className="">
              <OnsPageContent />
            </div>
          </ZoomProvider>
          <SliderProducts title="محصولات مرتبط" />
          <Footer />
        </div>
      </div>
    </>
  );
}
