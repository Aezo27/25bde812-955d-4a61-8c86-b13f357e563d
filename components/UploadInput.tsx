"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface UploadProps {
  name: string,
  required?: boolean,
  readonly?: boolean,
  disable?: boolean,
  onChange?: () => void,
  label?: string,
  error?: any,
  register?: any,
  multiple?: boolean,
}

const UploadInput: React.FC<UploadProps> = ({ name, required, readonly, disable, onChange, label, error, register, multiple }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<Array<string>>([]);
  const [isError, isSetError] = useState("")

  function handleChange(e: any) {
    // console.log(e.target.files);
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
    inputRef.current!.value = "";
  }

  // convert file size
  const formatBytes = (bytes: number, decimals = 2) => {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  return (
    <div className="w-full">
      {label && (
        <h3 className="">
          {label}
          {required && <span className="text-red-500">*</span>}
        </h3>
      )}
      <label
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center mt-2 w-full h-64 border-2 ${error
          ? "border-red-500 dark:border-red-400"
          : "border-gray-300 dark:border-gray-600"
          } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100  dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG, JPG or WebP (MAX. 800x400px)
          </p>
        </div>
        <input
          ref={inputRef}
          id="dropzone-file"
          type="file"
          name={multiple ? name + "[]" : name}
          {...register}
          className="hidden"
          multiple={true}
          onChange={handleChange}
          accept="image/*"
        />
      </label>
      {error && (
        <div className="mt-1 text-sm text-red-500 dark:text-red-400">
          {error}
        </div>
      )}
      <div className="flex items-center gap-2 mt-4">
        {files.map((file: any, idx: any) => (
          <div key={idx} className="relative h-40 w-40 flex flex-col items-center overflow-hidden text-center bg-gray-100 dark:bg-gray-500 border rounded">
            <button onClick={() => removeFile(file.name, idx)} className="absolute top-0 right-0 z-50 p-1 bg-white dark:bg-gray-400 rounded-bl focus:outline-none" type="button">
              <svg className="w-4 h-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>

            <Image className="inset-0 z-0 object-cover w-full h-full border-4 border-white dark:border-gray-400 preview" src={URL.createObjectURL(file)} alt={file.name} width={100} height={100} />

            <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-80">
              <span className="w-full font-bold text-white dark:text-black truncate">{file.name}</span>
              <span className="text-xs text-white dark:text-black">{formatBytes(file.size)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadInput;
