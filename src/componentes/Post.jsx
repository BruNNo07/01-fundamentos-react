import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


export function Post({author, publishedAt, content}){

    const [comments,setComments] = useState([
        "Post muito bom, hein?!"
    ])

    function handleNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange(){
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid (){
        event.target.setCustomValidity("Esse Campo é Obrigatório")
    }

    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'as' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length === 0

    function deleteComment(commentToDelete){
       const commentsWithoutDeleteOne = comments.filter(comment => {
        return comment !== commentToDelete
       }) 

       setComments(commentsWithoutDeleteOne)
    }
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                 name='comment'
                 value={newCommentText}
                 onChange={handleNewCommentChange}
                 placeholder='Deixe um Comentario'
                 onInvalid={handleNewCommentInvalid}
                 required
                 />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}