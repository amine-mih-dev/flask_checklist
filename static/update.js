function UpdateValidity(){  

  let content = document.getElementById("ucontent")
  let submit = document.getElementById("usubmit")
  let form = document.getElementById("UpdateForm")

  form.addEventListener("usubmit", (event) => {
    if (content.value === '' || content.value == null){
      event.preventDefault()
      alert("content is required")
    }
  })}
UpdateValidity()