import { useEffect, useState } from "react";

const hills = "/timer/pattern-hills.svg";
const facebook = "/timer/icon-facebook.svg";
const insta = "/timer/icon-instagram.svg";
const pinterest = "/timer/icon-pinterest.svg";

export const CountDownTimer = () => {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(55);
  const [seconds, setSeconds] = useState(43);
  const [secondsChanged, setSecondsChanged] = useState(false);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0 && hours === 0 && days === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);
        }
        if (hours === 0) {
          setDays(days - 1);
          setHours(23);
        }
      }
    }, 1000);
    return () => {
      {
        clearInterval(myInterval);
      }
    };
  });

  useEffect(() => {
    console.log("seconds changed");
    setSecondsChanged(!secondsChanged);
  }, [seconds]);

  useEffect(() => {
    console.log("minutes changed");
  }, [minutes]);
  return (
    <div className="flex flex-col justify-center items-center bg-star-pattern bg-veryDarkBlue h-screen w-screen">
      <div className="text-white uppercase text-2xl mb-10 font-bold text tracking-widest">
        we're launcing soon
      </div>
      <div className="grid grid-cols-4 gap-7 rounded mt-10">
        <div className="relative p-8 rounded-2xl">
          <div className="absolute inset-0 h-full w-full grid grid-rows-2">
            <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl h-full w-full"></div>
            <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl h-full w-full"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed text-8xl font-bold z-20">
            {days === 0 ? "00" : days < 10 ? `0${days}` : days}
          </span>
          <div className="absolute inset-0 flex items-center">
            <div className=" h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl">
          <div className="absolute  inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl"></div>
            <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed  text-8xl font-bold">
            {days === 0 && hours === 0
              ? "00"
              : hours < 10
              ? `0${hours}`
              : hours}
          </span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl">
          <div className="absolute  inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl"></div>
            <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed  text-8xl font-bold">
            {minutes === 0 && seconds === 0
              ? "00"
              : minutes < 10
              ? `0${minutes}`
              : minutes}
          </span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl">
          <div className="absolute  inset-0 grid grid-rows-2">
            <div
              className={`transform origin-bottom shadow-2xl transition duration-500 z-20`}
            >
              <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl h-full w-full"></div>
            </div>
            <div
              className={`transform skew origin-top  transition duration-500 z-20`}
            >
              <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl h-full w-full"></div>
            </div>
          </div>
          <div
            className={`relative transition transform origin-top duration-1000 z-20`}
          >
            <span
              className={`absolute text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed text-8xl font-bold `}
            >
              {minutes === 0 && seconds === 0
                ? "00"
                : seconds < 10
                ? `0${seconds}`
                : seconds}
            </span>
          </div>
          <div
            className={`relative transition transform origin-bottom duration-500 z-20 ${
              secondsChanged ? "scale-y-1" : "hidden"
            } `}
          >
            <span
              className={`absolute text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed text-8xl font-bold `}
            >
              {minutes === 0 && seconds === 0
                ? "00"
                : seconds < 10
                ? `0${seconds}`
                : seconds}
            </span>
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
      </div>

      {/* HILLS AT BOTTOM */}
      <div className="absolute bottom-0 w-screen">
        <img width="100%" src={hills} />
        <div className="relative">
          <div className=" absolute bottom-10 grid grid-cols-3 text-center w-screen">
            <div className=" flex justify-end">
              <img src={facebook} />
            </div>
            <div className=" flex justify-center">
              <img src={insta} />
            </div>
            <div className=" flex justify-start">
              <img
                className="transform transition duration-500 fill-red hover:text-softRed"
                src={pinterest}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
