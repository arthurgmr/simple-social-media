import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
  // date formatting;
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');

  }

  function handleNewCommentChange() {
    // use to handleCommentInvalid function has correct behavior;
    event.target.setCustomValidity('');
    
    setNewCommentText(event.target.value);
  }

  function handleCommentInvalid() {
    event.target.setCustomValidity('This field needs has value!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment != commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatar_url}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your comment</strong>

        <textarea
          name='comment'
          placeholder='Leave a comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleCommentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
};