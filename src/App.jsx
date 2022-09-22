import { Header } from './componentes/Header'
import { Post } from './componentes/Post'
import { SideBar } from './componentes/Sidebar'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />
      

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post 
          author="Brunno Dalla" 
          descAuthor = "Web Developer"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia dignissimos possimus obcaecati at? Unde temporibus molestias fugiat alias, quisquam quae sapiente, laudantium dolorem vel ducimus blanditiis, amet molestiae ad."
          />
          <Post 
          author="Maiza" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia dignissimos possimus obcaecati at? Unde temporibus molestias fugiat alias, quisquam quae sapiente, laudantium dolorem vel ducimus blanditiis, amet molestiae ad."
          />
        </main>
      </div>
      
    </div>
  )
}

export default App
