import MaterialTextField from './MUITextField';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import dynamic from 'next/dynamic';
import { Typography } from '@mui/material';
import { Alert, Snackbar } from '@mui/material';
import { alert } from '../../utils/alerts/colors';

export const MuiPhoneNumber = dynamic(() => import('mui-phone-number'), {
  ssr: false,
  loading: () => (
    <InputLoader>
      <CircularProgress />
    </InputLoader>
  ),
});

export const InputLoader = styled('div')(({ theme }) => ({
  backgroundColor: '#F7F8F8',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '20px',
  width: '100%',
  height: '51px',
  marginTop: '20px',
}));

export const FormContainer = styled('div')(({ theme }) => ({
  width: '100%',
  paddingTop: '30px',
  paddingBottom: '30px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    paddingTop: '40px',
    paddingBottom: '40px',
  },
}));

export const FormTypography = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  textAlign: 'center',
  color: '#101010',
}));

export const FormDynamicTypography = styled('h2')(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 700,
  textAlign: 'center',
  color: '#101010',
  marginBottom: '10px',
}));

export const FormInput = styled(MaterialTextField)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    color: '#ababab',
  },
  '& .MuiSvgIcon-root': {
    fill: '#ababab',
  },
}));

export const FormTitleWrapper = styled('h1')(({ theme }) => ({
  fontWeight: 700,
  textAlign: 'center',
  color: '#101010',
  fontSize: '18px',
  [theme.breakpoints.up(768)]: {
    fontSize: '20px',
  },
}));

export const FormButton = styled('button')<{ btnTheme?: string }>(
  ({ btnTheme, theme }) => ({
    backgroundColor:
      btnTheme === 'black' ? '#090909 !important' : '#CF0014 !important',
  })
);

export const Note = styled('p')(({ theme }) => ({
  marginTop: '8px',
  textAlign: 'center',
  fontSize: '14px',
}));

export const PhoneNoInput = styled(MuiPhoneNumber)(({ theme }) => ({
  width: '100%',
  color: '#ababab',
  '& .MuiPhoneNumber-positionStart .MuiPhoneNumber-flagButton': {
    minWidth: '20px !important',
  },
  '& .MuiMenu-list': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& li': {
      padding: '12px 16px',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  '& .MuiInputBase-input.MuiOutlinedInput-input': {
    color: '#ababab',
  },
  '& label.Mui-focused': {
    color: '#ababab',
  },
  '& label': {
    fontFamily: '"Poppins", sans-serif',
    color: '#ababab',
    fontSize: '14px',
    top: '-3px',
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    transform: 'translate(14px, -2px) scale(0.75)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '0px!important',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#F7F8F8',
    color: '#101010',
    border: '0px!important',
    borderRadius: '10px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '14px',
    paddingLeft: '0px',
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
  '& svg': {
    height: '20px',
  },
}));

export const Toast = ({
  message,
  open,
  autoHideDuration = 1000,
  type,
  onClose,
  alignment = {
    vertical: 'top',
    horizontal: 'center',
  },
  ...props
}: components.alertProps): React.ReactElement => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      {...props}
      anchorOrigin={alignment}
      style={{ zIndex: 10000, bottom: 90 }}
    >
      <CustomAlert severity={type}>{message}</CustomAlert>
    </Snackbar>
  );
};

export const CustomAlert = styled(Alert)(({ severity = 'success' }) => ({
  backgroundColor: `${alert[severity]} !important`,
  '& .MuiAlert-message': {
    fontWeight: '400 !important',
  },
  '& > .MuiAlert-message': {
    color: '#fff',
    fontWeight: 700,
  },
  '& svg': {
    fill: '#fff',
  },
}));
