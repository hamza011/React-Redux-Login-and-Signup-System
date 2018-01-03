import React from 'react';
import { connect } from 'react-redux';
import './login.css';

function mapStateToProps(store) {
    return {
        allUsersFromStore: store.allUsers,
        loginUserFromStore: store.loginUser
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchLoginDetails: (loginDetails) => {
            dispatch({ type: "LOGIN_USER", payload: loginDetails })
        }
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LoginFields: {
                userName: "",
                email: "",
                password: ""
            }
        };
    }

    changeHandler(fieldName, event) {
        let newLoginFields = { ...this.state.LoginFields };
        newLoginFields[fieldName] = event.target.value;
        this.setState({ LoginFields: newLoginFields });
    }
    render() {
        if( !this.props.allUsersFromStore.length ){
            alert("You Need To SignUp First.");
            this.props.history.push("/sign-up");
        }
        if (this.props.loginUserFromStore.length) {
            this.props.history.push('/dashboard')
            return '';
        }
        return (
            <div className="content">
                <div className="modal-login">
                    <div className="modal-content">
                        <h3>LOGIN ..</h3>
                        <form action="" onSubmit={this.onSubmit.bind(this)}>
                            <input type="text" placeholder="User name:" name="userName" value={this.state.LoginFields.userName} onChange={this.changeHandler.bind(this, 'userName')} ref="username" required/>
                            <input type="email" placeholder="Email:" name="email" value={this.state.LoginFields.email} onChange={this.changeHandler.bind(this, 'email')} ref="email" required />
                            <input type="password" placeholder="Password:" name="password" value={this.state.LoginFields.password} onChange={this.changeHandler.bind(this, 'password')} ref="password" required />
                            <div className="login-btn">
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    onSubmit(e) {
        e.preventDefault();
        // store.dispatch({type : "LOGIN_USER", payload : this.state.LoginFields});
        this.props.dispatchLoginDetails(this.state.LoginFields);
        this.refs.userName = "";
        this.refs.email = "";
        this.refs.password = "";
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)