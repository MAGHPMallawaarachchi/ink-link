import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const SignUp = async () => {
        try{
            if(password !== confirmPassword){
                setError('Passwords do not match');
                return;
            }

            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        }
        catch(error){
            setError(error.message);
        }
    }

    return(
        <div className="flex flex-col items-center max-w-[720px] m-auto py-10">
            <h1 className="pb-6 text-3xl font-bold">Sign Up</h1>
            
            {error && <p className='mb-2 font-medium text-red-500'>{error}</p>}

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

                <div>
                    <label className='flex flex-col items-start mb-2 text-base font-medium text-left'>Confirm Password</label>
                    <input 
                        type='password'
                        placeholder='Re-enter your password' 
                        value={confirmPassword}
                        className='w-[300px] px-2 py-1 border-2 border-black rounded-md' 
                        onChange={event => setConfirmPassword(event.target.value)}/>
                </div>

                <button className="w-[300px] px-2 py-1 text-white bg-black rounded-md" onClick={SignUp}>Sign Up</button>

                <div className='flex justify-center gap-2 text-sm'>
                    <p>Already have an account?</p> 
                    <Link to="/login" className="font-medium">Log In</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;