import styled from '@emotion/styled';
import { ContentControl, Space } from '@/components/common';

const SectionControl = styled(ContentControl)`
  padding: 16px;
`;

const EmptyControl = styled(Space)`
  justify-content: center;
  padding: 64px 0 0;
`;

const TableControl = styled.div`
  width: 100%;
  display: table;
  border-collapse: collapse;
`;

export { SectionControl, EmptyControl, TableControl };
