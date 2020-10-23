import React, { useState } from "react";

const Button = (props) => {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return (
    <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
  );
}

export default Button;