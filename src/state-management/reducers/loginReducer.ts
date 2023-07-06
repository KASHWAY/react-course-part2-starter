interface Login {
    type: 'LOGIN';
    userLogin: string;
}

interface Logout {
    type: 'LOGOUT';
}

export type LoginAction = Login | Logout;

const loginReducer = (state: string, action: LoginAction): string => {
    switch (action.type) {
        case 'LOGIN':
            return action.userLogin;
        case 'LOGOUT': 
            return '';    
        default: 
            return state;
    }  
}

export default loginReducer;