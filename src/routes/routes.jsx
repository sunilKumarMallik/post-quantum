/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Parentlayout from "../component/layout/parentlayout";

// import Blog from "../pages/Resources/Blog";

import Homes from "../pages/Homes/Homes";
import QCS from "../pages/QuantumSolution/QCS";
import QAI from "../pages/QuantumSolution/QAI";
import QS from "../pages/QuantumSolution/QS";
import ProductHome from "../pages/ProductOverview/ProductHome";
import Blogging from "../pages/Insights/Blogging";
import NewsRoom from "./../pages/Insights/NewsRoom";
import Culture from "./../pages/Careers/Culture";
import JoinTeam from "./../pages/Careers/JoinTeam";
import Openings from "./../pages/Careers/Openings";
import ContactUs from "./../pages/ContactUs/ContactUs";
import Partner from "./../pages/Partner/Partner";
import PQC from "../pages/ProductOverview/PQC";
import QKD from "../pages/ProductOverview/QKD";
import QRNG from "../pages/ProductOverview/QRNG";
import QN from "../pages/ProductOverview/QN";
import QSC from "../pages/ProductOverview/QSC";
import QIT from "../pages/ProductOverview/QIT";
import PQCSolution from "../pages/SolutionsPages/PQCSolution";
import QRNGSolution from "../pages/SolutionsPages/QRNGSolution";
import QNSolution from "../pages/SolutionsPages/QNSolution";
import QKDSolution from "../pages/SolutionsPages/QKDSolution";
import QITSolution from "../pages/SolutionsPages/QITSolution";
import PharmaSolution from "../pages/SolutionsPages/PharmaSolution";
import FintectSoluiton from "../pages/SolutionsPages/FintectSoluiton";
import PqcMigration from "../pages/PqcMigration";
import Approval from "../pages/QuantumSafeEco/Approval";
import HybridPQ from "../pages/QuantumSafeEco/HybridPQ";
import MessagingPQ from "../pages/QuantumSafeEco/MessagingPQ";
import QuantumSafe from "../pages/QuantumSafeEco/QuantumSafe";
import Identity from "../pages/QuantumSafeEco/Identity";
import Industry from "../pages/Industries/Industry";
import PQVideos from "../pages/PqInsights/PQVideos";
import ContactDetails from "../pages/AboutPage/ContactDetails";
import Company from "../pages/AboutPage/Company";
import AboutUs from "../pages/AboutPage/AboutUs";
import PQInsights from "../pages/PqInsights/PQInsights";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Parentlayout />,
      children: [
        // PostQantum
        { path: "/", element: <Homes /> },
        { path: "/pqinsights", element: <PQInsights /> },
        { path: "/qcs", element: <QCS /> },
        { path: "/qai", element: <QAI /> },
        { path: "/qs", element: <QS /> },
        { path: "/producthome", element: <ProductHome /> },
        { path: "/blogging", element: <Blogging /> },
        { path: "/culture", element: <Culture /> },
        { path: "/jointeam", element: <JoinTeam /> },
        { path: "/opening", element: <Openings /> },
        { path: "/newsroom", element: <NewsRoom /> },
        { path: "/pqcmigration", element: <PqcMigration /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/partner", element: <Partner /> },
        { path: "/pqc", element: <PQC /> },
        { path: "/qkd", element: <QKD /> },
        { path: "/qrng", element: <QRNG /> },
        { path: "/qn", element: <QN /> },
        { path: "/qsc", element: <QSC /> },
        { path: "/qit", element: <QIT /> },
        { path: "/qai", element: <QAI /> },
        { path: "/approval", element: <Approval /> },
        { path: "/hybridpq", element: <HybridPQ /> },
        { path: "/messagingpq", element: <MessagingPQ /> },
        { path: "/quantumsafe", element: <QuantumSafe /> },
        { path: "/identity", element: <Identity /> },
        { path: "/industry", element: <Industry /> },
        { path: "/pqvideos", element: <PQVideos /> },
        { path: "/contactdetails", element: <ContactDetails /> },
        { path: "/company", element: <Company /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/qcs/pqc", element: <PQCSolution /> },
        { path: "/qcs/qrng", element: <QRNGSolution /> },
        { path: "/qcs/qn", element: <QNSolution /> },
        { path: "/qcs/qkd", element: <QKDSolution /> },
        { path: "/qcs/qit", element: <QITSolution /> },
        { path: "/qai/pharmaai", element: <PharmaSolution /> },
        { path: "/qai/fintechai", element: <FintectSoluiton /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
