import React from 'react';
import styles from './index.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";


const Navbar = () => {
  return (
    <nav id='navbar' className={styles.navbar}  >
      <div className="container">
        <div className={styles.sec_container}>
          <div className={styles.logo}>
            <img src="https://suwa.com.sa/assets/images/logo-light.png" alt="logo this is islam" />
          </div>

          <div className={styles.settings_container}>
            <div className={styles.icon_container}>
              <GiHamburgerMenu />
            </div>

          </div>
        </div>
      </div >
    </nav>
  )
}

export default Navbar