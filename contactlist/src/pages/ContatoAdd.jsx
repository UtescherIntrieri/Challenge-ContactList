import React, { useRef } from "react";
import { firestore } from "../configuration"
import { addDoc, collection } from "@firebase/firestore"
import { useNavigate } from "react-router-dom";

export default function ContatoAdd() {
  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const ref = collection(firestore, "contatos")

  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);

    let data = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value
    }

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
    navigate("/contatos");
  }

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Name</label>
        <input type="text" ref={nameRef} />
        <label>Username</label>
        <input type="text" ref={usernameRef} />
        <label>Email</label>
        <input type="text" ref={emailRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}