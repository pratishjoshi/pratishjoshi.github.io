const Title = (props) => {
  return (
    <div className="pb-20 uppercase font-semibold text-4xl text-center text-zinc-700">
      {props.header_title}
      <div className="mt-4 w-100 flex justify-center">
        <div className="w-20 bg-zinc-700 h-1">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Title;
