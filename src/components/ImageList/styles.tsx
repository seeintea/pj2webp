import styled from '@emotion/styled';
import { isMatchNumber } from '@/utils';

const SectionControl = styled.section`
  padding: 16px;
`;

const EmptyControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 64px 0 0;
`;

const TableControl = styled.div`
  width: 100%;
  display: table;
  border-collapse: collapse;
`;

const TableRowControl = styled.div`
  display: table-row;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
`;

const TableCellControl = styled.div<{ width?: number }>`
  display: table-cell;
  padding: 8px;
  vertical-align: middle;
  text-align: center;

  width: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : 'auto'};
`;

const PreviewControl = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  + p {
    margin: 0;
    max-width: 180px;
    word-break: break-all;
  }
`;

const ConvertSizeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #959595;
`;

export {
  SectionControl,
  EmptyControl,
  TableControl,
  TableRowControl,
  TableCellControl,
  PreviewControl,
  ConvertSizeControl,
};
