import { useParams } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../configuration";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export function Contato() {

  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Fetchdata();
  }, []);

  const Fetchdata = async () => {
    await getDocs(collection(firestore, "contatos"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setInfo(newData.filter(a => a.id == id))
        console.log(info, newData);
      })
  }

  const handleClick = async () => {
    const reference = doc(firestore, 'contatos', id)
    await deleteDoc(reference)
    window.location.href = '/contatos'
  }

  return (
    <>
      {info.map((c) => {
        return (
          <>
            <h1>{c.name}</h1>
            <h1>{c.username}</h1>
            <h1>{c.email}</h1>
            <button onClick={() => handleClick()}>Deletar Contato</button>
            <NavLink to={`/contatos/edit/${id}`}>Editar</NavLink>
          </>
        )
      })}
    </>
  )
}
