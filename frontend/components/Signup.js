import React from 'react'
import styles from '../styles/Signup.module.css'

function Signup() {
  return (
    <div className={styles.authContainer}>
        <h1 className={styles.title}>Sign up to use TikTok</h1>
        <div className={styles.signupForm}>
            <div className={styles.inputField}>
                <div className={styles.inputTitle}>Username</div>
                <div className={styles.inputContainer}>
                    <input 
                    className={styles.input}
                     type='text'
                     //onChange=
                     />
                </div>
            </div>
             <div className={styles.inputField}>
                <div className={styles.inputTitle}>Profile Image:</div>
                <div className={styles.inputContainer}>
                    <input 
                    className={styles.input}
                    type='text'
                    //onChange=
                    />
                </div>
             </div>
        </div>
        <div className={styles.loginButton}>Signup</div>
    </div>
  )
}

export default Signup;