import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Button extends Component {
  // handleClickAddContact = e => {
  //   e.target.classList.add('click');
  //   setTimeout(() => {
  //     e.target.classList.remove('click');
  //   }, 100);
  // };

  render() {
    const { type, name, ...otherProps } = this.props;

    return (
      <ButtonStyled
        type={type}
        {...otherProps}
      >
        {name}
      </ButtonStyled>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default Button;
