import React from 'react'

const Badge = ({status}) => {
  return <span className={`flex text-[11px] items-center justify-center py-1 font-[500] ${(status === "pending" || status === "cancelled") && "bg-primary"} ${(status === "confirm" || status === "delivered") && "bg-green-600"} ${status === "failed" && "bg-red-700"} !text-white font-[500] rounded-full capitalize`}>{status}</span>;
}

export default Badge