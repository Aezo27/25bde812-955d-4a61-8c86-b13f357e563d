"use client";
import { useEffect, useState } from "react";
import { disableScroll, enableScroll } from "@/utils/bodyScroll";
import { editProduct } from "@/utils/data/api";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useForm } from "react-hook-form";
import ProductSchema, { ProductSchemaType } from "@/models/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Toast from "@/components/Toast";
import TextArea from "@/components/TextArea";

interface EditProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
  };
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Edit: React.FC<EditProps> = ({ product, setIsEdit }) => {
  const [isShow, setIsShow] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const closeModal = () => {
    setIsShow(false);
    setTimeout(() => {
      enableScroll();
      reset();
    }, 500);
  };

  const cancel = () => {
    closeModal();
    setTimeout(() => {
      setIsEdit(false);
    }, 500);
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ProductSchemaType>({ resolver: zodResolver(ProductSchema) });

  const toastHandler = () => {
    if (!isToast) {
      setIsToast(true);
      closeModal();
    } else {
      setIsToast(false);
      setIsEdit(false);
    }
  };

  const onSubmit = handleSubmit(async (data) => {

    const result = await editProduct(data, product.id);

    if (result) {
      toastHandler();
      console.log(result);
    }
  });

  useEffect(() => {
    setIsShow(true);
    disableScroll();

    // set value to field
    setValue('title', product?.title);
    setValue('description', product?.description);
    setValue('brand', product?.brand);
    setValue('category', product?.category);
    setValue('price', product?.price);
    setValue('stock', product?.stock);
    setValue('discountPercentage', product?.discountPercentage);
    setValue('rating', product?.rating);
  }, []);

  return (
    <>
      {isToast && (
        <Toast toastHandler={toastHandler} variant="success">
          Item has been edited (see console).
        </Toast>
      )}
      <div
        className={`fixed inset-0 z-10 w-screen overflow-y-auto ${
          isShow ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-500`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        aria-label="edit-product-modal"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl dark:bg-gray-700">
            <form onSubmit={onSubmit}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-700">
                <h3
                  className="text-xl font-semibold leading-6 text-gray-900 dark:text-white"
                  id="modal-title"
                >
                  Edit {product.title}
                </h3>
                <div className="mt-8 flex flex-col gap-4">
                  <Input
                    autofocus
                    name="title"
                    required
                    register={{ ...register("title") }}
                    error={errors.title?.message}
                    label="Product Name"
                  />
                  <TextArea
                    name="description"
                    required
                    register={{ ...register("description") }}
                    error={errors.description?.message}
                    label="Description"
                  />
                  <Input
                    name="brand"
                    required
                    register={{ ...register("brand") }}
                    error={errors.brand?.message}
                    label="Brand Name"
                  />
                  <Input
                    name="category"
                    required
                    register={{ ...register("category") }}
                    error={errors.category?.message}
                    label="Category"
                  />
                  <div className="flex gap-4">
                    <Input
                      name="price"
                      required
                      elType="number"
                      register={{ ...register("price") }}
                      error={errors.price?.message}
                      label="Price"
                    />

                    <Input
                      name="stock"
                      required
                      elType="number"
                      register={{ ...register("stock") }}
                      error={errors.stock?.message}
                      label="Stock"
                    />
                  </div>
                  <div className="flex gap-4">
                    <Input
                      name="discountPercentage"
                      elType="number"
                      register={{ ...register("discountPercentage") }}
                      error={errors.discountPercentage?.message}
                      label="Product Discount (not working?)"
                    />
                    <Input
                      name="rating"
                      elType="number"
                      register={{ ...register("rating") }}
                      error={errors.rating?.message}
                      label="Rating"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-800">
                <Button elType="submit" variant="primary">
                  Save
                </Button>
                <Button
                  elType="button"
                  variant="secondary"
                  onClick={cancel}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
