'use client'
import { acitveAlert, deAcitveAlert, deleteAlert } from '@/app/_actions/alert'
import { IAlert } from '@/app/_types/alert'
import React from 'react'
import toast from 'react-hot-toast'
import { HiOutlinePlay, HiOutlinePower, HiOutlineTrash } from 'react-icons/hi2'

const AlertButtons = ({ alert }: { alert: IAlert }) => {

  const handleDeAvtiveAlert = async () => {
    const result = await deAcitveAlert({ alertID: String(alert._id) });
    if (result) return toast.success(result.message);
  }
  const handleActiceAlert = async () => {
    const result = await acitveAlert({ alertID: String(alert._id) });
    if (result) return toast.success(result.message);
  }

  const handleDeleteAlert = async () => {
    const result = await deleteAlert({ alertID: String(alert._id) });
    if (result) return toast.success(result.message);
  }

  return (
    <>
      {alert.isShow && (
        <span onClick={handleDeAvtiveAlert} className='p-1 bg-amber-200 rounded-full cursor-pointer'>
          <HiOutlinePower size={20} className='text-amber-500' />
        </span>
      )}
      {!alert.isShow && (
        <span onClick={handleActiceAlert} className='p-1 bg-green-200 rounded-full cursor-pointer'>
          <HiOutlinePlay size={20} className='text-green-500' />
        </span>
      )}
      <span onClick={handleDeleteAlert} className='p-1 bg-rose-200 rounded-full cursor-pointer'>
        <HiOutlineTrash size={20} className='text-rose-500' />
      </span>
    </>
  )
}

export default AlertButtons