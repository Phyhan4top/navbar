import React from 'react'
import {
  Button,
} from "@material-tailwind/react";
const CButton = ({ variant, size, style, children, fullWidth}) => {
  return (
    <Button
      fullWidth={fullWidth?fullWidth:null}
      variant={variant}
      size={size}
      className={style}
    >
      {children}
    </Button>
  );
};

export default CButton
