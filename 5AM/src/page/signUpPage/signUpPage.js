import React from "react";

//导入动态背景组件
import DynamicBackground from "../../components/dynamicBackground";
//导入登录组件
import SignUp from "./signUp";




export default function SignUpPage(){
    return(
        <div>
            <SignUp />
            <DynamicBackground />
        </div>
    );
}