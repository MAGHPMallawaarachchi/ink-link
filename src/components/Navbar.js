import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="border-b-4 border-black">
            <ul className='flex items-center justify-center text-base font-bold'>
                <li className="flex items-center justify-center h-10 hover:bg-black hover:text-white w-28">
                    <Link to="/">Home</Link>
                </li>
                <li  className="flex items-center justify-center h-10 hover:bg-black hover:text-white w-28">
                    <Link to="/about">About</Link>
                </li>
                <li className="flex items-center justify-center h-10 hover:bg-black hover:text-white w-28">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;