import React from "react";

//导入动态背景组件
import DynamicBackground from "../../components/dynamicBackground";
//导入登录组件
import SignIn from "../../components/signIn";




export default function LoginPage(){
    return(
        <div>
            <SignIn />
            {/*<DynamicBackground />*/}
        </div>
    );
}
