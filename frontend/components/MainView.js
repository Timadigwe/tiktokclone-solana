import React from 'react';
import styles from '../styles/Mainview.module.css'
import Signup from './Signup';
import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { SOLANA_HOST } from '../utils/const';
import { getProgramInstance } from '../utils/utils';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

import useAccount from '../Hooks/useAccount'

const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const { BN, web3 } = anchor
const { SystemProgram } = web3

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
}

const isAccount = false

function MainView() {
    const [isAccount, setIsAccount] = useState(false);
    const wallet = useWallet()
    const connection = new anchor.web3.connection(SOLANA_HOST)

    const program = getProgramInstance(connection, wallet)

  return (
    <>
      {isAccount ? (
          <div>MainView</div>
      ) : (
        <Signup />
      )}
    </>
  )
}

export default MainView;