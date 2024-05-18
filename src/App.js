import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routers/AppRouter";

function App() {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
}

export default App;
