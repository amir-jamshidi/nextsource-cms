'use client'
import { useTheme } from "@/app/_context/ThemeContext"
import { HiMoon, HiOutlineBell, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2"

const ButtonToggleTheme = () => {

  const context = useTheme();
  const { toggleTheme } = context;

  return (
    <>
      <span onClick={toggleTheme} className='bg-primary-0 rounded-full p-1 border border-primary-50 cursor-pointer dark:bg-primary-800 dark:border-gray-800'>
        <HiOutlineSun className='hidden dark:inline-block text-primary-200' size={25} />
        <HiOutlineMoon className='inline-block dark:hidden text-primary-500' size={25} />
      </span>
    </>
  )
}

export default ButtonToggleTheme