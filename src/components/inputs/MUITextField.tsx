import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const MaterialTextField = styled(TextField)<{
  labelColor?: string;
  errorColor?: string;
  labelBGColor?: string;
  bgColor?: string;
}>(
  ({
    labelColor = '#ababab',
    errorColor = '#d32f2f',
    labelBGColor = 'transparent',
    bgColor = '#F7F8F8',
  }) => ({
    width: '100%',
    color: labelColor,
    '& .MuiFormHelperText-root.Mui-error': {
      color: errorColor,
    },
    '& .MuiInputBase-input.MuiOutlinedInput-input': {
      color: labelColor,
    },
    '& label.Mui-focused': {
      color: labelColor,
      fontFamily: 'Poppins',
    },
    '& label': {
      color: labelColor,
      fontFamily: 'Poppins',
      fontSize: '14px',
      top: '-3px',
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -2px) scale(0.75)',
      top: '-6px',
      backgroundColor: labelBGColor,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px!important',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: bgColor,
      color: labelColor,
      border: '0px!important',
      borderRadius: '10px',
      fontFamily: 'Poppins',
    },
    '& .MuiOutlinedInput-input': {
      padding: '14px',
    },
    '& .MuiOutlinedInput-multiline': {
      padding: '0px',
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: '14px',
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input':
      {
        padding: '0px',
      },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child':
      {
        paddingLeft: '0px',
      },
    '& .MuiInputBase-input.Mui-disabled': {
      color: '#969699',
    },
  })
);

export default MaterialTextField;
