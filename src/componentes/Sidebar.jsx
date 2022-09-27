import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover}
             src="https://images.unsplash.com/photo-1647876012576-ab84224b7a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
             alt="img-cover"
            />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://github.com/BruNNo07.png"/>
                <strong>Brunno Dalla</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={24} />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}