import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react";
export const ModalContext = createContext();

export default function ModalContextProvider(props) {
  const [open, setOpen] = useState(false)
  

  const [singleProducts, setSingleProducts] = useState(null);


  async function getSingleProducts(id) {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setSingleProducts(res.data);
      });
  }


  return (
    <ModalContext.Provider value={{open, setOpen,getSingleProducts,setSingleProducts,singleProducts}}>{props.children}</ModalContext.Provider>
  );
}
