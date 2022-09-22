import styles from './Post.module.css'

export function Post(props){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                     src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                     className={styles.avatar}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.descAuthor}</span>
                    </div>
                </div>

                <time title="20/09/2022 às 16:03" dateTime='2022-09-20'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 {" "}<a href='#'>jane.design/doctorcare</a></p>
            <p>
            <a href='#'>#novoprojeto</a>{" "}
            <a href='#'> #nlw</a>{" "}
            <a href='#'>#rocketseat</a>
            
            </p>
            </div>
        </article>
    )
}