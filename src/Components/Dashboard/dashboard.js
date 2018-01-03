import React from 'react';
import logo from '../../images/logo.svg';
import user from '../../images/user-icon.png';
import reduxIcon from '../../images/redux-title.png';
import { store } from '../../store';
import { connect } from 'react-redux';
import './dashboard.css';


function mapStateToProps(store) {
    return {
        loginUserFromStore: store.loginUser,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchLogOutUser: (loginDetails) => {
            dispatch({ type: "LOGOUT_USER" })
        }
    }
}



class Dashboard extends React.Component {
    render() {
        if (this.props.loginUserFromStore.length - 1) {
            alert("You need to login first");
            this.props.history.push('/login');
            return '';
        }
        return (
            <div>
                <dashboard-header>
                    <div>
                        <ul className="user-dashboard">
                            <li>
                                <a href="https://reactjs.org/" target="_blank" rel='noopener noreferrer'>
                                    <img className="app-logo" src={logo} alt="" />
                                </a>
                                <a href="https://redux.js.org/" target="_blank" rel='noopener noreferrer'>
                                    <img className="app-logo" src={reduxIcon} alt="" />
                                </a>

                                <div className="app-name">React-Redux App</div>
                                <img className="user-icon" src={user} alt="" />
                                <button onClick={this.clickHandler.bind(this)}> Logout </button>
                            </li>
                        </ul>
                    </div>
                </dashboard-header>
                <div className="content">
                    <p className="">welcome dear <b>{this.props.loginUserFromStore[0].userName}</b>, this is your dashboard .. </p>
                </div>
            </div>
        )
    }

    clickHandler(e) {
        e.preventDefault();
        this.props.dispatchLogOutUser(this.props.loginUserFromStore);
        this.props.history.push('/');
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)