// const CourseInfo = () => {
//   const courses = [
//     {
//       name: "Web Development",
//       description:
//         "Learn to build websites with HTML, CSS, JavaScript, and React.",
//       keyPoints: [
//         "HTML & CSS basics",
//         "JavaScript fundamentals",
//         "React development",
//         "Building full-stack applications",
//       ],
//       curriculumLink: "/path/to/web-dev-curriculum.pdf", // Update this with the actual link to your PDF
//     },
//     {
//       name: "Data Structures & Algorithms (DSA)",
//       description:
//         "Master the essential data structures and algorithms for coding interviews.",
//       keyPoints: [
//         "Arrays & Linked Lists",
//         "Stacks & Queues",
//         "Sorting & Searching algorithms",
//         "Dynamic Programming",
//       ],
//       curriculumLink: "/path/to/dsa-curriculum.pdf",
//     },
//     {
//       name: "Scratch Programming",
//       description:
//         "Introduction to programming using the Scratch platform for kids.",
//       keyPoints: [
//         "Block-based coding",
//         "Creating games and animations",
//         "Logic and problem-solving",
//         "Building interactive projects",
//       ],
//       curriculumLink: "/path/to/scratch-curriculum.pdf",
//     },
//   ];
//
//   return (
//     <div className="container mx-auto p-6">
//       {courses.map((course, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
//         >
//           <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
//           <p className="text-gray-700 mb-4">{course.description}</p>
//           <ul className="list-disc list-inside mb-4">
//             {course.keyPoints.map((point, idx) => (
//               <li key={idx} className="text-gray-600">
//                 {point}
//               </li>
//             ))}
//           </ul>
//           <a
//             href={course.curriculumLink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               See Curriculum
//             </button>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default CourseInfo;

// const CourseInfo = () => {
//   const courses = [
//     {
//       name: "Web Development",
//       description:
//         "Learn to build websites with HTML, CSS, JavaScript, and React.",
//       keyPoints: [
//         "HTML & CSS basics",
//         "JavaScript fundamentals",
//         "React development",
//         "Building full-stack applications",
//       ],
//       curriculumLink: "/path/to/web-dev-curriculum.pdf",
//     },
//     {
//       name: "Data Structures & Algorithms (DSA)",
//       description:
//         "Master the essential data structures and algorithms for coding interviews.",
//       keyPoints: [
//         "Arrays & Linked Lists",
//         "Stacks & Queues",
//         "Sorting & Searching algorithms",
//         "Dynamic Programming",
//       ],
//       curriculumLink: "/path/to/dsa-curriculum.pdf",
//     },
//     {
//       name: "Scratch Programming",
//       description:
//         "Introduction to programming using the Scratch platform for kids.",
//       keyPoints: [
//         "Block-based coding",
//         "Creating games and animations",
//         "Logic and problem-solving",
//         "Building interactive projects",
//       ],
//       curriculumLink: "/path/to/scratch-curriculum.pdf",
//     },
//     {
//       name: "DSA",
//       description:
//         "Introduction to programming using the Scratch platform for kids.",
//       keyPoints: [
//         "Block-based coding",
//         "Creating games and animations",
//         "Logic and problem-solving",
//         "Building interactive projects",
//       ],
//       curriculumLink: "/path/to/scratch-curriculum.pdf",
//     },
//   ];
//
//   return (
//     <div className="container mx-auto p-10 bg-gray-100">
//       <h1 className="text-4xl font-bold text-[#673AB7] text-center mb-20">
//         Our Courses
//       </h1>
//       {courses.map((course, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
//         >
//           <h2 className="text-3xl font-semibold text-[#673AB7] mb-3">
//             {course.name}
//           </h2>
//           <p className="text-gray-700 mb-4">{course.description}</p>
//           <ul className="list-disc list-inside mb-4">
//             {course.keyPoints.map((point, idx) => (
//               <li key={idx} className="text-gray-600">
//                 {point}
//               </li>
//             ))}
//           </ul>
//           <a
//             href={course.curriculumLink}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="bg-yellow-400 text-[#943000] font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300">
//               See Curriculum
//             </button>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };
//
// export default CourseInfo;

const CourseInfo = () => {
  const courses = [
    {
      name: "Web Development",
      description:
        "Learn to build websites with HTML, CSS, JavaScript, and React.",
      keyPoints: [
        "HTML & CSS basics",
        "JavaScript fundamentals",
        "React development",
        "Building full-stack applications",
      ],
      curriculumLink: "/path/to/web-dev-curriculum.pdf",
    },
    {
      name: "DSA",
      description:
        "Master the essential data structures and algorithms for coding interviews.",
      keyPoints: [
        "Arrays & Linked Lists",
        "Stacks & Queues",
        "Sorting & Searching algorithms",
        "Dynamic Programming",
      ],
      curriculumLink: "/path/to/dsa-curriculum.pdf",
    },
    {
      name: "Scratch Programming",
      description:
        "Introduction to programming using the Scratch platform for kids.",
      keyPoints: [
        "Block-based coding",
        "Creating games and animations",
        "Logic and problem-solving",
        "Building interactive projects",
      ],
      curriculumLink: "/path/to/scratch-curriculum.pdf",
    },
    {
      name: "App Development",
      description:
        "Build responsive and interactive industry-grade iOS & Android apps",
      keyPoints: [
        "App layouts & core components",
        "Responsive design",
        "App deployment",
        "Navigation & state management",
        "Network request & data mgmt",
      ],
      curriculumLink: "/path/to/scratch-curriculum.pdf",
    },
    {
      name: "App Development",
      description:
        "Build responsive and interactive industry-grade iOS & Android apps",
      keyPoints: [
        "App layouts & core components",
        "Responsive design",
        "App deployment",
        "Navigation & state management",
        "Network request & data mgmt",
      ],
      curriculumLink: "/path/to/scratch-curriculum.pdf",
    },
  ];

  return (
    <div className="container mx-auto p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-[#673AB7] text-center mb-20">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-semibold text-[#673AB7] mb-3">
              {course.name}
            </h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <ul className=" list-inside mb-4">
              {course.keyPoints.map((point, idx) => (
                <li key={idx} className="text-gray-600">
                  <span className="text-[#673AB7] font-bold mr-2">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={course.curriculumLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-400 text-[#943000] font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300">
                See Curriculum
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
