const ResumeSection = ({ title, items }) => {
  return (
    <>
      <div className="text-xl sm:text-2xl lg:text-3xl font-thin font-CalcFont">
        {title}
      </div>
      {items.map((item, idx) => (
        <div
          key={`item-${idx}`}
          className="text-lightGrayCyan pt-6 text-xl sm:text-2xl lg:text-3xl font-thin"
        >
          {" "}
          - {item}
        </div>
      ))}
    </>
  );
};

export default ResumeSection;
