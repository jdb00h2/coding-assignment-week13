import React from 'react';
import Navbar from './navbar'
import LoginForm from './login-form';

export default class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                <Navbar />
                <LoginForm />
                
            </div>
        );
    }
}