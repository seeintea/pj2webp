import { isMatchNumber } from '@/utils';
import styled from '@emotion/styled';

const ContentControl = styled.div<{ width?: number }>`
  margin: 0 auto;

  max-width: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : '1280px'};
`;

export default ContentControl;
