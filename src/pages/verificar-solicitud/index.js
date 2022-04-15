import React from 'react'
import { useSelector, useDispatch } from "react-redux";
function index() {
  const loading = useSelector((state) => state.prestamos.loading);

  console.log(loading);
  return (
    <div>pantalla verificar mi solicitud {loading? "true": "false"}</div>
  )
}

export default index