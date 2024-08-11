'use client'
import { acitveAlert, deAcitveAlert, deleteAlert } from '@/app/_actions/alert'
import { IAlert } from '@/app/_types/alert'
import React from 'react'
import toast from 'react-hot-toast'
import { HiOutlinePlay, HiOutlinePower, HiOutlineTrash } from 'react-icons/hi2'
import TableButton from '../../Modules/TableButton'

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
        <span onClick={handleDeAvtiveAlert}>
          <TableButton icon={<HiOutlinePower size={18} />} type='amber' />
        </span>
      )}
      {!alert.isShow && (
        <span onClick={handleActiceAlert}>
          <TableButton icon={<HiOutlinePlay size={18} />} type='green' />
        </span>
      )}
      <span onClick={handleDeleteAlert}>
        <TableButton icon={<HiOutlineTrash size={18} />} type='red' />
      </span>
    </>
  )
}

export default AlertButtons