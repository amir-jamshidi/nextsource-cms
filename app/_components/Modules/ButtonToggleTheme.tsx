'use client'
import { useTheme } from "@/app/_context/ThemeContext"
import { HiOutlineBell, HiOutlineSun } from "react-icons/hi2"

const ButtonToggleTheme = () => {

  const context = useTheme();
  const { toggleTheme } = context;

  return (
    <>
      <span onClick={toggleTheme} className='bg-primary-0 rounded-full p-1 border border-primary-50'>
        <HiOutlineSun className='text-primary-700' size={25} />
      </span>
    </>
  )
}

export default ButtonToggleTheme