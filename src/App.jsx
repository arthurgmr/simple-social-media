import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <aside>
          <Sidebar />
        </aside>

        <main></main>

      </div>

    </div>
  )
}
