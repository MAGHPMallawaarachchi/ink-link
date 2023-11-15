import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../hooks/useUser';

const Navbar = () => {
    const { user } = useUser();

    return (
        <nav className="flex items-center justify-between px-5 border-b-4 border-black">
            <ul className='flex items-center justify-center flex-grow text-base font-bold'>
                <li className="flex items-center justify-center h-10 hover:bg-black hover:text-white w-28">
                    <Link to="/">Home</Link>
                </li>
                <li className="flex items-center justify-center h-10 hover:bg-black hover:text-white w-28">
                    <Link to="/about">About</Link>
                </li>
                <li className="flex items-center justify-center h-10 hover:bg-black hover:text-white w-28">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            <div className='flex items-end'>
                {user
                    ? <button onClick={()=>{signOut(getAuth());}} className='px-3 py-1 text-white bg-black rounded-md'>Logout</button>
                    : <Link className='px-3 py-1 text-white bg-black rounded-md' to="/login">Login</Link>
                }
            </div>
        </nav>
    );
}

export default Navbar;
