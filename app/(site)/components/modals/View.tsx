"use client"
import { useEffect, useState } from 'react';
import { disableScroll, enableScroll } from "@/utils/bodyScroll";
import { deleteProduct } from "@/utils/data/api";
import Image from 'next/image';

interface ViewProps {
  product: {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<string>
  },
  setIsView: React.Dispatch<React.SetStateAction<boolean>>, 
}

const View: React.FC<ViewProps> = ({ product, setIsView }) => {

  const [isShow, setIsShow] = useState(false)

  const closeModal = () => {
    setIsShow(false);
    setTimeout(() => {  
      enableScroll();
      setIsView(false)
    }, 500);
  }
  
  useEffect(() => {
    setIsShow(true);
    disableScroll();
    return () => {
    };
  }, [])

  return ( 
    <div className={`fixed inset-0 z-10 w-screen overflow-y-auto ${isShow? "opacity-100":"opacity-0"} transition-all duration-500`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div onClick={closeModal} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-700">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-xl font-semibold leading-6 text-gray-900 dark:text-white" id="modal-title">Product Detail</h3>
              <div className="mt-2" style={{textWrap: "wrap"}}>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Name</p>
                    <p className="text-base">: {product.title}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Description</p>
                    <p className="text-base">: {product.description}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Brand</p>
                    <p className="text-base">: {product.brand}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Crand</p>
                    <p className="text-base capitalize">: {product.category}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Price</p>
                    <p className="text-base">: ${product.price}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Discount</p>
                    <p className="text-base">: {product.discountPercentage}%</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Rating</p>
                    <p className="text-base">: {product.rating}</p>
                  </div>
                  <div className="flex flex-row">
                    <p className="text-base font-medium w-[30%] shrink-0">Stock</p>
                    <p className="text-base">: {product.stock}</p>
                  </div>
                  <div className="flex items-stretch gap-3">
                    {product.images.map((img: string, i) => (
                      i < 4 &&
                      <div key={i} className="w-1/2">
                          <Image className="object-cover h-full w-full" src={img} width="100" height="100" alt={product.title}/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button onClick={closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default View;