import {useEffect, useState} from 'react'
import axios from 'axios'

const ListUser = () => {

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        // axios.get("https://reqres.in/api/users?page=2")
        //     .then(res => {
        //         console.log(res.data.data)
        //     })
        const users = async () => {
            const respone = await axios.get("http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien")
            // console.log(respone.data)
            setListUser(respone.data)
        }
        users()
    }, [])


   
    const handleDeleteUser = async (user) => {
        try{
            const res = await axios.delete(`http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${user.maSinhVien}`)
            console.log(res)
            
            setListUser(prevUser => {
                const newListuser = [...prevUser]             
                const deleteUser = newListuser.filter(_user => _user.maSinhVien !== user.maSinhVien)
                return deleteUser
            })
        }catch(err){
            console.log(err)
        }
    }
    

    return (
        <div>
            {listUser && listUser.map(user => (              
                <p key={user.maSinhVien}>{user.tenSinhVien} <button onClick={() => handleDeleteUser(user)}>Delete</button></p>              
            ))}
        </div>
    )
}

export default ListUser
