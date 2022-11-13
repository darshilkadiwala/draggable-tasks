import { Route, Routes } from "react-router-dom";
import cssClasses from "./App.module.css";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import AddTask from "./pages/AddTask/AddTask";
import HomePage from "./pages/Home/Home";
import Tasks from "./pages/Tasks/Tasks";

function App() {
	return (
		<div className={cssClasses.app}>
			<SideNavbar />
			<main className='container-lg'>
				<HomeHeader name='Darshil'/>
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/tasks'
						element={<Tasks />}
					/>
					<Route
						path='/add'
						element={<AddTask />}
					/>
				</Routes>
			</main>
			<div className='container'></div>
		</div>
	);
}

export default App;
