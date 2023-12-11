"use client"
import { useEffect, useState } from 'react';
import { disableScroll, enableScroll } from "@/utils/bodyScroll";
import { deleteProduct } from "@/utils/data/api";
import Button from '@/components/Button';

interface DeleteProps {
  deleteData: (string | number | boolean)[],
  setIsDelete: React.Dispatch<React.SetStateAction<(string | number | boolean)[]>>, 
}

const Delete: React.FC<DeleteProps> = ({ deleteData, setIsDelete }) => {

  const [isShow, setIsShow] = useState(false)

  const closeModal = () => {
    setIsShow(false);
    setTimeout(() => {  
      enableScroll();
      setIsDelete(["", 0, false])
    }, 500);
  }

  const deleteAction = async (id:number) => {
    const result = await deleteProduct(id);
    console.log(result);
    closeModal();
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
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:bg-gray-700">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-700">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-xl font-semibold leading-6 text-gray-900 dark:text-white" id="modal-title">Delete {deleteData[0]}</h3>
                <div className="mt-2" style={{ textWrap: "wrap" }}>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Are you sure you want to delete this product? All of your data will be permanently removed. This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-800">
          <Button variant="danger" onClick={() => deleteAction(Number(deleteData[1]))}>Delete</Button>
            <Button variant="secondary" onClick={closeModal}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Delete;