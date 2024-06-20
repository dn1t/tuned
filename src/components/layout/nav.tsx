import { A } from '@solidjs/router';
import { Logo } from '../common/logo';
import styles from './nav.module.css';

export function Nav() {
  return (
    <nav class={styles.navWrapper}>
      <div class={styles.nav}>
        <div class={styles.logoContainer}>
          <Logo class={styles.logo} />
          <h1 class={styles.logoText}>tuned</h1>
        </div>
        <ul class={styles.menu}>
          <li>
            <A href='/' class={styles.menuItem}>인기</A>
          </li>
          <li>
            <A href='/editor' class={styles.menuItem}>편집기</A>
          </li>
          <li>
            <A href='/settings' class={styles.menuItem}>설정</A>
          </li>
        </ul>
      </div>
    </nav>
  );
}
