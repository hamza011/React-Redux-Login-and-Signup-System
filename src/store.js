import { createStore } from "redux";
import { connect } from 'react-redux';

let initialState = {
    allUsers: localStorage.getItem('allUsers') ? JSON.parse(localStorage.getItem('allUsers')) : [],
    loginUser: localStorage.getItem('loginUser') ? JSON.parse(localStorage.getItem('loginUser')) : [],
}

function reducer(state = initialState, action) {

    let newState = { ...state };
    switch (action.type) {
        case "CREATE_USER":
            newState.allUsers = [].concat(state.allUsers);
            newState.allUsers.push(action.payload);
            localStorage.setItem('allUsers', JSON.stringify(newState.allUsers));
            if(newState.allUsers.length){
                alert("You are successfully enroll to the app. \n Now login to continue.")
            }
            break;
        case "LOGIN_USER":
            let validEmail = false;
            let validUserPassword = false;
            console.log("Inside LOGIN_USER");
            console.log("action => ", action.payload);
            if (newState.allUsers) {
                for (let i = 0; i < newState.allUsers.length; i++) {
                    if (newState.allUsers[i].email === action.payload.email){
                        validEmail = true;
                        if(newState.allUsers[i].password === action.payload.password){
                            validUserPassword = true;
                            newState.loginUser = [].concat(state.loginUser);
                            newState.loginUser.push(action.payload);
                            //alert(`Dear ${newState.allUsers[i].name} you are successfully logged in`);
                            localStorage.setItem('loginUser', JSON.stringify(newState.loginUser));
                            // window.location.href = "/dashboard"
                        }
                        break;
                    }
                }
                if( !validEmail ){
                    alert("invalid user email address")
                }
                else if(!validUserPassword){
                    alert("inavalid password")
                }
            }
            break;
        case "LOGOUT_USER":
            // localStorage.removeItem('loginUser');
            newState.loginUser = [];
            localStorage.setItem('loginUser',[]);
            break;
    }
    return newState;
}

export let store = createStore(reducer);