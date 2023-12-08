const Tooltip = (props: any) => {
  return (
    <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
      <div className="bottom-full right-0 rounded bg-black px-4 py-1 text-xs text-white whitespace-nowrap">
        {props.text}
        <svg
          className="absolute left-0 top-full h-2 w-full text-black"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default Tooltip;
