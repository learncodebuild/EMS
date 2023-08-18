import React from "react";

const Edit = ({ setIsEdit }) => {
  return (
    <button
      className="edit mb-4 text-red-500 text-bold text-2xl"
      onClick={() => {
        setIsEdit((p) => (p = !p));
      }}
    >
      Edit
    </button>
  );
};

export default Edit;
