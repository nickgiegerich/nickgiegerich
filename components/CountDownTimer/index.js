export const CountDownTimer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-star-pattern bg-veryDarkBlue h-screen w-screen">
      <div className="text-white uppercase text-4xl">we're launcing soon</div>
      <div className="grid grid-cols-4 gap-7 rounded">
        <div className="relative p-8 rounded-2xl">
          <div className="absolute inset-0 h-full w-full grid grid-rows-2">
     
            <div className="transform rotate-180 transition duration-300 h-full w-full ">
              <div className="bg-desatBlue h-full w-full rounded-xl"></div>
            </div>
        
            <div className="bg-grayishBlue rounded-xl"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed text-8xl font-bold">08</span>
          <div className="absolute inset-0 flex items-center">
            <div className=" h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl">
          <div className="absolute  inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl"></div>
            <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed  text-8xl font-bold">23</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl">
          <div className="absolute  inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl"></div>
            <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed  text-8xl font-bold">55</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
        <div className="relative p-8 rounded-2xl">
          <div className="absolute  inset-0 grid grid-rows-2">
            <div className="bg-gradient-to-br from-desatBlue to-veryDarkBlue rounded-xl"></div>
            <div className="bg-gradient-to-br from-grayishBlue to-veryDarkBlue rounded-xl"></div>
          </div>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-darkerSoftRed to-softRed  text-8xl font-bold">41</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-veryDarkBlue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
