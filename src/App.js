// import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/ShopAll/Shop';
import { ShopProvider } from './components/context/ShopContext';
import Show from './components/ShowProduct/ShowProduct';
import Women from './components/ShopAll/Women';
import Men from './components/ShopAll/Men';
import CheckOut from './components/CheckOut/CheckOut';
import Cart from './components/Cart/Cart'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/contact',
		element: <ContactUs />,
	},
  	{
		path: '/about',
		element: <About />,
	},
  	{
		path: '/shop',
		element: <Shop />,
	},
	{
		path: '/show',
		element: <Show />,
	},
	{
		path: '/women',
		element: <Women />,
	},
	{
		path: '/men',
		element: <Men />,
	},
	{
		path: '/checkout',
		element: <CheckOut />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},

]);

const App = () => {
	return (
		<ShopProvider>
			<RouterProvider router={router} />
		</ShopProvider>
	);
};


export default App;
