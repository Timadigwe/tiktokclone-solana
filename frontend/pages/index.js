//components
import LoginView from "../components/LoginView";
import MainView from "../components/MainView";
import { useWallet } from '@solana/wallet-adapter-react';


export default function Home() {

  const { connected } = useWallet();

  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <LoginView/>
      )}
    </div>
  )
}
