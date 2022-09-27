import { Header } from './componentes/Header'
import { Post } from './componentes/Post'
import { SideBar } from './componentes/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @RocketSeat",
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa 👋"},
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      
      {type: 'link', content:"👉jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-09-27 12:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @RocketSeat"
    },
    content: [
      {type: 'paragraph', content:"Fala galeraa 👋"},
      {type: 'paragraph', content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      
      {type: 'link', content:"👉jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-09-27 12:30:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)

          })}
        </main>
      </div>
      
    </div>
  )
}

export default App
