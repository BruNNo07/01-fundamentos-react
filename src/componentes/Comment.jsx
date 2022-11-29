import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment }){

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    const [likeCount, setLikesCount] = useState(0)

    function handlelikeComment(){
        setLikesCount(likeCount + 1)
    }
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

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handlelikeComment}>
                        <ThumbsUp size={20}/>
                        Curtir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>  
        </div>
    )
}