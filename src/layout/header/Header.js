import "./_Header.sass";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";

function Header() {
  const [state] = useStateValue();

  const handleSearching = (event) => {
    state.productsApi.filter((product) =>
      product.title.includes(event.target.value)
    );
  };
  return (
    <div className="header-wrapper">
      <div className="container">
        <header className="header">
          <Link to=".">
            <div className="header__logo">
              <span className="header__logo--sprite g-btn-hover-effect"></span>
            </div>
          </Link>

          <div className="header__search">
            <input placeholder = 'Drone name...' type="text" className="search" onChange={handleSearching} />
            <span className="search-spirite"></span>
          </div>

          <div className="header__options">
          <Link to="./returnsAndOrders">
            <div className="header__countrey g-crowded-btn g-btn-hover-effect">
              <div>
                <span>Returns</span>
                <span>&amp;Orders</span>
              </div>
            </div>
            </Link>
            <Link to="/checkout">
              <div className="header__count g-crowded-btn g-btn-hover-effect">
                <span className="header__count--num">
                  {state.basket?.length}
                </span>
                <span className="header__count--sprite"></span>
              </div>
            </Link>
            <Link to="/login">
              <div className="regestring g-btn-hover-effect">
                {state.user === null ? (
                  <span>Hello, Sign in</span>
                ) : (
                  <img
                    src={state.user.photoURL}
                    title={state.user.email}
                    alt={state.user.displayName}
                  />
                )}
              </div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
