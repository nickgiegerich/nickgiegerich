import Image from "next/image";
import { useEffect, useState } from "react";

const logo = "/tipCalculator/logo.svg";
const moneySvg = "/tipCalculator/icon-dollar.svg";
const personSvg = "/tipCalculator/icon-person.svg";

const tipChoices = [
  {
    tipPercent: "5",
  },
  {
    tipPercent: "10",
  },
  {
    tipPercent: "15",
  },
  {
    tipPercent: "25",
  },
  {
    tipPercent: "50",
  },
];

// const TipButton = ({ tipPercent }) => {
//   return (
//     <>
//       <button className="bg-veryDarkCyan text-white py-2 px-4 rounded-md">
//         {tipPercent}%
//       </button>
//     </>
//   );
// };

export const TipCalculator = () => {
  const [activeTip, setActiveTip] = useState(2);
  const [numPeople, setNumPeople] = useState(0);

  useEffect(() => {
    console.log(activeTip);
  }, [activeTip]);

  const handleNumPeopleChange = (e) => {
      setNumPeople(e.target.value);
  }

  return (
    <div className="bg-lightGrayishCyan w-screen h-screen font-CalcFont">
      <div className="flex flex-col h-screen justify-center">
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-1 pb-20">
            <Image src={logo} height="50px" width="75px" layout="intrinsic" />
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto max-w-screen-md">
          <div className="grid grid-cols-2 bg-white p-5 rounded-lg shadow-lg">
            <div>
              <div className="grid grid-cols-1 gap-3">
                <div className="text-darkGrayishCyan">Bill</div>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center bg-transparent rounded text-base items-center justify-center  pl-3 pt-1">
                    <Image src={moneySvg} height={15} width={10} />
                  </span>
                  <input
                    className=" pt-2 rounded-md bg-lightGrayCyan focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent text-right text-veryDarkCyan w-full"
                    placeholder="0"
                    type="number"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>
              <div className="pt-3 text-darkGrayishCyan">Select Tip %</div>
              <div className="grid grid-cols-3 gap-4">
                {tipChoices.map((percents, idx) => (
                  <button
                    key={`Button-${idx}`}
                    className={`text-white py-2 px-4 rounded-md ${
                      idx === activeTip ? "bg-strongCyan" : "bg-veryDarkCyan"
                    }`}
                    onClick={() => setActiveTip(idx)}
                  >
                    {percents.tipPercent}%
                  </button>
                ))}

                <input
                  className="rounded-md bg-lightGrayCyan focus:outline-none focus:ring-2 focus:ring-strongCyan text-right"
                  placeholder="Custom"
                  type="number"
                  min="0"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 pt-8">
                <div className="text-darkGrayishCyan">Number of People</div>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center bg-transparent rounded text-base items-center justify-center  pl-3 pt-1">
                    <Image src={personSvg} height={15} width={10} />
                  </span>
                  <input
                    className={`pt-2 rounded-md bg-lightGrayCyan  text-right text-veryDarkCyan w-full ${numPeople === 0 ? "outline-none ring-2 ring-error border-transparent" : "focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent"}`}
                    placeholder="0"
                    type="number"
                    step="1"
                    min="0"
                    value={numPeople}
                    onChange={handleNumPeopleChange}
                  />
                </div>
              </div>
            </div>
            <div className="bg-veryDarkCyan rounded-xl ml-10">
                <div className="grid grid-cols-2 p-10">
                    <div className="text-lightGrayCyan text-lg pb-10">Tip Amount <br/> <span className="text-darkGrayishCyan text-sm">/ person</span></div>
                    <div className="text-strongCyan text-4xl">$0.00</div>
                    <div className="text-lightGrayCyan text-lg">Total <br/> <span className="text-darkGrayishCyan text-sm">/ person</span></div>
                    <div className="text-strongCyan text-4xl font-light">$0.00</div>
                </div>
                <div className="grid grid-cols-1 pt-6 w-full">
                    <button className="text-veryDarkCyan bg-lightGrayishCyan py-2 px-4 rounded-md mx-12 font-bold">RESET</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
