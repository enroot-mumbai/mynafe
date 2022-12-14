import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const DangerSwal = (primaryButtonStyle = 'errorButton') =>
  withReactContent(
    Swal.mixin({
      customClass: {
        actions: 'sweetAlertActions',
        confirmButton: `${
          primaryButtonStyle || 'errorButton'
        } sweetAlertButton`,
        cancelButton: 'secondaryButton sweetAlertButton mr16',
      },
      buttonsStyling: false,
    })
  );

export const ConfirmSwal = withReactContent(
  Swal.mixin({
    customClass: {
      actions: 'sweetAlertActions',
      confirmButton: 'primaryButton sweetAlertButton',
    },
    buttonsStyling: false,
  })
);

export const SomethingWentWrongAlert = (message) => {
  return ConfirmSwal.fire({
    title: 'Something went wrong!',
    html: message,
    icon: 'error',
  });
};
