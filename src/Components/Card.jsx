import React from 'react'
 import DifficultyCard from './DifficultyCard'

 const Card = ({ userdata, username }) => {
   return (
     <div className='bg-gray-400 w-[550px] h-[500px] flex flex-col gap-5 justify-center items-center rounded-lg'>
         <div className='flex justify-center items-center text-[30px]'>
             {username}
         </div>
         <div className='flex gap-6'>
             <div className='flex flex-col pr-2 items-center justify-center gap-2'>
                 <div className='flex'>
                     <span className='text-[50px] font-semibold leading-[32px]'>{userdata.totalSolved}</span>
                     <span className='flex items-end'>/{userdata.totalQuestions}</span>
                 </div>
                 <span>Solved</span>
             </div>
             <div className='flex flex-col gap-2'>
                 <DifficultyCard diffLevel={'Easy'} solved={userdata.easySolved} total={userdata.totalEasy} color={'green-200'}/>
                 <DifficultyCard diffLevel={'Medium'} solved={userdata.mediumSolved} total={userdata.totalMedium} color={'orange-200'}/>
                 <DifficultyCard diffLevel={'Hard'} solved={userdata.hardSolved} total={userdata.totalHard} color={'red-200'}/>
             </div>
         </div>
     </div>
   )
 }

 export default Card