import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs ,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name:newName,age:Number(newAge)});
  };

  const updateUser = async(id, age) => {
    const userDoc=doc(db,"users",id)
    const newFields={age: age+1}
    await updateDoc(userDoc,newFields)
  }

  const deleteUser=async(id) => {
    const userDoc=doc(db,"users",id);
    await deleteDoc(userDoc);
  }

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <input 
        style={{ height: "30px" }} 
        placeholder="Name..." 
        onChange={(event) => { 
          setNewName(event.target.value); 
          }} 
      />
      <input 
        style={{ height: "30px" }} 
        type="number" 
        placeholder="Age..." 
        onChange={(event) => { 
          setNewAge(event.target.value); 
          }} 
      />

      <button style={{ height: "40px" }} onClick={createUser}>Create User</button>
      {users.map((user) => {
        return <div>
          <h1>Tên:{user.name}</h1>
          <h1>Tuổi:{user.age}</h1>
          <button style={{ height: "40px" }} onClick={() => {updateUser(user.id,user.age)}}>Tăng tuổi</button>
          <button style={{ height: "40px" }} onClick={() => {deleteUser(user.id)}}>Xóa người dùng</button>
        </div>;
      })}
    </div>);
}

export default App;
