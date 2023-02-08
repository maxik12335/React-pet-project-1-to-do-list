import React, { useEffect, useState } from "react";
import { checkLengthListItemValue } from "../../utils/checkLengthListItemValue";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./ToDoList.module.css"

const ToDoList = ({posts, removePost, editPost, togglePostDisabled}) => {
  // isPostAdded: не показывать "Задач нет" при первичном render. Только после удаления всех постов
  const [isPostAdded, setIsPostAdded] = useState(false)

  const removeById = (id) => {
    removePost(id)
    setIsPostAdded(true)
  }

  const editById = (id, value) => {
    editPost(id, value)
  }

  const toggleDisabledById = (id) => {
    togglePostDisabled(id)
  }

  if(posts.length === 0 && isPostAdded) {
    return (
      <p className={styles.noPosts}>Задач нет</p>
    )
  }
   
  return (
    <ul className={styles.list}>
      {posts.map((post, index) => 
        <li 
          key={post.id}
          className={styles.listItem}
        >
          <div className={styles.listBoxSpan}>
            <span className={styles.listItemSpan}>{index + 1}</span>
            <Input
              className={post.disabled ? [styles.listItemInput].join(" ") : [styles.listItemInput, styles.listItemInputEdit].join(" ")} 
              value={checkLengthListItemValue(post.value)}
              onChange={event => editById(post.id, event.target.value)}
              disabled={post.disabled}
            />
          </div>

          <div className={styles.buttonsBox}>
            <Button
              className={post.disabled ? [styles.button].join(" ") : [styles.button, styles.buttonEdit].join(" ")}
              onClick={() => toggleDisabledById(post.id)}
            >
              <img className={styles.buttonsImg} src="/images/replacePost.svg" alt="replace post" />
            </Button>

            <Button
              className={styles.button}
              onClick={() => removeById(post.id)}
            >
              <img className={styles.buttonsImg} src="/images/deletePost.svg" alt="delete post" />
            </Button>
          </div>
        </li>
      )}
    </ul>
  )
  
 }

export default ToDoList;