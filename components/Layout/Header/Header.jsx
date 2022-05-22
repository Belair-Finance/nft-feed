import styles from "./Header.module.scss";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Provider from "../../Misc/Provider/Provider";

const Header = () => {
  const { user, isAuthenticated, logout } = useMoralis();

  const [signInModal, setSignInModal] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/logo.png" />
        </a>
        <a href="/" style={{ color: `#000000` }}>
          <p>Belair</p>
        </a>
      </div>

      <div className={styles.profile}>
        {isAuthenticated ? (
          <div className={styles.profile_info}>
            {user?.get("profile_image_url") ? (
              <img src={user?.get("profile_image_url")} />
            ) : (
              <img
                src={`https://source.boringavatars.com/marble/26/${user?.get(
                  "ethAddress"
                )}?colors=512653,822a9d,6a86e9,61b2f4,e75168`}
                alt="image"
              />
            )}
          </div>
        ) : (
          <div
            className={styles.sign_in_button}
            onClick={() => setSignInModal(true)}
          >
            <p id="sign_in">Sign in</p>
          </div>
        )}

        {signInModal && <Provider setSignInModal={setSignInModal} />}
      </div>
    </div>
  );
};

export default Header;
