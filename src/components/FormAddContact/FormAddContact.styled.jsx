import styled from '@emotion/styled';

export const Form = styled.form`
  width: ${p => p.theme.space[8] * 3}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[3]}px;
`;

export const ButtonAddContact = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.mainBg};

  font-size: ${p => p.theme.fontsSizes.m}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;

  &&.click {
    background-color: ${p => p.theme.colors.accent};
  }
`;
