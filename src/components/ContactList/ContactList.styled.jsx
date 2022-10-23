import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontsSizes.xl}px;

  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const ContactsList = styled.ul`
  padding-left: ${p => p.theme.space[6]}px;
`;

export const ContactItem = styled.li`
  font-size: ${p => p.theme.fontsSizes.l}px;

  padding-bottom: ${p => p.theme.space[4]}px;

  ::before {
    content: '🔥';
    padding-right: ${p => p.theme.space[5]}px;
  }
`;
