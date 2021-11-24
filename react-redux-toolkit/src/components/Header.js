import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/store";

// pasiimti isAuthenticated state is store

// jei isAuthenticated yra true - rodom my products ir my sales ir logout

// jei isAuthenticated yra false - rodom tik login

// Header.js paspaudus logout isloginam esama vartotoja

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  console.log("Header.js: isLoggedIn ===", isLoggedIn);

  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}
          <li>
            {isLoggedIn && <button onClick={logout}>Logout</button>}
            {!isLoggedIn && <button>Login</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
