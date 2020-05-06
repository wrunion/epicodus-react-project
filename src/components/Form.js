import React from 'react'

function Form(props) {
  const { handleSubmitCallback } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const { name, description, available, price, key} = e.target;
    handleSubmitCallback({name, description, available, price, key});
  } 

  return (
    <div className="Form">
      <form>
        <input type="text" />
        <button type="submit" onClick={handleSubmit}></button>
      </form>
    </div>
  )
}

export default Form;