import { BrandNavbar } from '../../brand/components';
import { Button, H3 } from '../../base/components';
import { alert } from '../../shared_state/popup/actions';
import styles from './content.styl';

function loginFail() {
  alert('Sorry, the email and password do not match.  Please try again.');
}

const LoginPageContent = () => (
  <div>
    <BrandNavbar />
    <div className={styles.form}>
      <div className={styles.section}>
        <H3>Email</H3>
        <input className={styles.input} type='text' />
      </div>
      <div className={styles.section}>
        <H3>Password</H3>
        <input className={styles.input} type='password' />
      </div>
      <Button onClick={loginFail} block rounded={false}>
        Log In
      </Button>
    </div>
  </div>
);

export default LoginPageContent;
