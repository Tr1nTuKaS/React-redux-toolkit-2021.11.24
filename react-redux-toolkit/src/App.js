import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

// App.js. Jei esam prisilogine tai rodom UserProfile ir Counter
// App.js. Jei nesam prisilogine tai rodom tik Auth

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && (
        <div>
          <UserProfile />
          <Counter />
        </div>
      )}
    </>
    // <div></div>
  );
}

export default App;
