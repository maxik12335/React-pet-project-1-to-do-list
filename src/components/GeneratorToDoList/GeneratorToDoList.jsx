import React, { useEffect, useRef, useState } from "react";
import { useKeyPress } from "../../hooks/useKeyPress";
import Button from "../UI/Button/Button";
import Close from "../UI/Close/Close";
import Input from "../UI/Input/Input";
import styles from "./GeneratorToDoList.module.css"

const GeneratorToDoList = ({addPosts, closeOpenGeneratorToDoList}) => {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef()
  const listenerEnter = useKeyPress("Enter")

  const createPost = () => {
    if(inputValue === "") {
      inputRef.current.focus()
      return
    } 

    addPosts(inputValue)
    setInputValue("")
    inputRef.current.focus()
  }

  useEffect(() => {
    createPost()
  }, [listenerEnter])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className={styles.generator}>
      <Input
        ref={inputRef}
        className={styles.generatorInput}
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        type="text"
        placeholder="Введи новую задачу"
      />
      
      <Button
        onClick={createPost}
        className={styles.generatorButton}
      >Добавить</Button>

      <Close onClick={() => closeOpenGeneratorToDoList()}/>
    </div>
  )
}

export default GeneratorToDoList;