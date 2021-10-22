import React, {useContext, useState,} from "react";
import { GlobalContext } from "../context/context";
import {auth, createUserWithEmailAndPassword ,db ,setDoc ,doc} from '../config/firebase'

function SignUp(){
    const {state, disptach} = useContext(GlobalContext);
    const [newUsername, setNewUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    const register = async ()=>{
        try{
            console.log(newUsername, email)
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            let dataRef = doc(db, 'Users' ,user.uid)
            await setDoc(
                dataRef,
                {
                    username: newUsername,
                    email: user.email,
                    uid: user.uid
                }
            )
        }catch(err){
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('')
            }, 3000);
        }
    }


    return(
        <div>
            <label>Username: <br /><input type="text" value={newUsername} onChange={(ev)=>{setNewUsername(ev.target.value)}} /></label><br />
            <label>Email: <br /><input type="email" value={email} onChange={(ev)=>{setEmail(ev.target.value)}} /></label><br />
            <label>Password: <br /><input type="password" value={password} onChange={(ev)=>{setPassword(ev.target.value)}} /></label><br />
            <button onClick={register} >Sign Up</button>
            {errMsg ?  <p>{errMsg}</p> : null}
        </div>
    )
}

export default SignUp;