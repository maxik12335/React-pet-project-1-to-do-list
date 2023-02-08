import { useEffect, useState } from "react"

export const useKeyPress = (keyTarget) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  const downHandler = ({key}) => {
    if(key === keyTarget) {
      setIsKeyPressed(true)
    }
  }

  const upHandler = ({key}) => {
    if(key === keyTarget) {
      setIsKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)

    return () => {
      window.addEventListener("keydown", downHandler)
      window.addEventListener("keyup", upHandler)
    }
  }, [])

  return isKeyPressed
}