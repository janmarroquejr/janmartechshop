import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children, dismissible = true }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant={variant}
        onClose={() => setShow(false)}
        dismissible={dismissible}
      >
        {children}
      </Alert>
    );
  }

  return <></>;
};

Message.defaultProps = {
  variant: "dark",
};

export default Message;
