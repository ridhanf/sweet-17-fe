import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

const router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;