
  const content = document.getElementById("content")
  const submit = document.getElementById("submit")
  const form = document.getElementById("AddForm")

function validateTask() {
  // check if is empty
  if (checkIfEmpty(content) ) return

  // is if it has only letters
  return true;
}

function FormValidity(){  

  form.addEventListener("submit", (event) => {
    if (content.value === '' || content.value == null){
      event.preventDefault()
    } 
  })}

  const ucontent = document.getElementById("ucontent")
  const usubmit = document.getElementById("usubmit")
  const uform = document.getElementById("UpdateForm")


  function validateUpdate() {
    // check if is empty
    if (checkIfEmpty(ucontent) ) return
    // is if it has only letters
    return true;
  }
  
  //doesnt work for some reason
  function updateFormValidity(){  
  
    uform.addEventListener("usubmit", (event) => {
      if (ucontent.value === '' || ucontent.value == null){
        event.preventDefault()
        
      } 
    })}
  





//helper functions
  function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
      // set field invalid
      setInvalid(field, `${field.name} must not be empty`);
      return true;
    } else {
      // set field valid
      setValid(field);
      return false;
    }
  }
  function isEmpty(value) {
    if (value === '') return true;
    return false;
  }
  function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
    
  }
  function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    //field.nextElementSibling.style.color = green;
  }