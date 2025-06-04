import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { fNumber } from 'src/utils/format-number';

export default function RHFNumberField({ name, helperText, allowNegative, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          autoComplete="off"
          value={fNumber(field.value)}
          fullWidth
          type="text"
          inputProps={{ min: 0 }}
          onChange={(event) => {
            let { value } = event.target;

            value = value.replace(/[^0-9.-]/g, '');

            const firstDotIndex = value.indexOf('.');
            const firstMinusIndex = value.indexOf('-');

            if (firstMinusIndex === 0) {
              if (value.includes('-.')) {
                value = '-0..';
              }
            } else {
              value = value.replace('-', '');
            }

            if (firstMinusIndex !== -1) {
              const secondMinusIndex = value.indexOf('-', firstMinusIndex + 1);
              if (secondMinusIndex !== -1) {
                value = value.slice(0, secondMinusIndex) + value.slice(secondMinusIndex + 1);
              }
            }

            if (firstDotIndex !== -1) {
              if (firstDotIndex === 0) {
                value = '0..';
              }
              const secondDotIndex = value.indexOf('.', firstDotIndex + 1);
              if (secondDotIndex !== -1) {
                value = value.slice(0, secondDotIndex) + value.slice(secondDotIndex + 1);
              }
            }

            field.onChange(value);
          }}
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        />
      )}
    />
  );
}

RHFNumberField.propTypes = {
  name: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  allowNegative: PropTypes.bool,
};
