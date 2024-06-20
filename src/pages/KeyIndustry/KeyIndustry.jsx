import React from "react";

const KeyIndustry = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="flex justify-center sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
            Supporting key industries
          </h1>
          <div className=" flex justify-center grid-flow-row mb-12">
            <p className="text-base text-[#454545]  font-medium title-font  bg-white mb-4  ">
              Post-Quantum has been preparing for this day since the company was
              founded in 2009. Our Quantum Safe Platform protects organisations
              from Harvest Now, Decrypt Later attacks today. With products for
              Identity, Virtual Private Networks and Messaging, companies can
              secure their entire digital footprint.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-80 md:h-60 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Banking & Financial Services
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Banks, trading technology, asset managers and the
                    crypto-currency industry.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-black font-bold inline-flex items-center md:mb-2 lg:mb-0">
                      READ MORE
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-80 md:h-60 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Defence & National Security
                  </h1>
                  <p className="leading-relaxed mb-3">
                    National and transnational security and defence
                    organisations protecting democratic nation states.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-black font-bold inline-flex items-center md:mb-2 lg:mb-0">
                      READ MORE
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-80 md:h-60 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Critical National Infrastructure
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Electricity grids, telecoms operators, healthcare providers
                    and transport systems
                  </p>
                  <div class="flex items-center flex-wrap">
                    <a class="text-black font-bold inline-flex items-center md:mb-2 lg:mb-0">
                      READ MORE
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="leading-relaxed mb-3">
              Interoperable: so you can establish secure communications with
              partners irrespective of the encryption algorithms they use.
            </p>
            <p className="leading-relaxed mb-3">
              Backward compatible: so quantum-safe encryption can be introduced
              seamlessly across your existing IT systems.
            </p>
            <p className="leading-relaxed mb-3">
              Crypto-agile: so you can use any combination of NIST’s
              post-quantum algorithms or traditional encryption.
            </p>
            <p className="leading-relaxed mb-3">
              Uniquely, our multi-factor biometric service ‘Nomidio’ ensures
              adversaries cannot side-step your encryption by compromising
              employee log-in credentials.
            </p>
            <p className="leading-relaxed mb-3">
              Our products are already helping organisations in defence,
              critical national infrastructure and financial services make the
              transition to post-quantum encryption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyIndustry;
