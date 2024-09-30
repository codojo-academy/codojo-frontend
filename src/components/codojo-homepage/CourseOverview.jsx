const CourseOverview = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Section 1: Program Overview */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-bold mb-4">
          Improve STEM & Cognitive Skills Via Coding!
        </h2>
        <p className="text-lg mb-4">
          Learn Coding In Fun Manner While Building Animations & Games
        </p>
        <ul className="list-disc list-inside">
          <li>Fundamentals of Programming</li>
          <li>Interactive Animation</li>
          <li>Parallelism</li>
          <li>Event-driven Programming</li>
          <li>Loops, Conditional Programming</li>
        </ul>
      </div>

      {/* Section 2: Session Breakdown */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Session Breakdown</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Session 1-8</h3>
            <p>Introduction of Block-based Programming</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Session 9-15</h3>
            <p>Basics of Scratch Jr</p>
          </div>
          {/* Add more sessions here */}
        </div>
      </div>

      {/* Section 3: Scratch Curriculum */}
      <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Scratch Curriculum (For Ages 5 to 10+)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Scratch Jr Star</h3>
            <p>48 Sessions</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Scratch Master</h3>
            <p>96 Sessions</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Scratch Superstar</h3>
            <p>144 Sessions</p>
          </div>
        </div>
      </div>

      {/* Section 4: Skill Development */}
      <div className="bg-purple-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Skill Development</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">STEM Skills</h3>
            <p>
              Improves Visual Processing, Sequential Thinking, Creative
              Thinking, etc.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Cognitive Skills</h3>
            <p>
              Enhances Logical Thinking, Problem Solving, Decision Making, etc.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Games and Projects */}
      <div className="bg-red-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Games & Projects</h2>
        <ul className="list-disc list-inside">
          <li>Flappy Bird</li>
          <li>Pong Game</li>
          <li>Shooter Game</li>
          <li>Arcade Game</li>
          {/* Add more games here */}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
