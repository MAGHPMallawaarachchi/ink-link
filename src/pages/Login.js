import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        }
        catch(error){
            setError(error.message);
        }
    }

    return(
        <div className="flex flex-col items-center max-w-[720px] m-auto py-10">
            <h1 className="pb-6 text-3xl font-bold">Login</h1>
            
            {error && <p className='font-medium text-red-500'>{error}</p>}

            <div className='flex flex-col gap-4'>
                <div>
                    <label className='flex flex-col items-start mb-2 text-base font-medium text-left'>Email</label>
                    <input 
                        type='text' 
                        placeholder='Your email address' 
                        value={email}
                        className='w-[300px] px-2 py-1 border-2 border-black rounded-md' 
                        onChange={event => setEmail(event.target.value)}/>
                </div>

                <div>
                    <label className='flex flex-col items-start mb-2 text-base font-medium text-left'>Password</label>
                    <input 
                        type='password'
                        placeholder='Your password' 
                        value={password}
                        className='w-[300px] px-2 py-1 border-2 border-black rounded-md' 
                        onChange={event => setPassword(event.target.value)}/>
                </div>

                <button className="w-[300px] px-2 py-1 text-white bg-black rounded-md" onClick={logIn}>Log In</button>

                <div className='flex justify-center gap-2 text-sm'>
                    <p>Don't have an account yet?</p> 
                    <Link to="/signup" className="font-medium">Create one.</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;