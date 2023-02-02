import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

// data from backend;
const posts = [
  {
    id: 1,
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: 'Hello everybody 👋'
      },
      {
        id: 2,
        type: 'paragraph',
        content: "I just uploaded another project to my portfolio. It's a project I did at NLW Return, a Rocketseat event. Project name is DoctorCare 🚀"
      },
      {
        id: 3,
        type: 'link',
        content: 'naracarvalhoc.github.io/DoctorCare'
      },
    ],
    published_at: new Date('2023-01-20T22:00:00'),
    author: {
      id: 1,
      name: 'Nara Carvalho',
      avatar_url: 'https://github.com/naracarvalhoc.png',
      role: 'Programmer Student',
    }
  },
  {
    id: 2,
    content: [
      {
        id: 4,
        type: 'paragraph',
        content: 'Hey, there! 👋'
      },
      {
        id: 5,
        type: 'paragraph',
        content: "I would like to share with you this massive study project that I am developing using NodeJS with Nest, GraphQL and Postgres, in order to improve my skills with these technologies, in addition to using the concepts of SOLID, TDD and DDD."
      },
      {
        id: 6,
        type: 'paragraph',
        content: "It's still under construction, but it's turning out pretty cool. Go check it out and leave that star!"
      },
      {
        id: 7,
        type: 'paragraph',
        content: 'Follow the link'
      },
      {
        id: 8,
        type: 'link',
        content: 'https://bruncarvalho.github.io/cracha-nlw/'
      },
    ],
    published_at: new Date('2023-02-01T22:00:00'),
    author: {
      id: 2,
      name: 'Bruna Carvalho',
      avatar_url: 'https://github.com/bruncarvalho.png',
      role: 'Intern Development',
    }
  }
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <aside>
          <Sidebar />
        </aside>

        <main>
          {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.published_at}
                />
              )
          })}
        </main>
      </div>

    </div>
  )
}
