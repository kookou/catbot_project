import React, {useState} from'react'
import axios from 'axios'

const UserLogin = () => {
    const [userid,setUserid] = useState()
    const [password,setPassword] = useState()

    const login = e => {
        e.preventDefault()
        alert(`로그인 아이디: ${userid}, 비번 ${password}`)
        axios.post('', {userid, password})
             .then(res =>{
                 alert('성공')
             })
             .catch(error =>{
                 alert('실패')
             })
    }
    const cancel = e => {
        e.preventDefault()
        alert('취소 버튼 클릭')
    }
    return (<>
        <h1>로그인</h1>
        <table>
            <tr>
                <td>아이디</td>
                <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="text" onChange={e => setPassword(`${e.target.value}`)}/></td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <input type="button" value="LOGIN" onClick={login}/>
                    <input type="button" value="CANCEL" onClick={cancel}/>
                </td>
            </tr>
        </table>

    </>)
}

export default UserLogin