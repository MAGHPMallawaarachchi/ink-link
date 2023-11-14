import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav class="border-b-4 border-black">
            <ul class='flex items-center justify-center text-base font-bold'>
                <li class="hover:bg-black hover:text-white w-28 h-10 flex items-center justify-center">
                    <Link to="/">Home</Link>
                </li>
                <li  class="hover:bg-black hover:text-white w-28 h-10 flex items-center justify-center">
                    <Link to="/about">About</Link>
                </li>
                <li class="hover:bg-black hover:text-white w-28 h-10 flex items-center justify-center">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;