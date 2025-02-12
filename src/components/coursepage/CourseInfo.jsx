import { MdArrowOutward } from "react-icons/md";

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
        "Introduction to web dev for beginners",
      ],
      curriculumLink: "/pdfs/web_development_course.pdf",
    },
    {
      name: "DSA",
      description:
        "Master the essential data structures and algorithms for coding.",
      keyPoints: [
        "Understanding basic data structures",
        "Introduction to Arrays",
        "Simple Sorting  algorithms",
        "Learning recursion basics",
        "Problem-solving with fun examples",
      ],
      curriculumLink: "/pdfs/dsa_course.pdf",
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
        "Introduction to programming concepts",
      ],
      curriculumLink: "/pdfs/scratch_programming_course.pdf",
    },
    {
      name: "Java & Android App Development",
      description:
        "Build responsive and interactive industry-grade Android apps",
      keyPoints: [
        "Introduction to Java",
        "Object oriented programming (OOPS)",
        "Algorithmic thinking and control flow",
        "Data structures and algorithms",
        "Data mgmt & GUI programming",
      ],
      curriculumLink: "/pdfs/java_course.pdf",
    },
    // {
    //   name: "Graphic Design",
    //   description:
    //     "Explore creative tools and techniques to design visually appealing projects.",
    //   keyPoints: [
    //     "Basic design principles",
    //     "Understanding colors and typography",
    //     "Working with design software",
    //     "Creating posters and presentations",
    //     "Visual storytelling",
    //   ],
    //   curriculumLink: "/pdfs/graphic_design_course.pdf",
    // },
  ];

  return (
    <div className="container mx-auto p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-[#673AB7] text-center mb-20">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
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
              {/* <button className="bg-yellow-400 text-[#943000] font-bold py-2 px-6 rounded hover:bg-yellow-500 transition-colors duration-300 flex items-center gap-2"> */}
              <button className="bg-[#673AB7] hover:bg-[#E91E63] text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2">
                See Curriculum
                <MdArrowOutward />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
// flex items-center gap-2
export default CourseInfo;
