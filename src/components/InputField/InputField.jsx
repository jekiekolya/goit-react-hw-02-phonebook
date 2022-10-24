import React from 'react';
import PropTypes from 'prop-types';

import { Label, Input, NameLabel } from './InputField.styled';

export default function InputField({ nameLabel, ...otherProps }) {
  return (
    <Label>
      <NameLabel>{nameLabel}</NameLabel>
      <Input {...otherProps} />
    </Label>
  );
}

InputField.propTypes = {
  nameLabel: PropTypes.string.isRequired,
};
