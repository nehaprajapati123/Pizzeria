import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function PizzaPage() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/pizza").then((res) => setMyData(res.data));
  }, []);

  return (
    <>
      {/* <div className="container"> */}
      <div className="grid">
        {myData.map((i) => {
          return (
            <div className="card flex-container" key={i.id}>
              <div className="page2divs div1para">
                <h2>{i.name}</h2>

                <input
                  class={
                    "btn " + (i.type == "veg" ? "btn-success" : "btn-danger")
                  }
                  type="button"
                  value="   "
                />

                <h5 className="page2h5">₹{i.price}.00</h5>
              </div>

              <div className="page2divs paradiv">
                <h6>{i.description}</h6>
                <h6>ingredients: {i.ingredients}</h6>
                <h6>Topping:{i.topping}</h6>
              </div>

              <div className="page2divs imgdiv">
                <img
                  width="200"
                  height="150"
                  alt="Error"
                  src={i.image}
                  draggable="false"
                  className="page1images"
                />
              </div>
              <button type="button" class="btn btn-warning page1AddToCart text-light">
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
}

export default PizzaPage;
