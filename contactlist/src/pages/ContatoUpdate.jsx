import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../configuration"
import { doc, updateDoc, collection, getDocs } from "@firebase/firestore"
import { useNavigate, useParams } from "react-router-dom";

export default function ContatoUpdate() {

  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const ref = collection(firestore, "contatos")
  const navigate = useNavigate();


  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
    await getDocs(collection(firestore, "contatos"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setInfo((newData.filter(a => a.id == id))[0])
        console.log(info);
      })
  }


  const newName = (document.getElementById("inputname") == null || document.getElementById("inputname").value === '') ? info.name : document.getElementById("inputname").value;
  const newUsername = (document.getElementById("inputusername") == null || document.getElementById("inputusername").value === '') ? info.username : document.getElementById("inputusername").value;
  const newEmail = (document.getElementById("inputemail") == null || document.getElementById("inputemail").value === '') ? info.email : document.getElementById("inputemail").value;
  console.log(newName);
  console.log(newUsername);
  console.log(newEmail);

  const handleUpdate = async (e) => {
    e.preventDefault()
    const docRef = doc(firestore, 'contatos', id)
    try {
      await updateDoc(docRef, {
        name: newName,
        username: newUsername,
        email: newEmail
      })
      navigate(`/contatos/${id}`);
    } catch (err) {
      alert(err)
    }
  }

  console.log(name);
  console.log(username);
  console.log(email);

  return (
    <div>
      <form onSubmit={handleUpdate} className='editTask' name='updateTask'>
        <label>Name</label>
        <input type="text" id="inputname" onChange={e => setName(e.target.value)} Value={info.name} />
        <label>Username</label>
        <input type="text" id="inputusername" onChange={e => setUsername(e.target.value)} Value={info.username} />
        <label>Email</label>
        <input type="text" id="inputemail" onChange={e => setEmail(e.target.value)} Value={info.email} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}