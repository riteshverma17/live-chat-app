import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex mt-2'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-white'>Male</span>
            <input type='checkbox' className='checkbox border-black'/>
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text text-white'>Female</span>
            <input type='checkbox' className='checkbox border-black'/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox



//   STARTER CODE
// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex mt-2'>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='label-text text-white'>Male</span>
//             <input type='checkbox' className='checkbox border-black'/>
//         </label>
//       </div>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='label-text text-white'>Female</span>
//             <input type='checkbox' className='checkbox border-black'/>
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckBox
