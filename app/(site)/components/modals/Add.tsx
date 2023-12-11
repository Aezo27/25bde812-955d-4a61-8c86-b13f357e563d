"use client"
import { useEffect, useState } from 'react';
import { disableScroll, enableScroll } from "@/utils/bodyScroll";
import { addProduct } from "@/utils/data/api";
import Button from '@/components/Button';
import Input from '@/components/Input';
import { z } from "zod";

// for zod validation
const ProductSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Product name at least 3 character"
  }).max(100, {
    message: "Product name maximal 100 character"
  }),
})

const Add = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const closeModal = () => {
    setIsShow(false);
    setTimeout(() => {
      enableScroll();
      setIsOpen(false);
    }, 500);
  }

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsShow(true);
      disableScroll();
    }, 50);
  }

  const addAction = async (formData: FormData) => {
    const newProduct = {
      name: formData.get("name"),

    }

    // form validation with zod
    const result = ProductSchema.safeParse(newProduct);
    if (!result.success) {
      return
    }

    // const server = await addProduct();
    // console.log(server);
    closeModal();
  }

  // useEffect(() => {
  //   setIsShow(true);
  //   disableScroll();
  //   return () => {
  //   };
  // }, [])

  return (
    <>
      <Button
        variant="primary"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-1">Add product</span>
      </Button>

      {isOpen &&
        <div className={`fixed inset-0 z-10 w-screen overflow-y-auto ${isShow ? "opacity-100" : "opacity-0"} transition-all duration-500`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl dark:bg-gray-700">
              <form action={addAction}>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-700">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 dark:text-white" id="modal-title">Add Product</h3>
                  <div className="mt-8">
                    <Input name="name" required label="Product Name" />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-800">
                  <Button elType="submit" variant="primary">Save</Button>
                  <Button elType="button" variant="secondary" onClick={closeModal}>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </>

  );
}

export default Add;