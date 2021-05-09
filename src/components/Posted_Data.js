import React,{useState,useEffect} from 'react';
import db from '../firebase/firebase';

function Posted_Data() {
const [Users, setUsers] = useState([])   

useEffect(() => {
const fetchData = async () => {
  const data = await db.collection("users").get()
  setUsers(data.docs.map(doc => doc.data()))
}
fetchData()
}, [])
  return (
   <>
   <ul>
      {Users.map(Users => (
        <li key={Users.Email}>{Users.FirstName}</li>
      ))}
   </ul>
   </>
  );
}

export default Posted_Data
