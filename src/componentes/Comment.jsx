import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(props){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/BruNNo07.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Brunno Dalla</strong>
                            <time>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Curtir
                        <span>20</span>
                    </button>
                </footer>
            </div>  
        </div>
    )
}