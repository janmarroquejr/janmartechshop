import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner
        animation="grow"
        variant="dark"
        style={{
          display: "block",
          width: "100px",
          height: "100px",
          margin: "auto",
        }}
      >
        <span className="sr-only">Please wait...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
