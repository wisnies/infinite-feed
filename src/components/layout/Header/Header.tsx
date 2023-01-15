import styles from '../../../styles/components/layout/Header.module.scss';
import { nav } from '../../../data/nav';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.containerInner}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li className={styles.navListItem} key={item.id}>
                <NavLink className={styles.navListItemLink} to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
