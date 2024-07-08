import { NavLink } from "react-router-dom";

export function Menu() {
  return(
    <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/contatos">Contatos</NavLink>
    </>
  )
}