import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { isMatchNumber } from '@/utils';

interface CustomInputProps {
  width?: number;
}

const CustomInput = styled(TextField)<CustomInputProps>`
  :hover {
    input:not(:placeholder-shown) + .clear-button {
      display: flex;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  width: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : 'auto'};
`;

const ClearButton = styled.div`
  display: none;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export { CustomInput, ClearButton };
