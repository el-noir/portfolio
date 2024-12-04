// "use client";

// import { FaLocationArrow } from "react-icons/fa6";

// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";

// const RecentProjects = () => {
//   return (
//     <div id="projects" className="py-20">
//       <h1 className="heading">
//         Here are our <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
//         {projects.map((item) => (
//           <div
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//             key={item.id}
//           >
//             <PinContainer
//               title="Availabe on GITHUB"
//               href="https://github.com/president-xd/"
//             >
//               <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162D" }}
//                 >
//                   <img src="/bg.png" alt="bgimg" />
//                 </div>
//                 <img
//                   src={item.img}
//                   alt="cover"
//                   className="z-10 absolute bottom-0"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                 {item.title}
//               </h1>

//               <p
//                 className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon5" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <a
//                     href="https://github.com/president-xd/spamy.git"
//                     className="flex lg:text-xl md:text-xs text-sm text-purple"
//                   >
//                     Click here
//                   </a>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";
// import MagicButton from "./MagicButton"; // Import the MagicButton

// const RecentProjects = () => {
//   const handleSeeMoreClick = () => {
//     window.location.href = "/all-projects"; // Route matches the folder in `app/`
//   };

//   return (
//     <div id="projects" className="py-20">
//       <h1 className="heading">
//         Here are our <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
//         {projects.map((item) => (
//           <a
//             href={item.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             key={item.id}
//             className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
//             style={{ textDecoration: "none" }}
//           >
//             <PinContainer title="Available on GITHUB" href={item.link}>
//               <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162D" }}
//                 >
//                   <img src="/bg.png" alt="bgimg" />
//                 </div>
//                 <img
//                   src={item.img}
//                   alt="cover"
//                   className="z-10 absolute bottom-0"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                 {item.title}
//               </h1>

//               <p
//                 className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <span className="flex lg:text-xl md:text-xs text-sm text-purple">
//                     Learn More
//                   </span>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </a>
//         ))}
//       </div>

//       {/* Add the MagicButton here */}
//       <div className="flex justify-center mt-10">
//         <MagicButton
//           title="See More Projects"
//           icon={<FaLocationArrow />}
//           position="right"
//           handleClick={handleSeeMoreClick}
//         />
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import MagicButton from "./MagicButton";
import { useRouter } from "next/navigation";

const RecentProjects = () => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/projects/${id}`); // Navigate to the project detail page dynamically
  };

  const handleSeeMoreClick = () => {
    router.push("/all-projects"); // Navigate to the "All Projects" page
  };

  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        Here are our <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="cursor-pointer lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            role="button"
            aria-label={`View details for ${item.title}`}
          >
            <PinContainer title="Click To View" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center -ml-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    >
                      <img src={icon} alt="Tech Icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <span className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Learn More
                  </span>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <MagicButton
          title="See More Projects"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleSeeMoreClick}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
