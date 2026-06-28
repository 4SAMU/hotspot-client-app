import { ReactNode } from "react";
import { InputBaseProps } from "@mui/material/InputBase";

import { IconContainer, InputContainer, StyledInput } from "./inputStyles";

interface InputComponentProps extends Omit<InputBaseProps, "startAdornment"> {
  icon: ReactNode;
}

const InputComponent = ({ icon, ...props }: InputComponentProps) => {
  return (
    <InputContainer>
      <IconContainer>{icon}</IconContainer>

      <StyledInput {...props} />
    </InputContainer>
  );
};

export default InputComponent;
