import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="link">
            <h2 className="PizzeriaText">Pizzeria</h2>
          </li>
          <li className="link">
            <Link to="/">
              <img
                src="PizzeriaLogo.png"
                width={"70px"}
                className="page3logo"
              />
            </Link>
          </li>
          <li className="link">
            <Link to="/PizzaPage">OrderUrPizza</Link>
          </li>
          <li className="link">
            <Link to="/IngredientPage">BuildUrPizza</Link>
          </li>
          <div>
            {/* <button className="shoppingCart"><FaHeart /> Shopping Cart
                </button> */}
            
            <button type="button" class="btn btn-warning shoppingCart text-light" ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
              className="cartIcon"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
              Shopping Cart
            </button>
          </div>
        </ul>
      </nav>
      

      <Outlet />
    </>
  );
};

export default Nav;
