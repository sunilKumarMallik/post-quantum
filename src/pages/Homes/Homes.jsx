// /* eslint-disable no-irregular-whitespace */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unknown-property */
// import React from "react";
// import ReactPlayer from "react-player";

// import bgvideo from "../../assets/videos/bgvideo.mp4";
// // import Ajay from "../../assets/images/Ajay1.png";
// import Ajay from "../../assets/images/Ajay Singh.jpeg";
// import Shubhum from "../../assets/images/Shubhum.jpeg";
// import hero from "../../assets/images/HEROSQ.jpg";
// import jay from "../../assets/images/JayOberai.jpeg";
// // import Arun from "../../assets/images/Arun1.png";
// import Arun from "../../assets/images/Arun K Pati.jpeg";
// // import Vipin  from "../../assets/images/Vipin .jpeg";
// import Vipin from "../../assets/images/Vipin K.Rathi.jpeg";
// import rohit from "../../assets/images/Rohit Arora.jpeg";
// // import megha from "../../assets/images/megha.jpeg";
// import megha from "../../assets/images/Megha.jpeg";
// import Shivani from "../../assets/images/Shivani.png";
// import Manan from "../../assets/images/Manan.png";
// import sagar from "../../assets/images/Sagar Verma.jpeg";
// import Gauti from "../../assets/images/Gautum Shaw.jpeg";
// import map from "../../assets/images/map.png";
// // import blackbg from "../../assets/images/blackbg.jpg";
// import Socialicon from "../../assets/images/Socialicon.png";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useRef } from "react";

// export default function Homes() {
//   const whoRef = useRef();
//   const whyRef = useRef();
//   const missionRef = useRef();
//   const leadersRef = useRef();
//   const customersRef = useRef();
//   const search = window.location.search;
//   const params = new URLSearchParams(search);
//   const page = params.get("page");

//   useEffect(() => {
//     if (page == "who") {
//       whoRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//     if (page == "why") {
//       whyRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//     if (page == "mission") {
//       missionRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//     if (page == "leaders") {
//       leadersRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//     if (page == "customers") {
//       customersRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   return (
//     <div className="bg-black">
//       {/* Section-1 About us */}
//       <section className="relative h-screen w-screen">
//         {/* <ReactPlayer
//           url={bgvideo}
//           playing
//           loop
//           muted
//           width="100%"
//           height="100%"
//           playbackRate={1.5}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         /> */}
//         <img
//           src={hero}
//           width="100%"
//           height="100%"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         />
//         <div
//           className="absolute top-0 left-0 w-full h-full"
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.2)",
//           }}
//         ></div>
//         <nav
//           x-data="{ isOpen: false }"
//           className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center absolute top-0 left-0 right-0"
//         >
//           <div className="flex items-center justify-between">
//             {/* Add your logo or other content here */}
//             {/* Mobile menu button */}
//             <div className="flex lg:hidden"></div>
//           </div>
//           {/* Mobile Menu open: "block", Menu closed: "hidden" */}
//           {/* Add your mobile menu content here */}
//         </nav>
//         <div
//           className="container px-6 py-48 mx-auto text-start"
//           data-aos="fade-right"
//           data-aos-offset="100"
//           data-aos-easing="ease-in-sine"
//         >
//           <div className=" mx-auto">
//             <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo text-red-500 dark:text-white">
//               About Us
//             </h1>
//             <p className="text-xl md:text-xl lg:text-4xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
//               Post Quantum (SQ) is at the forefront of the quantum
//               <br />
//               Revolution Working on High Impact Industry Solutions.
//             </p>
//             <p className="text-xl md:text-xl lg:text-xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start">
//               Our suite of products and services will revolutionize major
//               industries including Government, Defense, <br /> Finance,
//               Healthcare, Smart Cities, Energy, Telecom, Blockchain, AI, and
//               many more.
//             </p>
//             <div className="text-xl lg:text-2xl not-italic font-normal text-white bg-opacity-80 mt-4 lg:mt-6"></div>
//           </div>
//         </div>
//       </section>
//       {/* LeaderShip */}
//       <section
//         className="text-gray-600 body-font mt-20"
//         // style={{
//         //     borderRadius: "100px 0px",
//         //     background: "var(--gray-lighter, #F6F7F8)",
//         // }}
//       >
//         <div className="container px-5 py-4 mx-auto ">
//           <div
//             className=" bg-[#162227] rounded-xl mx-auto p-8"
//             data-aos="flip-left"
//           >
//             <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl text-center text-white my-10">
//               <span className="font-heebo text-primary text-4xl sm:text-[40px]">
//                 Meet{" "}
//                 <span className="border-b-2 border-secondary text-red-500">
//                   the
//                 </span>
//                 <span className="text-white"> Team</span>
//               </span>
//             </h1>
//             <p className="text-xl md:text-xl lg:text-xl content-center  my-16 lg:mt-6 text-white  font-medium tracking-wide font-heebo w-full  italic text-justify">
//               Post Quantum ("SQ"), a Indian company headquartered in New
//               Delhi , with extensive R&D in the most prominent universities in
//               India, has emerged as a trailblazer in quantum communication,
//               specializing in cutting-edge quantum-safe encryption technologies.
//               We are thrilled to present  Quantum's multifaceted approach
//               to quantum communication, sensing, and artificial intelligence,
//               showcasing our unwavering commitment to pushing the boundaries of
//               quantum technology. The technologies outlined herein not only
//               drive immediate advancements in their respective domains but also
//               possess the transformative potential to revolutionize industries,
//               ushering in the Quantum Age. SQ is committed to empowering
//               governments and corporations with secure and future-proof
//               communication solutions. The company's expertise spans various
//               quantum communication domains, encompassing post-quantum
//               encryption, quantum key distribution (QKD), random number
//               generation, and quantum communication infrastructure.
//             </p>
//           </div>

//           <div
//             ref={whoRef}
//             className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center"
//           >
//             {/* First div */}
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] "
//               data-aos="fade-right"
//               data-aos-offset="300"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={jay}
//               />
//             </div>

//             {/* Second div */}
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
//               data-aos="fade-left"
//               data-aos-offset="300"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Jay Oberai
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Founder & CEO
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white   text-justify mt-2">
//                 Serial entrepreneur (Founded Post Wealth Group in Swiss) and
//                 angel investor (e.g., Cambridge Quantum Computing) with over 30
//                 years of experience in private banking and wealth management
//                 -Former Global Head of Portfolio Advisory at Coutts Private Bank
//                 & Head of Investment Advisory at Citi Bank -BA/MA in Economics
//                 and Finance at University of Cambridge
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//           </div>

//           <div
//             className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center"
//             data-aos="fade-left"
//             data-aos-offset="100"
//             data-aos-easing="ease-in-sine"
//           >
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Arun K Pati
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 CSO
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Professor at Harish-Chandra Research Institute, Quantum
//                 Information and Quantum Computation Group -PhD at University of
//                 Mumbai. -Ranked Top 2% scientist in the world recently published
//                 by the Stanford University and among Top 1% scientist in General
//                 Physics
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//             <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={Arun}
//               />
//             </div>
//           </div>

//           <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] "
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px] "
//                 alt="hero"
//                 src={Vipin}
//               />
//             </div>
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Vipin K. Rathi
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Chief Technology Officer
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo  text-white text-justify mt-2">
//                 Developer at OpenLab, CERN, Council of Scientific and Industrial
//                 Research(CSIR) and Deutsche Telecom
//                 <br />
//                 Assistant Proffesor at University of Delhi- Distributed Systems,
//                 Cloud Computing, and Blockchain <br />
//                 Completed his PhD in Blockchain Defined Networking(Distrubuted
//                 Ledgers, 5G and Edge Computing)
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//           </div>

//           <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Col. Ajay Singh
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Head of Business Development
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Accomplished Indian Army officer with 22 years of experience in
//                 cross-functional diversity, strategic operations management,
//                 critical responsibilities, project management and information
//                 operations <br />
//                 Proven record for delivering on highly confidential and complex
//                 projects and assignments by effectively managing teams and
//                 processes for the Government of India
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={Ajay}
//               />
//             </div>
//           </div>

//           <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] "
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center  rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={Shivani}
//               />
//             </div>
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Shivani Rajput
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Director, Quantum AI
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Proficient in leveraging quantum computing for advancing Quantum
//                 AI applications
//                 <br />
//                 IBM Qiskit Advocate and Certified Qiskit Associate Developer
//                 <br />
//                 Recognized achiever: First Rank in B.Sc. Physics, Letter of
//                 Appreciation from UPES, Linux Foundation's Shubhra Kar LiFT
//                 Scholarship, and WOMANIUM Global Quantum Computing Hackathon
//                 2022 winner
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//           </div>

//           <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Gautum Shaw
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Director Quantum sensing QKD
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo   text-justify mt-2 text-white">
//                 Conducted research for Gravitational Physics (Leibniz
//                 University, Hannover) in 2019 <br />
//                 Achieved 2nd place at BRICS FUTURE SKILLS CAMP 2020, Won 1st
//                 prize for poster presentation at Research Scholar's day 2019,
//                 IIT Madras, received the BTIRC award at IEEE-ANTS 2020 held at
//                 IIIT-Delhi
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={Gauti}
//               />
//             </div>
//           </div>

//           <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] "
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center  rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={megha}
//               />
//             </div>
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Megha Sharma
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Business Strategy Manager
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Seasoned expert with more than a decade of experience in
//                 managing large and complex programs
//                 <br />
//                 Skillful in design & deliver solutions that remedy core business
//                 issues and position the organization to reach the next level of
//                 profitability through technology introduction.
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//           </div>

//           <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Manan Sabharwal
//               </h1>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Possesses meticulous understanding and astute skills in
//                 regulatory, legal, compliance, and finance domains.
//                 <br />
//                 He excelled in a boutique transactional law firm, leading deals
//                 exceeding USD 50M for startups and venture capital firms in
//                 fundraising and M&A activities ranging from Series-A to
//                 significant control acquisitions across diverse sectors.
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={Manan}
//               />
//             </div>
//           </div>

//           <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] "
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center  rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={Shubhum}
//               />
//             </div>
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Dr. Shubham Tatvamasi
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Director, Infra & New Technology
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Extensive experience in OpenStack, Kubernetes, Cloud platforms,
//                 and CI/CD automation.
//                 <br />
//                 AWS Certified Solutions Architect, Certified Kubernetes
//                 Administrator, and Certified Kubernetes Security Specialist Set
//                 up end-to-end data centers and deployed private chains on the
//                 cloud.
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//           </div>

//           <div className="container mx-auto flex flex-col-reverse md:flex-row px-5 py-24 items-center">
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Sagar Verma
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Front End Developer
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Possesses extensive experience in Mobile development with a
//                 proven track record of excellence across 8+ successful projects.
//                 <br />
//                 Renowned for harnessing cutting-edge expertise to create
//                 seamless and innovative mobile experiences.
//                 <br />
//                 Recognized for consistently delivering beyond expectations and
//                 receiving accolades for exceptional contributions.
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={sagar}
//               />
//             </div>
//           </div>

//           <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
//             <div
//               className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-tl-[50px] rounded-br-[50px] "
//               data-aos="fade-right"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <img
//                 className="object-cover object-center  rounded-tr-[70px] rounded-bl-[70px]"
//                 alt="hero"
//                 src={rohit}
//               />
//             </div>
//             <div
//               className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
//               data-aos="fade-left"
//               data-aos-offset="100"
//               data-aos-easing="ease-in-sine"
//             >
//               <h1 className="text-3xl not-italic font-bold leading-9 title-font sm:text-4xl  mb-4 font-heebo text-red-500">
//                 Rohit Arora
//               </h1>
//               <p className="text-xl not-italic font-bold leading-6 lg:w-1/2 w-full font-heebo text-white">
//                 Product Manager
//               </p>
//               <p className="text-xl not-italic font-normal leading-7 font-heebo text-white  text-justify mt-2">
//                 Possesses Full Stack and Linux/Windows
//                 administration experience​
//                 <br />
//                 Deployed Openedx on a private cloud using OpenStack, Cockpit on
//                 Kubernetes & Docker​
//                 <br />
//                 Remodelled Openedx MySQL schema, rebuilt Sass structure​ and
//                 automated backups of MySQL & MongoDB databases of Openedx.
//               </p>
//               <span>
//                 <img src={Socialicon} alt="" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Contact section */}
//       <section className="text-gray-600 body-font relative">
//         <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//           <div
//             className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
//             data-aos="flip-left"
//           >
//             <img
//               src={map}
//               alt="map"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div
//               className="relative flex flex-wrap py-6 rounded shadow-md lg:w-1/2 md:w-1/2"
//               style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
//             >
//               <div className="lg:w-1/2 px-6">
//                 <h2 className="title-font font-bold  text-gray-900 tracking-widest text-xs">
//                   ADDRESS
//                 </h2>
//                 <p className="mt-1">
//                   16th Floor, Regus, World Trade Tower, Sector 16, Noida, 201301
//                 </p>
//               </div>
//               <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
//                   EMAIL
//                 </h2>
//                 <a className="text-indigo-500 leading-relaxed">
//                   info@Postquantum.in
//                 </a>
//                 <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
//                   PHONE
//                 </h2>
//                 <p className="leading-relaxed">123-456-7890</p>
//               </div>
//             </div>
//           </div>
//           <div
//             className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8"
//             data-aos="flip-right"
//             style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//           >
//             <h1 className="text-md not-italic font-bold leading-9 title-font sm:text-md text-white mb-4 font-heebo text-center">
//               Are You Ready to Witness the Future of Data Security?
//             </h1>
//             <form>
//               <div className="-mx-2 md:items-center md:flex">
//                 <div className="flex-1 px-2">
//                   <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John "
//                     className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                     style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                   />
//                 </div>
//                 <div className="flex-1 px-2 mt-4 md:mt-0">
//                   <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Doe"
//                     className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                     style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                   />
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="johndoe@example.com"
//                   className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400  rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                   style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                 />
//               </div>
//               <div className="w-full mt-4">
//                 <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
//                   Message
//                 </label>
//                 <textarea
//                   className="block w-full h-28 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400    rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
//                   placeholder="Message"
//                   style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//                   defaultValue={""}
//                 />
//               </div>
//               <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                 Send message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import React from "react";
import Hero from "../Hero";
import AboutSection from "../AboutSection";
import OurProducts from "../OurProducts";
import OurMembers from "../OurMembers";
import AllBlogs from "../AllBlogs";
import ContactSection from "../ContactSection";
import KeyIndustry from "../KeyIndustry/KeyIndustry";
const Homes = () => {
  return (
    <div>
      <Hero />
      <OurProducts />
      <KeyIndustry />
      <AboutSection />

      {/* <OurMembers /> */}
      <AllBlogs />
      {/* <ContactSection /> */}
    </div>
  );
};

export default Homes;
