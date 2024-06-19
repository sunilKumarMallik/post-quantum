/* eslint-disable react/no-unknown-property */
import bgred from "../../assets/images/bgred.jpg";
import { BlogCard } from "../../component/common/card/blogcard";
import { BlogList } from "./bloglist";
export default function Blogging() {
  return (
    <div className="bg-black">
      <section
        className=" bg-no-repeat bg-center "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${bgred})`,
          backgroundsize: "cover",
          height: "400px",
        }}
      >
        <nav
          x-data="{ isOpen: false }"
          className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center"
        >
          <div className="flex items-center justify-between">
            <div className="flex lg:hidden"></div>
          </div>
        </nav>

        <div className="container py-11  mx-auto text-start">
          <div className=" mx-auto">
            <h1 className="text-4xl lg:text-6xl not-italic font-medium font-heebo  text-white mt-8 dark:text-white ">
              Blogging
            </h1>
            <p className=" text-xl md:text-xl lg:text-3xl leading-7 lg:leading-9 mt-4 lg:mt-6 text-white not-italic font-medium tracking-wide font-heebo w-full text-start ">
              Democratizing Data Protection With Post Quantum Encryption
              Technologies
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container py-14  mx-auto">
          <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {BlogList.map((blog) => {
              return (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  image={blog.image}
                ></BlogCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
