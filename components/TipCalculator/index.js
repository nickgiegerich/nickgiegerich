import Image from "next/image";
import { useEffect, useState } from "react";

const logo = "/tipCalculator/logo.svg";
const moneySvg = "/tipCalculator/icon-dollar.svg";
const personSvg = "/tipCalculator/icon-person.svg";

const tipChoices = [
  {
    tipLabel: "5",
    value: 0.05,
  },
  {
    tipLabel: "10",
    value: 0.1,
  },
  {
    tipLabel: "15",
    value: 0.15,
  },
  {
    tipLabel: "25",
    value: 0.25,
  },
  {
    tipLabel: "50",
    value: 0.5,
  },
];

export const TipCalculator = () => {
  const [activeTip, setActiveTip] = useState({ idx: null, tipPercent: null });
  const [numPeople, setNumPeople] = useState(0);
  const [bill, setBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [customTip, setCustomTip] = useState(null);

  useEffect(() => {
    console.log(activeTip);
    console.log(bill);
  }, [activeTip]);

  useEffect(() => {
    if (numPeople != 0) {
      var tip = bill * activeTip.tipPercent;
      var total = Number(bill) + Number(tip);
      tip = (tip / numPeople).toFixed(2);
      total = (total / numPeople).toFixed(2);
      setTipAmount(tip);
      setTotal(total);
      //   setCustomTip("");
    } else if (numPeople == 0) {
      setTipAmount(0);
      setTotal(0);
    }
  }, [activeTip, bill, numPeople]);

  useEffect(() => {}, [numPeople]);

  //   useEffect(() => {
  //     if (customTip != "") {
  //       var cost = getTipCalculation(bill, customTip / 100, numPeople);
  //       setTipAmount(cost[0]);
  //       setTotal(cost[1]);
  //     }
  //   }, [customTip]);

  const getTipCalculation = (amount, tip, people) => {
    var tipToLeave = amount * tip;
    var totalCost = Number(amount) + Number(tipToLeave);

    tipToLeave = (tipToLeave / people).toFixed(2);
    totalCost = (totalCost / people).toFixed(2);

    return [tipToLeave, totalCost];
  };

  const handleTipClick = (idx, tipPercent) => {
    setActiveTip({
      idx: idx,
      tipPercent: tipPercent,
    });
    setCustomTip("");
  };

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handleCustomTipChange = (e) => {
    setActiveTip({ idx: null, tipPercent: e.target.value / 100 });
    setCustomTip(e.target.value);
  };

  const handleResetClick = () => {
    setBill("");
    setNumPeople(0.0);
    setCustomTip("")
  };

  return (
    <div className="bg-lightGrayishCyan w-screen h-screen font-CalcFont">
      <div className="flex flex-col h-screen justify-center">
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-1 pb-20">
            <Image src={logo} height="50px" width="75px" layout="intrinsic" />
          </div>
        </div>
        <div className="grid grid-cols-1 mx-auto max-w-screen-md">
          <div className="grid md:grid-cols-2 bg-white p-5 rounded-2xl shadow-lg">
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
                    value={bill}
                    onChange={handleBillChange}
                  />
                </div>
              </div>
              <div className="pt-3 text-darkGrayishCyan">Select Tip %</div>
              <div className="grid grid-cols-3 gap-4">
                {tipChoices.map((percents, idx) => (
                  <button
                    key={`Button-${idx}`}
                    className={`text-white py-2 px-4 rounded-md ${
                      idx === activeTip.idx
                        ? "bg-strongCyan"
                        : "bg-veryDarkCyan"
                    }`}
                    onClick={() => handleTipClick(idx, percents.value)}
                  >
                    {percents.tipLabel}%
                  </button>
                ))}

                <input
                  className="rounded-md bg-lightGrayCyan focus:outline-none focus:ring-2 focus:ring-strongCyan text-right"
                  placeholder="Custom"
                  type="number"
                  min="0"
                  value={customTip}
                  onChange={handleCustomTipChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-8">
                <div className="text-darkGrayishCyan">Number of People</div>
                {numPeople == 0 && (
                  <div className="text-error text-right">Can't be zero</div>
                )}
                <div className="relative flex w-full flex-wrap items-stretch mb-3 col-span-2">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center bg-transparent rounded text-base items-center justify-center  pl-3 pt-1">
                    <Image src={personSvg} height={15} width={10} />
                  </span>
                  <input
                    className={`pt-2 rounded-md bg-lightGrayCyan  text-right text-veryDarkCyan w-full ${
                      numPeople == 0
                        ? "outline-none ring-2 ring-error border-transparent"
                        : "focus:outline-none focus:ring-2 focus:ring-strongCyan focus:border-transparent"
                    }`}
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
            <div className="bg-veryDarkCyan rounded-xl md:ml-10">
              <div className="grid grid-cols-2 p-7">
                <div className="text-lightGrayCyan text-lg pb-10">
                  Tip Amount <br />{" "}
                  <span className="text-darkGrayishCyan text-sm">/ person</span>
                </div>
                <div className="text-strongCyan text-4xl">
                  ${tipAmount === 0 ? "0.00" : tipAmount}
                </div>
                <div className="text-lightGrayCyan text-lg">
                  Total <br />{" "}
                  <span className="text-darkGrayishCyan text-sm">/ person</span>
                </div>
                <div className="text-strongCyan text-4xl font-light">
                  ${total === 0 ? "0.00" : total}
                </div>
              </div>
              <div className="grid grid-cols-1 pt-6 w-full">
                <button
                  className="text-veryDarkCyan bg-strongCyan py-2 px-4 mb-5 rounded-md mx-12 font-bold"
                  onClick={handleResetClick}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
