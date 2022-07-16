import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


function LoginView() {
  return (
    <div className='loginContainer'>
        <div className='loginTitle'>Login in to Tiktok</div>
        <div className='loginSubTitle'>Manage your account, check notifications, comment on videos, more</div>
        <WalletMultiButton />
    </div>
  );
}
;
export default LoginView;