export const submitEnter = (callback) => {
  document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
      callback()
    } 
  })
}