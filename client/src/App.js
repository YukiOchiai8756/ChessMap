import Header from "./Header";
import Home from "./Home";
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
function App() {
  	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/board" element={<Board/>}/>
			</Routes>

		</BrowserRouter>

  	);
}

export default App;
