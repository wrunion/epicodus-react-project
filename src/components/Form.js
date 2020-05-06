import React from 'react'

function Form(props) {
  const { handleSubmitCallback } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const { itemName, description, available, price, key} = e.target;
    handleSubmitCallback({itemName, description, available, price, key});
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