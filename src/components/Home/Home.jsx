import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { StarIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Loader from "../Loader/Loader";
import { ModalContext } from "../../context/ModalContext";
import { Link } from "react-router-dom";



export default function Home() {

  const { allProducts  } = useContext(ProductsContext)
  const { open, setOpen, getSingleProducts } = useContext(ModalContext)
  


  function openModal(id) {
    setOpen(true)
    getSingleProducts(id)
  }
  


  

  return (
    <>
    {allProducts == null ? <Loader/> :  <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allProducts?.map((product) => (
            <div key={product.id} className="group shadow-md relative pb-20">
              <Link  to={"/"} onClick={() => { openModal(product.id) }}>
              <div className="aspect-h-1 h-[300px] aspect-w-1 w-full  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt="productIMG"
                  src={product.image}
                  className="h-full w-full object-scale-down bg-white object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-3 product-details">
                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                <div className="flex justify-between">
                <p className="text-lg font-medium text-gray-900">
                  {product.price}
                  </p>
                  <div className="flex gap-1 items-center">
                <p className="text-lg font-medium text-gray-900">
                    {product.rating.rate}
                </p>
                <StarIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </Link>
              <div className="p-4 absolute bottom-0 w-full">
               <button type="button" className="flex w-full justify-center rounded-md bg-emerald-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">Add to Cart <ShoppingCartIcon className="ms-2 h-6 w-6 text-white" />
               </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>}
    </>
  );
}
