import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css'

function App() {
  	return (
		<HashRouter>
			<Header/>
      		<Routes>
        		<Route path="/" element={<HomePage />} />
      		</Routes>
			<Footer/>
    	</HashRouter>
  	)
}

export default App
