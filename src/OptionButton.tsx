import React from "react";

interface Props {
  name: string;
  value: string | number;
}

const OptionButton: React.FC<Props> = ({ name, value }) => {
  return (
    <div className="row bg-secondary text-white text-left">
      <button type="button" className="col-3 btn btn-danger">
        <i className="icon-chevron-sign-left"></i>
      </button>
      <h5 className="col-6 pt-2">
        {name}: {value || "Any"}
      </h5>
      <button type="button" className="col-3 btn btn-primary">
        <i className="icon-chevron-sign-right"></i>
      </button>
    </div>
  );
};

export default OptionButton;
