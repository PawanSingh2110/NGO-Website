import React from 'react'

const Band = () => {
  return (
    <div className='p-5 bg-yellow-500 py-20 '>
     <div className='flex w-[80%] mx-auto gap-5 flex-col lg:flex-row'>
     <img src="https://www.amtmindia.org/wp-content/uploads/2021/10/dog-illustration.png" alt="" className=' w-[250px] xl:w-[400px]' />
      <div className='lg:w-[80%]'>
        <img src="https://www.amtmindia.org/wp-content/uploads/elementor/thumbs/amtm-india-logo-q9z98wnog2by0xwh6r0v860tqt2f5xoxi795xaozww.png" width={200} alt="" />
        <h1 className='text-white font-medium tracking-wide '>Animals Matters to Me (AMTM) is a clinical rescue facility for strays & abandoned ownerless animals, birds & reptiles in need of help. We run a shelter cum hospital in Malad, Mumbai and offer services of Adoption, Animal Shelter, Medical Treatment, Sterilisation & Animal Ambulance</h1>
        <button className='  bg-black text-white px-9 py-3 mt-5 hover:bg-slate-400 rounded-md'>KNOW MORE</button>
        </div>
     </div>
    </div>
  )
}

export default Band
