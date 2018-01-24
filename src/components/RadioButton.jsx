import PropTypes from 'prop-types';
import React from 'react';
import LabeledInput from './LabeledInput';

const RadioButton = ({ value, label, ...props }) => (
  <LabeledInput
    type="radio"
    value={value}
    label={label != null ? label : value}
    {...props}
  />
);

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

RadioButton.defaultProps = {
  label: undefined,
};

export default RadioButton;