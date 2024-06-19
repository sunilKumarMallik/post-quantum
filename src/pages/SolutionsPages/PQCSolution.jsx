// import React from "react";
// import Revolution from "../../assets/images/Revolution.png";
// import IconFC from "../../assets/images/righticon.png";
// import bgred from "../../assets/images/bgred.jpg";
// import MobileAppview from "../../assets/images/MobileAppview.png";
// import { Link } from "react-router-dom";

// import Card from "../../Card/Card";
// import HeartEmoji from "../../assets/images/smiley.jpeg";
// import Glasses from "../../assets/images/smiley.jpeg";
// import Humble from "../../assets/images/smiley.jpeg";

// import { motion } from "framer-motion";
// export default function PQCSolution() {
//     const transition = {
//         duration: 1,
//         type: "spring",
//     };
//     return (
//         <div className="bg-black">
//             {/* {/ Section-1 /} */}
//             <section
//                 className=" bg-no-repeat bg-center "
//                 style={{
//                     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${bgred})`,
//                     backgroundsize: "cover",
//                     height: "400px",
//                 }}
//             >
//                 <nav
//                     x-data="{ isOpen: false }"
//                     className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
//                 >
//                     <div className="flex items-center justify-between">
//                         <div className="flex lg:hidden"></div>
//                     </div>
//                     {/* <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"></div> */}
//                 </nav>

//                 <div className="container px-6 py-16 mx-auto text-start">
//                     <div className=" mx-auto">
//                         <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-white mt-8 dark:text-white ">
//                             Post Quantum Cryptography (PQC)
//                         </h1>
//                         <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
//                             Democratizing Data Protection With Post Quantum Encryption
//                             Technologies
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="text-gray-600 body-font">
//                 <div className="container px-5 py-10 mx-auto ">
//                     <div
//                         id="PQC"
//                         className="group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg"
//                         data-aos="zoom-in-right"
//                     >
//                         <span
//                             className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <span
//                             className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
//                             <img
//                                 className="object-cover object-center w-full h-full"
//                                 alt="hero"
//                                 src={Revolution}
//                             />
//                         </div>
//                         <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
//                             <h2 className="mt-6 mb-2 text-red-500 ">
//                                 {" "}
//                                 Solution 1 : PQE Messaging Application{" "}
//                             </h2>
//                             <div className="flex items-start mb-4">
//                                 <span className="flex-shrink-0">

//                                 </span>
//                                 <p className="text-xl not-italic font-normal leading-relaxed text-white">
//                                     Quartz- SQ is an Instant messaging service platform that
//                                     promises End to End Post Quantum Encryption on your
//                                     smartphones Quartz offers a comprehensive solution to address
//                                     all your communication requirements. Our platform ensures
//                                     communication integrity and cohesion, with controls tailored
//                                     to your functional structure. We prioritize operational
//                                     confidentiality and security, utilizing encryption and
//                                     in-premises data security measures. Administrative control
//                                     over all communication, coupled with monitoring, auditing, and
//                                     a robust repository, ensures a secure environment. Our
//                                     platform offers easy integration, efficient and speedy
//                                     performance, and a secure architecture that is not
//                                     resource-intensive. Utilizing NIST-approved algorithms, we
//                                     provide wide utilization and implementation avenues. Our
//                                     implementation covers both client and server sides, ensuring
//                                     secure key exchange and a quantum-secure tunnel. We also offer
//                                     effective message encryption for a smooth chat experience,
//                                     along with PQE implementation for efficient app performance
//                                     and security. With regular upgrades and updates, we address
//                                     variabilities to keep your communication secure and
//                                     efficient."
//                                 </p>
//                                 <span
//                                     className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                                 <span
//                                     className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     <section className="text-gray-600 body-font">
//                         <div className="container px-5 py-10 mx-auto">
//                             <div className="text-center mb-14">

//                                 <h1 className="text-3xl not-italic font-bold leading-9 font-heebo title-font sm:text-4xl text-center text-white my-10">
//                                     <span className="font-heebo text-primary text-4xl sm:text-[40px] uppercase">
//                                         Use Case-{" "}
//                                         <span className="border-b-2 border-secondary text-red-500 uppercase">
//                                             Indian Air
//                                         </span>
//                                         <span className="text-white uppercase"> Force QROOM</span>
//                                     </span>
//                                 </h1>

//                             </div>
//                             <div className="flex flex-wrap  place-content-center ">
//                                 <div className=" flex m-auto mb-6 lg:w-full md:w-1/2 sm:w-1/4  place-content-center">
//                                     <img
//                                         className="object-non object-center w-auto "
//                                         alt="hero"
//                                         src={MobileAppview}
//                                     />
//                                 </div>

//                             </div>
//                         </div>
//                     </section>

//                     <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg  " data-aos="zoom-in-left">

//                         <span
//                             className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <span
//                             className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
//                             <h2 className="mt-6 mb-2 text-red-500">
//                                 Solution 2 : Data centre Security{" "}
//                             </h2>
//                             <div className="flex items-start mb-4">

//                                 <p className="text-xl not-italic font-normal leading-relaxed text-white ">
//                                     A fully integrated Post Quantum encrypted data at rest within
//                                     the data center. Additionally, critical data when transported
//                                     over the air to any device will be post-quantum encrypted and
//                                     available for reading only to authorized personnel on
//                                     pre-authorized devices. This must be done with the latest NIST
//                                     approved Quantum Algorithms (with a plugin on server side and
//                                     on client applications) and with low Latency. The entire
//                                     system functions irrespective of the algorithms used. It has
//                                     been designed as a plug-and-play whereby any post-quantum
//                                     encryption can be plugged into the system. Post Quantum
//                                     through its R&D lab is continuously improving the efficiencies
//                                     of the algorithm used. As and when we identify a more suitable
//                                     post-quantum encryption algorithm, we will immediately upgrade
//                                     the system and provide all updates & training within 7 days .
//                                 </p>
//                                 <span
//                                     className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                                 <span
//                                     className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                             </div>
//                         </div>
//                         <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
//                             <img
//                                 className="object-cover object-center w-full h-full"
//                                 alt="hero"
//                                 src={Revolution}
//                             />
//                         </div>
//                     </div>

//                     <div className="flex flex-col md:flex-row shadow-lg md:shadow-xlbg-[#212534] mt-10 group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
//                         <span
//                             className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <span
//                             className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
//                             aria-hidden="true"
//                         />

//                         <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
//                             <img
//                                 className="object-cover object-center w-full h-full"
//                                 alt="hero"
//                                 src={Revolution}
//                             />
//                         </div>
//                         <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">

//                             <h2 className="mt-6 mb-2 text-red-500">
//                                 {" "}
//                                 Solution 3 : Secure VPN & Web Browser{" "}
//                             </h2>
//                             <div className="flex items-start mb-4">
//                                 <span className="flex-shrink-0">

//                                 </span>
//                                 <p className="text-xl not-italic font-normal leading-relaxed text-white">
//                                     Quartz offers a comprehensive solution to address all your
//                                     communication requirements. Our platform ensures communication
//                                     integrity and cohesion, with controls tailored to your
//                                     functional structure. We prioritize operational
//                                     confidentiality and security, utilizing encryption and
//                                     in-premises data security measures. Administrative control
//                                     over all communication, coupled with monitoring, auditing, and
//                                     a robust repository, ensures a secure environment. Our
//                                     platform offers easy integration, efficient and speedy
//                                     performance, and a secure architecture that is not
//                                     resource-intensive. Utilizing NIST-approved algorithms, we
//                                     provide wide utilization and implementation avenues. Our
//                                     implementation covers both client and server sides, ensuring
//                                     secure key exchange and a quantum-secure tunnel. We also offer
//                                     effective message encryption for a smooth chat experience,
//                                     along with PQE implementation for efficient app performance
//                                     and security. With regular upgrades and updates, we address
//                                     variabilities to keep your communication secure and
//                                     efficient."
//                                 </p>
//                                 <span
//                                     className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                                 <span
//                                     className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                             </div>

//                         </div>
//                     </div>

//                     <div className="flex flex-col md:flex-row shadow-lg md:shadow-xl bg-[#212534] mt-10
//           group relative inline-flex items-center px-5 py-2.5  shadow-lg outline-none  text-white font-medium transition-all duration-200 ease-out hover:text-red-700 hover:bg-transparent hover:shadow-none active:top-0.5 focus:outline-none  flex-col md:flex-row  md:shadow-xl mt-10 md:mt-16  bg-[#212534] rounded-lg" data-aos="zoom-in-right">
//                         <span
//                             className="absolute h-0 w-0.5 right-0 top-0  bg-red-700 transition-all duration-500 ease-out group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <span
//                             className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0.5 h-0 group-hover:h-full"
//                             aria-hidden="true"
//                         />
//                         <div className="text-3xl not-italic font-bold leading-9 md:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left  font-heebo mt-5 text-white">
//                             <h2 className="mt-6 mb-2 text-red-500">
//                                 Solution 4: Secure 5G communication{" "}
//                             </h2>
//                             <div className="flex items-start mb-4">

//                                 <p className="text-xl not-italic font-normal leading-relaxed text-white ">
//                                     The research, development, and delivery of a fully working
//                                     end-to-end post quantum encrypted secure chips for digital
//                                     security applications (integrated security platforms for RoT,
//                                     microcontrollers, NFCs, secure smart cards, IoT, Blockchain
//                                     and AI). Once embedded with the private key, these secure
//                                     elements cannot be hacked or tampered with, guaranteeing that
//                                     these private keys cannot be read or copied. A layer of post
//                                     quantum encryption and quantum tunneling guarantees the data
//                                     being sent between two such elements. These secure elements
//                                     guarantee the authentication of the components (eg servers,
//                                     mobile phones, IoT platforms, etc). The military applications
//                                     are many where secure authentication between 2 systems is
//                                     required. This could be between command-center and any mobile
//                                     units (e.g tanks, infantry, aircraft, drones etc). This could
//                                     also be for secure communication between hand-held devices and
//                                     servers.
//                                 </p>
//                                 <span
//                                     className="absolute left-0 bottom-0 bg-red-700  transition-all duration-500 ease-out w-0 h-0.5 group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                                 <span
//                                     className="absolute w-0 h-0.5 right-0 top-0 bg-red-700 transition-all duration-500 ease-out group-hover:w-full"
//                                     aria-hidden="true"
//                                 />
//                             </div>

//                         </div>
//                         <div className="md:max-w-lg md:w-1/4 w-full mb-10 md:mb-0 md:ml-20 px-3 py-10">
//                             <img
//                                 className="object-cover object-center w-full h-full"
//                                 alt="hero"
//                                 src={Revolution}
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </section>

//         </div>
//     );
// }

import React from "react";

const PQCSolution = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 lg:pl-16 md:pl-8  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#4b4b4b]">
              Post Quantum
              <br /> Cryptography (PQC)
            </h1>
            <h1 className="sm:text-xl text-xl font-normal title-font mb-4 text-gray-900">
              Democratizing Data Protection With Post Quantum Encryption <br />{" "}
              Technologies
            </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-4">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center bg-gray-200">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Post Quantum Cryptography (PQC)
            </h1>
            <p className="mb-8 leading-relaxed">
              Quartz- SQ is an Instant messaging service platform that promises
              End to End Post Quantum Encryption on your smartphones Quartz
              offers a comprehensive solution to address all your communication
              requirements. Our platform ensures communication integrity and
              cohesion, with controls tailored to your functional structure. We
              prioritize operational confidentiality and security, utilizing
              encryption and in-premises data security measures. Administrative
              control over all communication, coupled with monitoring, auditing,
              and a robust repository, ensures a secure environment. Our
              platform offers easy integration, efficient and speedy
              performance, and a secure architecture that is not
              resource-intensive. Utilizing NIST-approved algorithms, we provide
              wide utilization and implementation avenues. Our implementation
              covers both client and server sides, ensuring secure key exchange
              and a quantum-secure tunnel. We also offer effective message
              encryption for a smooth chat experience, along with PQE
              implementation for efficient app performance and security. With
              regular upgrades and updates, we address variabilities to keep
              your communication secure and efficient."
            </p>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="bg-gray-200 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-4 "></div>
      </section>

      {/* Section 4 */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-4 ">
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center bg-gray-200">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-4">
              Data centre Security
            </h1>
            <p className="mb-8 leading-relaxed mt-5">
              A fully integrated Post Quantum encrypted data at rest within the
              data center. Additionally, critical data when transported over the
              air to any device will be post-quantum encrypted and available for
              reading only to authorized personnel on pre-authorized devices.
              This must be done with the latest NIST approved Quantum Algorithms
              (with a plugin on server side and on client applications) and with
              low Latency. The entire system functions irrespective of the
              algorithms used. It has been designed as a plug-and-play whereby
              any post-quantum encryption can be plugged into the system.
              Post Quantum through its R&D lab is continuously improving the
              efficiencies of the algorithm used. As and when we identify a more
              suitable post-quantum encryption algorithm, we will immediately
              upgrade the system and provide all updates & training within 7
              days
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                ></label>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex lg:flex-row md:flex-col"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-4">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center bg-gray-200">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-6">
              Secure VPN & Web Browser
            </h1>
            <p className="mb-8 leading-relaxed">
              Quartz offers a comprehensive solution to address all your
              communication requirements. Our platform ensures communication
              integrity and cohesion, with controls tailored to your functional
              structure. We prioritize operational confidentiality and security,
              utilizing encryption and in-premises data security measures.
              Administrative control over all communication, coupled with
              monitoring, auditing, and a robust repository, ensures a secure
              environment. Our platform offers easy integration, efficient and
              speedy performance, and a secure architecture that is not
              resource-intensive. Utilizing NIST-approved algorithms, we provide
              wide utilization and implementation avenues. Our implementation
              covers both client and server sides, ensuring secure key exchange
              and a quantum-secure tunnel. We also offer effective message
              encryption for a smooth chat experience, along with PQE
              implementation for efficient app performance and security. With
              regular upgrades and updates, we address variabilities to keep
              your communication secure and efficient."
            </p>
          </div>
        </div>
      </section>
      {/* Section 6 */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-4 ">
          <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center bg-gray-200">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-3">
              Secure 5G communication
            </h1>
            <p className="mb-8 leading-relaxed">
              The research, development, and delivery of a fully working
              end-to-end post quantum encrypted secure chips for digital
              security applications (integrated security platforms for RoT,
              microcontrollers, NFCs, secure smart cards, IoT, Blockchain and
              AI). Once embedded with the private key, these secure elements
              cannot be hacked or tampered with, guaranteeing that these private
              keys cannot be read or copied. A layer of post quantum encryption
              and quantum tunneling guarantees the data being sent between two
              such elements. These secure elements guarantee the authentication
              of the components (eg servers, mobile phones, IoT platforms, etc).
              The military applications are many where secure authentication
              between 2 systems is required. This could be between
              command-center and any mobile units (e.g tanks, infantry,
              aircraft, drones etc). This could also be for secure communication
              between hand-held devices and servers.
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                ></label>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex lg:flex-row md:flex-col"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PQCSolution;
