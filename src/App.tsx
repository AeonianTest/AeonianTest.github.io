import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css'

function App() {

	
  	return (
		<HashRouter>
			<div className='MainContainer'>
				<Header/>
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutMe/>} />
						<Route path="/projects" element={<Projects/>} />
					</Routes>
				</main>
				<Footer/>
			</div>
    	</HashRouter>
  	)
}

export default App;
