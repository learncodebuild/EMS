import React, { useState } from "react";

const Upload = () => {
  const [fileUpload, setFileUpload] = useState();
  const handleFile = () => {
    setFileUpload(e.target.files[0]);
  };
  return (
    <>
      <div className=" bg-fuchsia-300">Upload</div>
      <form>
        <input type="file" name="file" onChange={{ handleFile }} />
        <button>upload</button>
      </form>
    </>
  );
};

export default Upload;
