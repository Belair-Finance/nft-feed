import styles from './Provider.module.scss'
import { useMoralis } from 'react-moralis'
import { useTheme } from 'next-themes'

const Provider = ({setSignInModal}) => {
  const { authenticate } = useMoralis()
  const { theme } = useTheme()

  const sign_in_walletconnect = async() => {
    await authenticate({
      provider: 'walletconnect',
      signingMessage: 'I want to sign in to the Belair Marketplace. - BSC / Polygon Only -',
      chainId: 137
    })

    setSignInModal(false)
  }
  
  const sign_in_metamask = async() => {
    await authenticate({
      signingMessage: 'I want to sign in to the Belair Marketplace. - BSC/ Polygon Only -',
    })
    setSignInModal(false)
  }

  return (
    <div className={`${styles.provider} ${theme == 'dark' ? styles.dark : undefined}`}>
      <p className={styles.header}>Select Provider</p>
      <p className={styles.sub_header}>Choose one of the following providers to sign in with.</p>

      <div className={`${styles.option} ${styles.walletconnect}`} onClick={sign_in_walletconnect}>
        <p>Wallet Connect</p>
        <img src={`/svg/walletconnect.svg`} />
      </div>

      <div className={`${styles.option} ${styles.metamask}`} onClick={sign_in_metamask}>
        <p>MetaMask</p>
        <img src={`/svg/metamask.svg`} />
      </div>

      <button onClick={() => setSignInModal(false)}>
        <i className='far fa-times-circle'></i>                
        Dismiss Action
      </button>
    </div>
  )
}

export default Provider