import styled from '@emotion/styled';
import { isMatchNumber } from '@/utils';

interface SpaceProps {
  width?: number;
  gap?: number;
}

const Space = styled.div<SpaceProps>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: ${(props) =>
    isMatchNumber(props.width) ? `${props.width}px` : 'auto'};
  gap: ${(props) => (isMatchNumber(props.gap) ? `${props.gap}px` : '10px')};
`;

export default Space;
