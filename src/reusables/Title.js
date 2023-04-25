const Title = (props) => {
  return (
    <div
      className={`pb-20 uppercase font-semibold text-4xl text-center ${
        props.color ? "text-white" : "text-zinc-700"
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
