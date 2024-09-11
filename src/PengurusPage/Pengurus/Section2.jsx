import React from 'react'

const Section2 = () => {
  return (
    <div class ="mx-10 mt-36">
      <div class="my-5 text-center flex flex-col items-center justify-center">
        <h1 class="pb-2 text-2xl text-white font-bold font-spaceGrotesk border-b-2 border-b-colorGreen my-4">Pengurus</h1>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center w-72">
            <img src="" class="w-40 h-40 object-cover object-top rounded-lg mb-3" alt="" />
            <div class="flex flex-col ml-3">
              <p class ="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Nama Ketum</p>
                </div>
            </div>
            <div class="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center w-72">
              <img src="" class="w-40 h-40 object-cover object-top rounded-lg mb-3"/>
              <div class="flex flex-col ml-3">
                <p class="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Nama Sekjen</p>
                </div>
            </div>
            <div class="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center w-72">
              <img src="" class="w-40 h-40 object-cover object-top rounded-lg mb-3"/>
              <div class="flex flex-col ml-3"></div>
                <p class="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">Nama Sekretaris</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Section2
