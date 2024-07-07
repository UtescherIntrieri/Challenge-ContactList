import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../configuration";
import { useEffect, useState } from "react";


export function Contatos() {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  useEffect(() => {
    Fetchdata();
  }, []);

  // Fetch the required data using the get() method
  const Fetchdata = async () => {
    await getDocs(collection(firestore, "contatos"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setInfo(newData);
        console.log(info, newData);
      })
  }

  // Display the result on the page
  return (
    <>
      <NavLink to={"/contatos/new"}>Create new Contact</NavLink>
      {info.map((contatos) => (
        <>
          <h2><NavLink to={`/contatos/${contatos.id}`}>{contatos.name}</NavLink></h2>
        </>
      ))}
    </>
  );
};

export default Contatos;


// {robots.map((robot) => {
//   return(
//     <h1><NavLink to={`/contatos/${robot.id}`}>{robot.name}</NavLink></h1>
//   )
// })}