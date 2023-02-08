import React, { useState } from "react";
import "./App.css"
import GeneratorToDoList from "./components/GeneratorToDoList/GeneratorToDoList";
import ToDoList from "./components/ToDoList/ToDoList";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [posts, setPosts] = useState([])
  const [isOpenGeneratorToDoList, setIsOpenGeneratorToDoList] = useState(false)

  const addPosts = (inputValue) => {
    setPosts([...posts, {id: Date.now(), value: inputValue, disabled: true}])
  }

  const removePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const editPost = (id, inputValue) => {
    setPosts(posts.map(post => 
      post.id === id ? {...post, value: inputValue} : post
    ))
  }

  const togglePostDisabled = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? {...post, disabled: !post.disabled} : post
    ))
  }

  const openOpenGeneratorToDoList = () => {
    setIsOpenGeneratorToDoList(true)
  }

  const closeOpenGeneratorToDoList = () => {
    setIsOpenGeneratorToDoList(false)
  }

  return (
    <div className="container">

      <h1 className="h1">Список дел</h1>
      {isOpenGeneratorToDoList ? 
        <GeneratorToDoList 
          addPosts={addPosts}
          closeOpenGeneratorToDoList={closeOpenGeneratorToDoList}
        /> : 
        <Button 
          onClick={openOpenGeneratorToDoList}
          className="button-open-generator-to-do-list"
        >Новая задача</Button>
      }
      
      <ToDoList 
        posts={posts} 
        removePost={removePost} 
        editPost={editPost}
        togglePostDisabled={togglePostDisabled}
      />
    </div>
  )
}

export default App;