import React from 'react'
import ItemDetailView from './ItemDetailView';

function InventoryList() {
  const inventory = [
    {
      itemName: "Green Matcha",
      description: "A healthy tea that gives you energy and focus",
      available: 100,
      price: 20, 
      id: 1
    },
    {
      itemName: "Lavender Blend",
      description: "A soothing blend to wash away worries",
      available: 100,
      price: 15,
      id: 2
    },
    {
      itemName: "Chamomile",
      description: "A relaxing tea to help you sleep", 
      available: 100,
      price: 10,
      id: 3
    }, 
    {
      itemName: "White Jasmine",
      description: "A sweet blend for focus and health",
      available: 100,
      price: 25,
      id: 4
    },
    {
      itemName: "Earl Grey",
      description: "Classic bergamont flavoring",
      available: 100,
      price: 10,
      id: 5
    }
  ] 

  const blue = true;

  return (
    <div>
      {blue ? <div>Yes blue</div> : <div>No blue</div>}
      {/* {
        (true) ? <div></div> :
        (false) ? '' :
         ''
        () => {if (true) return <div>fujsx</div>}
      
      
      } */}
    </div>
  );
}

export default InventoryList;