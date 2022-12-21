import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

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

        <main>
          <Post />
          <Post />
        </main>

      </div>

    </div>
  )
}
