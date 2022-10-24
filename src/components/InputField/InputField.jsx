import React from 'react';

import { Label, Input, NameLabel } from './InputField.styled';

export default function InputField({ nameLabel, ...otherProps }) {
  return (
    <Label>
      <NameLabel>Name</NameLabel>
      <Input {...otherProps} />
    </Label>
  );
}
