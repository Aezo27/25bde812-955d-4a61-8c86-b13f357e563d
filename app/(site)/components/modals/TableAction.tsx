"use client"
import { useState } from "react";
import { viewProduct } from "@/utils/data/api";
import Delete from "./Delete";
import View from "./View";
import Edit from "./Edit";

interface ActionProps {
  name: string,
  id: number;
}

const TableAction: React.FC<ActionProps> = ({name, id}) => {
  const [isDelete, setIsDelete] = useState(["", 0, false])

  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [""],
  });
  const view = async () => {
    setProduct(await viewProduct(id));
    setIsView(true);
  };
  const edit = async () => {
    setProduct(await viewProduct(id));
    setIsEdit(true);
  };

  return (
    <>
      <div className="flex justify-end gap-2">
        <button
          onClick={view}
          aria-label="View Product"
          title="View Product"
          className="px-1 py-1 text-gray-500 hover:text-blue-500 transition-colors duration-200"
        >
          <svg
            className="w-5"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.23 6.2463C13.3958 6.45302 13.4876 6.72159 13.4876 7.00006C13.4876 7.27853 13.3958 7.5471 13.23 7.75382C12.18 9.02509 9.78997 11.5001 6.99997 11.5001C4.20997 11.5001 1.81997 9.02509 0.769968 7.75382C0.604128 7.5471 0.512329 7.27853 0.512329 7.00006C0.512329 6.72159 0.604128 6.45302 0.769968 6.2463C1.81997 4.97503 4.20997 2.5 6.99997 2.5C9.78997 2.5 12.18 4.97503 13.23 6.2463Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={edit}
          aria-label="Edit Product"
          title="Edit Product"
          className="px-1 py-1 text-gray-500 hover:text-blue-500 transition-colors duration-200"
        >
          <svg
            className="w-5"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1222_47668)">
              <path
                d="M6.92566 13.2018L3.92566 13.4618L4.18566 10.4618L10.4256 4.26181C10.5188 4.16657 10.63 4.09089 10.7528 4.03922C10.8755 3.98755 11.0074 3.96094 11.1406 3.96094C11.2738 3.96094 11.4057 3.98755 11.5285 4.03922C11.6513 4.09089 11.7625 4.16657 11.8556 4.26181L13.1256 5.54181C13.2193 5.63478 13.2937 5.74538 13.3445 5.86724C13.3953 5.9891 13.4214 6.1198 13.4214 6.25181C13.4214 6.38382 13.3953 6.51453 13.3445 6.63639C13.2937 6.75825 13.2193 6.86885 13.1256 6.96181L6.92566 13.2018Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.841689 3.97204C0.490759 3.91098 0.490759 3.40721 0.841688 3.34616C2.11305 3.12497 3.12423 2.15661 3.40019 0.896007L3.42134 0.799378C3.49726 0.452545 3.99111 0.450386 4.07006 0.796542L4.09574 0.909152C4.38191 2.16381 5.39337 3.12399 6.6612 3.34456C7.01392 3.40592 7.01392 3.91227 6.6612 3.97363C5.39337 4.1942 4.38191 5.15438 4.09574 6.40904L4.07006 6.52165C3.99111 6.86781 3.49726 6.86565 3.42134 6.51881L3.40019 6.42219C3.12423 5.16158 2.11305 4.19322 0.841689 3.97204Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1222_47668">
                <rect width="14" height="14" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          onClick={() => {
            setIsDelete([name, id, true]);
          }}
          aria-label="Delete Product"
          title="Delete Product"
          className="px-1 py-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
        >
          <svg
            className="w-5"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1222_37750)">
              <path
                d="M1 3.5H13"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 6.50146V10.503"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 6.50146V10.503"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1222_37750">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {isDelete[2] && (
        <Delete deleteData={isDelete} setIsDelete={setIsDelete} />
      )}

      {isEdit && <Edit product={product} setIsEdit={setIsEdit} />}

      {isView && <View product={product} setIsView={setIsView} />}
      {/* {isView && <div aria-label="view-product-modal"></div>} */}
    </>
  );
}
 
export default TableAction;