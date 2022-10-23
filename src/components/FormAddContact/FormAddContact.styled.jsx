import styled from '@emotion/styled';

export const Form = styled.form`
  width: ${p => p.theme.space[8] * 3}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[3]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Input = styled.input`
  width: ${p => p.theme.space[8]}px;

  padding: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;

  &:focus-within {
    border: 1px solid ${p => p.theme.colors.accent};
    filter: drop-shadow(0px 4px 4px ${p => p.theme.colors.accent});
    outline: none;
  }
`;

export const NameLabel = styled.span`
  font-size: ${p => p.theme.fontsSizes.l}px;
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
