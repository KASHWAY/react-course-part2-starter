import React, { Dispatch } from "react";
import { LoginAction } from "../reducers/loginReducer";

interface LoginContextType {
    user: string;
    dispatch: Dispatch<LoginAction>
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType);

export default LoginContext;