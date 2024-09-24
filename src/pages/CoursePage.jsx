// import React from "react";

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
      curriculumLink: "/path/to/web-dev-curriculum.pdf", // Update this with the actual link to your PDF
    },
    {
      name: "Data Structures & Algorithms (DSA)",
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
  ];

  return (
    <div className="container mx-auto p-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <ul className="list-disc list-inside mb-4">
            {course.keyPoints.map((point, idx) => (
              <li key={idx} className="text-gray-600">
                {point}
              </li>
            ))}
          </ul>
          <a
            href={course.curriculumLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              See Curriculum
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CourseInfo;
