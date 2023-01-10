import React from 'react'
import RequestResetPassword from '../../src/features/auth/RequestResetPassword';
import ResetPasswordOTP from '../../src/features/auth/ResetPasswordOTP';

type Props = {}

function EnterEmail({ }: Props) {

  const [showOTP, setShowOTP] = React.useState(false);

  return !showOTP ? (
    <RequestResetPassword setShowOTP={setShowOTP} />
  ) : (
    <ResetPasswordOTP setShowOTP={setShowOTP} />
  )
}

export default EnterEmail