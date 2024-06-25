import { Input, Tooltip, TooltipProps, tooltipClasses } from '@mui/material';
import styled from '@emotion/styled';
import { isMatchNumber } from '@/utils';

interface WithWidth {
  width?: number;
}

const TableRow = styled.div`
  display: table-row;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  color: #555555;
`;

const TableCell = styled.div<{ width?: number; color?: string }>`
  display: table-cell;
  padding: 8px;
  vertical-align: middle;
  text-align: center;

  width: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : 'auto'};
  color: ${(props) => (props.color ? props.color : 'inherit')};
`;

const ImagePreview = styled.div<WithWidth>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : '65px'};
  height: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : '65px'};

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 4px;
    cursor: pointer;
  }

  + p {
    flex: 1;
    margin: 0;
    max-width: 200px;
    word-break: break-all;
    text-align: center;
  }
`;

const RenameInput = styled(Input)`
  font-size: 14px;
  color: #555555;
`;

const FileSizeControl = styled.div`
  text-align: center;

  span {
    padding: 0 3px;
  }
`;

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0
  },
}));

const CustomImage = styled.img`
  width: 320px;
  border-radius: 4px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.3);
`;

export {
  TableRow,
  TableCell,
  ImagePreview,
  RenameInput,
  FileSizeControl,
  CustomTooltip,
  CustomImage,
};
