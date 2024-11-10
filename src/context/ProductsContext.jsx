import axios from "axios";
import React, { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";


export const ProductsContext = createContext();

export default function ProductsContextProvider(props) {
  const [allProducts, setAllProducts] = useState(null);


  async function getAllProducts() {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setAllProducts(res.data);
      }).catch((err) => {
        if (err.status == "404") {
         toast.error(err.message)
        }
      }
      
      );
  }


  useEffect(() => {
    getAllProducts()
    
},[])


  return (
    <ProductsContext.Provider value={{ allProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
}
