

function FormValidity(){  
  let content = document.getElementById("content")
  let submit = document.getElementById("submit")
  let form = document.getElementById("AddForm")

  form.addEventListener("submit", (event) => {
    if (content.value === '' || content.value == null){
      event.preventDefault()
      alert("content is required")
    } 
  })}
FormValidity()
