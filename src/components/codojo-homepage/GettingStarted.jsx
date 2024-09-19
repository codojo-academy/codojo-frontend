import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import selectCourse from "../images/selectcourse.png";
import bookTrial from "../images/booktrial.png";
import enroll from "../images/enroll.png";

const GettingStarted = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#673AB7]">
        Getting started is super easy
      </h1>
      <p className="text-center text-gray-600 mb-10 font-medium">
        Take a demo session for FREE and decide for yourself,
        <br />a functional PC & stable internet is all you need!
      </p>
      <div className="flex justify-center space-x-6">
        <Card className="py-4 shadow-lg">
          <Image
            alt="Card background"
            className="object-cover rounded-t-xl"
            src={selectCourse}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-6xl">1</span>
              <span className="text-sm text-gray-500">
                <h4 className="font-bold text-base text-gray-700">
                  Select course
                </h4>
                Choose a course based on <br></br> your kid’s age/grade
              </span>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>

        <Card className="py-4 shadow-lg">
          <Image
            alt="Card background"
            className="object-cover rounded-t-xl"
            src={bookTrial}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-6xl">2</span>
              <span className="text-sm text-gray-500">
                <h4 className="font-bold text-base text-gray-700">
                  Book the FREE trial class
                </h4>
                Choose a mentor of choice & <br></br> your preferred time slot
              </span>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>

        <Card className="py-4 shadow-lg">
          <Image
            alt="Card background"
            className="object-cover rounded-t-xl"
            src={enroll}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-6xl">3</span>
              <span className="text-sm text-gray-500">
                <h4 className="font-bold text-base text-gray-700">
                  Enroll for the course
                </h4>
                If you like the demo class,<br></br> begin your kid’s journey!
              </span>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
      </div>
      {/* <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 mt-10">
        Online courses for kids for all age groups!
      </h1>
      <p className="text-center text-gray-600 mb-10 font-medium">
        Well researched and highly effective curriculum
      </p> */}
    </div>
  );
};

export default GettingStarted;
