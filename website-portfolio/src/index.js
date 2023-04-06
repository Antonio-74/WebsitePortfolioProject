import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/mdoal-context";
import './index.css';
import { ThemeProvider } from "./context/theme-context";

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <ThemeProvider>
        <ModalProvider>
            <App />
        </ModalProvider>
    </ThemeProvider>
)