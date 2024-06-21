import React from "react";
// import Revolution from "../../assets/images/Revolution.png";
// import bgred from "../../assets/images/bgred.jpg";
import { Link } from "react-router-dom";
// import IconFC from "../../assets/images/righticon.png";

import { motion } from "framer-motion";
export default function PqcMigration() {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="">
      <section className="body-font mt-12">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center">
          <div className="lg:pr-8 md:pr-8 lg:pl-16 md:pl-8 flex flex-col items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-5xl text-2xl mb-8 font-bold font-dmSans">
              The PQC Migration
            </h1>
            <p className="sm:text-2xl text-2xl mb-8 text-[#686868] font-dmSans">
              We’ve set the standards, now we’re helping the world migrate
            </p>
            <div className="">
              <p className="sm:text-base text-base mb-8 text-[#686868] font-dmSans">
                Action and regulatory changes are being mandated on a national
                and supranational level to counter Harvest Now, Decrypt Later
                attacks.
                <br />
                In the US, the White House announced two directives aimed at
                accelerating the quantum-proofing of IT infrastructure in
                federal agencies. This was closely followed by a commitment
                being made by G7 nations to ensure greater cooperation on the
                deployment of quantum-resistant cryptography.
                <br />
                This follows a watershed decision by the National Institute of
                Standards and Technology (NIST), which made its first
                recommendations on which algorithms will soon protect the
                world's digital economy.
                <br />
                Regulators, governments and standard-setters are beginning to
                take notice.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="text-gray-600 body-font mt-12">
        <div className="container mx-auto flex px-5 py-24  flex-col items-center">
          <div className="lg:pr-8 md:pr-8 lg:pl-16 md:pl-8 flex flex-col items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-3xl text-2xl mb-8 text-[#686868] font-dmSans">
              The Cost of Inaction
            </h1>
            <p className="sm:text-xl text-xl mb-8 text-[#686868] font-dmSans">
              With the needle shifting, can you afford to fall behind?
            </p>
            <p className="sm:text-xl text-xl mb-8 text-[#686868] font-dmSans">
              Even after a classical cyber security breach of limited scale, the
              effects on brand value can be extremely costly.
              <br /> A quantum attack is likely to be far more impactful,
              potentially wiping out entire sectors and economies. The cost of
              inaction - from both a monetary and reputational aspect - is far
              higher when it comes to quantum.
              <br />
              With the cost of inaction so high, and HNDL threats real and
              immediate today, why wait?
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mt-12">
        <div className="container mx-auto flex px-5 py-24 flex-col items-center">
          <div className="lg:pr-8 md:pr-8 lg:pl-16 md:pl-8 flex flex-col items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-3xl text-2xl mb-8 text-[#686868] font-dmSans">
              Supporting you in the migration
            </h1>
            <p className="sm:text-xl text-xl mb-8 text-[#686868] font-dmSans">
              We have a distinguished record in supporting standards
              development:
            </p>
            <p className="sm:text-xl text-xl mb-8 text-[#686868] font-dmSans">
              NIST ‘Classic McEliece’ round four candidate algorithm <br />
              IETF proposal for a hybrid quantum-safe VPN
              <br /> Additional IETF proposals to define other quantum-safe
              communications <br />
              Pioneer in defining
              <br />
              and creating hybridised crypto solutions Quantum-Safe Platform is
              helping critical national infrastructure, defence, and financial
              services organisations as they transition to a quantum-safe
              future.
              <br /> We’ve done the R&D. We’ve built the products you need. And
              we’re ready to support you to become quantum-safe.
              <br /> We’re ready for the migration journey. We are ready for a
              post-quantum world. Are you?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
