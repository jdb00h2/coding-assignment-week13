import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        const styles = {
            border: '6px solid midnightblue',
            borderRadius: '15px',
            textAlign: 'center',
            width: '300px',
            paddingLeft: '30px',
            paddingRight: '30px',
            paddingBottom: '30px',
            top: '50%',
            left: '50%',
            position: 'absolute',
            marginLeft: '-186px',
            marginTop:'-84px',
            backgroundColor: 'rgb(232, 223, 223)',
        };

        return (
            <div className='form-box' style={styles}>
                <form>
                    <h3>Log In</h3>
                    <input type='te' placeholder='Username'/>
                    <br></br>
                    <input type='password' placeholder='Password'/>
                    <br></br>
                    <button type='submit' value='submit' className='submitButton'>Submit</button>
                </form>
            </div>
        )
    }
}