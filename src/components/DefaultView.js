import React from 'react'

function DefaultView(props) {

  function handleClick(e) {
    props.clickCallback(true);
  }

  return (
    <div className="DefaultView">
      <h2>There are no items to display.</h2>
      <button onClick={handleClick}>Add Item</button>
    </div>
  )
}

export default DefaultView;