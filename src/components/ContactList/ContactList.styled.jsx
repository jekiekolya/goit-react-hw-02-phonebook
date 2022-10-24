import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  padding-left: ${p => p.theme.space[5]}px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;

  padding-bottom: ${p => p.theme.space[3]}px;

  &&::before {
    content: '🔥';
    padding-right: ${p => p.theme.space[1]}px;
  }
`;
