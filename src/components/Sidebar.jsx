import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/54001923?v=4" 
        />

        <strong>Arthur Machado</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a className={styles.buttonProfile} href="#">
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>

    </aside>
  );
}