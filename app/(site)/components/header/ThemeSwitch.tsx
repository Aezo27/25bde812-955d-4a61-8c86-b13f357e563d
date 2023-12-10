"use client"

import { useState, useLayoutEffect } from 'react'
import { useTheme } from 'next-themes'
import sun from '@/public/sun.png'
import moon from '@/public/moon.png'
import Image from 'next/image'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const [isChecked, setIsChecked] = useState(false);
  const { resolvedTheme } = useTheme()

  const handleCheckboxChange = (e:any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else{
      setTheme("light");
    }
    setIsChecked(!isChecked);
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useLayoutEffect(() => {
    setMounted(true);
    if (resolvedTheme === "dark") {
      setIsChecked(true);
    }
  }, [resolvedTheme])

  if (!mounted) {
    return null
  }

  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <span
          className={`slider flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${resolvedTheme === "dark" ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
            }`}
        >
          <span
            className={`flex justify-center items-center dot h-6 w-6 rounded-full bg-white duration-200 ${resolvedTheme === "dark" ? 'translate-x-[28px]' : ''
              }`}
          ><Image src={resolvedTheme === "dark" ? moon:sun} alt="dark-mode" className="h-3 w-3"/></span>
        </span>
      </label>
    </>
  )
}

export default ThemeSwitch