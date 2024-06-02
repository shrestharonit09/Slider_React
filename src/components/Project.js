// import React,{useState} from "react";
// import { ProjectData } from "./Projectdata";

// const Project = () => {
//   const [projectdata, setProjectData] = useState(0);
//   const handleClicked=()=>{
//     setProjectData(projectdata+1)
//   }
//  const handleClickes=()=>{
//     setProjectData(projectdata-1)
//  }
//   return (
//     <div>
//       <div class="flex flex-col gap-10 ml-16 mt-16">
//         <div className="flex justify-between w-[90vw]">
//           <div>
//             <h1 className="font-bold text-3xl">Featured Projects</h1>
//           </div>
//           <div>
//             <div className="flex gap-2">
//               <button
//                 className="p-1 border border-gray-500"
//                 onClick={handleClickes}
//               >
//                 <svg
//                   className="w-6 h-6 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 8 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
//                   />
//                 </svg>
//               </button>

//               <button className="p-1 border border-gray-500" onClick={handleClicked}>
//                 <svg
//                   className="w-6 h-6 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 8 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-5">
//           <div>
//             <div>
//               <div className="flex gap-10 w-[100vw] ">
//                 <div className="w-[45vw] h-[45vh]">
//                   <img
//                     className="w-full h-full"
//                     src={ProjectData[projectdata].image1}
//                     alt=""
//                   />

//                   {/* <img
//                     className="w-full h-full"
//                     src="https://procrewschedule.com/wp-content/uploads/2020/07/Civil-Engineers-At-Construction-Site.jpg"
//                     alt=""
//                   />

//                   <img
//                     className="w-full h-full"
//                     src="https://api.gharpedia.com/wp-content/uploads/2018/08/0204050001-01-Role-of-Civil-Engineer-at-Construction-Site.jpg"
//                     alt=""
//                   /> */}
//                 </div>

//                 <div>
//                   <div className="flex flex-col gap-5 w-[45vw]">
//                     <div>
//                       <h1 className="font-bold text-2xl py-9">
//                        {ProjectData[projectdata].title}
//                       </h1>
//                     </div>

//                     <div>
//                       <p>
//                        {ProjectData[projectdata].para1}
//                       </p>
//                     </div>
//                     <div>
//                       <p>
//                     {ProjectData[projectdata].para2}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div className="flex justify-between w-[90vw] border border-blue-800">
//               <div className="flex gap-5 w-[45vw] border border-green-800">
//                 <div className="w-[15vw] h-[20vh] border border-yellow-800 ">
//                   <img
//                     className="h-full w-full"
//                     src={ProjectData[projectdata].image2}
//                     alt=""
//                   />
//                 </div>
//                 {/* <div className="w-[15vw] h-[20vh]">
//                 <img
//                 className="h-full w-full"
//                   src="https://www.shutterstock.com/image-photo/civil-engineer-hispanic-smiling-constuction-600nw-2143737113.jpg"
//                   alt=""
//                 />
//               </div>
//               <div className="w-[15vw] h-[20vh]">
//                 <img
//                 className="h-full w-full"
//                   src="https://www.shutterstock.com/image-photo/civil-engineer-hispanic-smiling-constuction-600nw-2143737113.jpg"
//                   alt=""
//                 />
//               </div> */}
//               </div>
//               <div className="flex gap-4 mt-6 mr-72">
//                 <div>
//                   <button className="p-2 rounded-full hover:bg-yellow-600">
//                     1
//                   </button>
//                 </div>
//                 <div>
//                   <button className="p-2 rounded-full hover:bg-yellow-600">
//                     2
//                   </button>
//                 </div>
//                 <div>
//                   <button className="p-2 rounded-full hover:bg-yellow-600">
//                     3
//                   </button>
//                 </div>
//                 <div>
//                   <h1>...</h1>
//                 </div>
//                 <div>
//                   <button className="p-2 rounded-full hover:bg-yellow-600">
//                     10
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <button className="bg-blue-500 text-white p-3 rounded-lg mt-20">
//                   View All Projects
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
