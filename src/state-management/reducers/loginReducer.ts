interface Login {
    type: 'LOGIN';
    userLogin: string;
}

interface Logout {
    type: 'LOGOUT';
}

type Action = Login | Logout;

const loginReducer = (state: string, action: Action): string => {
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