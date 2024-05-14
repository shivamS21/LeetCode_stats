import React from 'react'

 const DifficultyCard = ({ diffLevel, solved, total, color}) => {
   return (
     <div className='flex flex-col gap-1 bg-gray-300 p-2 rounded'>
         <span className={`text-${color}`}>{diffLevel}</span>
         <div>
             {solved} / {total}
         </div>
     </div>
   )
 }

 export default DifficultyCard