import styled from '@emotion/styled';

const Navigation = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '12px 16px',
  boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.1)',
})

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

export { Navigation, VisuallyHiddenInput };
