import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ type, name, ...otherProps }) => {
  return (
    <ButtonStyled type={type} {...otherProps}>
      {name}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default Button;
