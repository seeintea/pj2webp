import styled from '@emotion/styled';
import ContentControl from '@/components/ContentControl';

const NavControl = styled.nav`
  padding: 8px 16px 16px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
`;

const NavContentControl = styled(ContentControl)`
  display: flex;
  justify-content: space-between;
`;

const FlexEndControl = styled.div`
  align-self: flex-end;
`;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export { NavControl, NavContentControl, FlexEndControl, VisuallyHiddenInput };
