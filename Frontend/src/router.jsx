import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./component/about-us/AboutUs";
import Careers from "./component/about-us/Careers";
import Contact from "./component/about-us/Contact";
import DigitalMarketingSolutions from "./component/about-us/DigitalMarketingSolutions";
// import HostingManagement from "./component/about-us/HostingManagement";
import SamplePage from "./component/about-us/SamplePage";
import WhyUs from "./component/about-us/WhyUs";
import HeroSection from "./component/Home";
import Portfolio from "./component/Portfolio";
import RequestAQuote from "./component/RequestAQuote";
import ApplicationDevelopment from "./component/services/ ApplicationDevelopment";
import GraphicDesign from "./component/services/ GraphicDesign";
import ContentWriting from "./component/services/ContentWriting";
import DigitalMarketing from "./component/services/DigitalMarketing";
import WebDesigning from "./component/services/WebDesigning";
import WebDevelopment from "./component/services/WebDevelopment";
import DevOps from "./component/soultions/ DevOps";
import SLASupportServices from "./component/soultions/ SLASupportServices";
import SoftwareTesting from "./component/soultions/ SoftwareTesting";
import BackupDisasterRecovery from "./component/soultions/BackupDisasterRecovery";
import ProductLifecycleManagement from "./component/soultions/ProductLifecycleManagement";
import QualityAssuranceServices from "./component/soultions/QualityAssuranceServices";
import ShopifyDevelopment from "./component/soultions/ShopifyDevelopment";
import WebHostingServices from "./component/soultions/WebHostingServices";
import All_Logos from "./component/All_Logos";
import HireDeveloper from "./component/HireDeveloper";
import Days from "./component/about-us/Days";
import BuildStart from "./component/about-us/BulidStart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HeroSection /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/why-us", element: <WhyUs /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contact /> },
      { path: "/sample-page", element: <SamplePage /> },
      // { path: "/hoisting-management", element: <HostingManagement /> },
      {
        path: "/digital-marketing-solutions",
        element: <DigitalMarketingSolutions />,
      },
      { path: "/application-developer", element: <ApplicationDevelopment /> },
      { path: "/web-developer", element: <WebDevelopment /> },
      { path: "/web-designing", element: <WebDesigning /> },
      { path: "/graphic-design", element: <GraphicDesign /> },
      { path: "/digital-marketing-3", element: <DigitalMarketing /> },
      { path: "/content-writing", element: <ContentWriting /> },
      { path: "/devops", element: <DevOps /> },
      {
        path: "/product-lifecycle-management",
        element: <ProductLifecycleManagement />,
      },
      {
        path: "/quality-assurance-services",
        element: <QualityAssuranceServices />,
      },
      { path: "/sla-support-services", element: <SLASupportServices /> },
      {
        path: "/backup-disaster-recovery",
        element: <BackupDisasterRecovery />,
      },
      { path: "/web-hosting-services", element: <WebHostingServices /> },
      { path: "/software-testing", element: <SoftwareTesting /> },
      { path: "/shopify-developer", element: <ShopifyDevelopment /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/request-a-quote", element: <RequestAQuote /> },
      { path: "/all-logos", element: <All_Logos /> },
      {path:"/hire-developer", element:<HireDeveloper/>},
      {path:"/days",element:<Days/>},
      {path:"/build-start",element:<BuildStart/>}
    ],
  },
]);

export default router;
