import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { createStore } from "app/store/createStore";
import { Provider } from "react-redux";
import "swiper/css/bundle";

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
// <React.StrictMode></React.StrictMode>
