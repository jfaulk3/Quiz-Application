const OptionButton = ({ gameStart }) => {
  return (
    <div className="row bg-secondary text-white text-left">
      <button
        type="button"
        className="col-3 btn"
        onClick={() => {
          changeOption(type, value - 1);
        }}
      >
        <i className="icon-chevron-sign-left"></i>
      </button>
      <h5 className="col-6 pt-2">
        {name}: {value}
      </h5>
      <button
        type="button"
        className="col-3 btn"
        onClick={() => {
          changeOption(type, value + 1);
        }}
      >
        <i className="icon-chevron-sign-right"></i>
      </button>
    </div>
  );
  return null;
};

export default OptionButton;
