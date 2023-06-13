import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function PizzaPage() {
  const [myData, setMyData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:7000/ingredients")
      .then((res) => setMyData(res.data));
  }, []);

  const handleChange = (id,price)=>{
    let checkbox = false;           //making checkbox true
    let arr = myData.map((i)=>{
        if (i.id==id){
            i.checked=!i.checked    // toggle my checkbox whenever clicked
            if(i.checked==true){
                checkbox=true;
            }
        }
        // return i
    });
    // setMyData(arr)
    if(checkbox==true){
      setCount(count+price)
    }
    else{
      setCount(count-price)
    }
    console.log(arr)
}

  return (
    <>
      <p className="page3para">
        Pizzeria now gives you options to build youe own pizza, Customize your
        pizza by choosiningredients from the list below
      </p>
      <div class="container">
        <table class="table table-bordered table-striped " width={"20%"}>
          <tbody>
            {myData.map((i) => {
              return (
                <tr key={i.id}>
                  <td>
                    <img
                      width="50"
                      alt="Error"
                      src={i.image}
                      draggable="false"
                    />
                  </td>
                  <td>
                    {i.tname}₹{i.price}
                  </td>
                  <td className="Add text-warning">
                    <input  type="checkbox" onChange={()=>handleChange(i.id,i.price)} /> Add
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h1 className="page3h1">Total Cost : {count}</h1>
        <input
          type="button"
          value={"Build Ur Pizza"}
          className="BuildButton "
        />
      </div>
    </>
  );
}

export default PizzaPage;
