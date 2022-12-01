import React from 'react'

function ItemsList({items}) {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
 
      };

    const card ={
        color: "DodgerBlue",
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Arial"
    };
  return (
    <div>

        <div>ItemsList</div>

         <p> reach</p>

        <div>
            <h2> Items Listed</h2>
            {Object.values(items).map((value, index) => {
        return (
          <div key={index} className="bgcard" style={mystyle}>
            <div style={card}>
            <h2>{value.id}</h2>
            <p>{value.item_name}</p>
            <p>{value.item_quantity}</p>
            <p>{value.item_price}</p>
            </div>
 

            <hr />
          </div>
        );
      })}
        </div>


    </div>
  )
}

export default ItemsList