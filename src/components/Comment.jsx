import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {

  function handleDeleteComment() {
    // this function is called from father's component;
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time title='December 20, 2022 09:58 pm' dateTime='2022-12-20'>Posted 1 hour</time>
            </div>

            <button onClick={handleDeleteComment} title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  );
};