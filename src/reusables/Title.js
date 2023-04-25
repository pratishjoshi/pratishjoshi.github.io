const Title = (props) => {
  return (
    <div
      className={`uppercase font-semibold text-4xl text-center ${
        props.color ? "text-white pb-12" : "text-zinc-700 pb-20"
      }`}
    >
      {props.header_title}
      <div className="mt-4 w-100 flex justify-center">
        <div
          className={`w-20 h-1 ${props.color ? "text-white" : "bg-zinc-700 "}`}
        >
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Title;
