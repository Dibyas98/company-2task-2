import Main from "./Components/Main/Main";
// import "./styles.css";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar /> */}
        <Main />
      </Provider>
    </>
  );
}
