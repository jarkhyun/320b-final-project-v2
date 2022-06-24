import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';

export default function Nav() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=> {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);
    return (
        <div>
            <div className='TitleBar'>
                <div className='Nav'>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/wordle">Wordle</Link></div>
                    {/* <li><Link to="/quordle">Quordle</Link></li> */}
                </div>
                <h1>Wonderful World of Wordle</h1>
                <div className='SignIn'>
                    {user ? (
                    <div>
                        <p>{user.displayName}</p>
                        <button
                            onClick={() => {
                                firebase.auth().signOut();
                                navigate('/');
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to ="/">Sign In</Link>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}