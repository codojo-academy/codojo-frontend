import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import selectCourse from "../images/choosecourse.png";
import bookTrial from "../images/booktrial.png";
import enroll from "../images/enroll.png";

const GettingStarted = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-100 lg:py-20">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-[#673AB7]">
        Getting started is super easy
      </h1>
      <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-10 font-medium">
        Take a demo session for FREE and decide for yourself,
        <br className="hidden sm:block" />a functional PC & stable internet is
        all you need!
      </p>
      {/* Flexbox layout updated for responsiveness */}
      <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
        <Card className="py-4 shadow-lg flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-t-xl"
            src={selectCourse}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-gray-500 text-3xl sm:text-6xl">1</span>
              <div className="">
                <h4 className="font-bold text-base sm:text-lg text-gray-700">
                  Select course
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Choose a course based on <br /> your kid’s age/grade
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>

        <Card className="py-4 shadow-lg flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-t-xl"
            src={bookTrial}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-gray-500 text-3xl sm:text-6xl">2</span>
              <div className="">
                <h4 className="font-bold text-base sm:text-lg text-gray-700">
                  Book the FREE trial class
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Choose a mentor of choice & <br /> your preferred time slot
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>

        <Card className="py-4 shadow-lg flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-t-xl"
            src={enroll}
            width={270}
          />
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-gray-500 text-3xl sm:text-6xl">3</span>
              <div className="">
                <h4 className="font-bold text-base sm:text-lg text-gray-700">
                  Enroll for the course
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  If you like the demo class, <br /> begin your kid’s journey!
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2"></CardBody>
        </Card>
      </div>
    </div>
  );
};

export default GettingStarted;
