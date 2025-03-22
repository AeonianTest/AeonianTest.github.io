import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './css/App.css'

function App() {
  	return (
		<HashRouter>
      		<Routes>
        		<Route path="/" element={<HomePage />} />
      		</Routes>
    	</HashRouter>
  	)
}

export default App
