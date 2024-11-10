import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ModalContext } from "../../context/ModalContext";
import Loader from "../Loader/Loader";



export default function SingleProduct() {
  const { open, setOpen, singleProducts,setSingleProducts } = useContext(ModalContext);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
      />

      <div className="fixed mt-16 inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => {setOpen(false)}}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              {singleProducts == null ? (
                <Loader />
              ) : (
                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 min-h-[350px] aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img
                        alt="product"
                      src={singleProducts.image}

                  className="h-full w-full object-scale-down bg-white object-center group-hover:opacity-75"
                        
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7 h-full flex items-center">
                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {singleProducts.title}
                      </h2>
                      <h5 className="text-base my-2 font-normal text-gray-900 sm:pr-12">
                      {singleProducts.description}
                      </h5>

                      <p className="text-2xl text-gray-900">
                      Price  {singleProducts.price}
                      </p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <div className="flex end-full items-center">
                          <div>
                            <h3>{singleProducts.rating.rate}</h3>
                          </div>
                          <div>
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                          </div>
                        </div>
                      </div>

                      <div className="w-full">
                        <button
                          type="button"
                          className="flex w-full mt-5 justify-center rounded-md bg-emerald-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                        >
                          Add to Cart{" "}
                          <ShoppingCartIcon className="ms-2 h-6 w-6 text-white" />
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
