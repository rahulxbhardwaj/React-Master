import React from 'react'

function welcome() {

  let imageSrc  = "https://images.pexels.com/photos/17867773/pexels-photo-17867773/free-photo-of-buck-and-deer-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
  return(
    <>
      <h1 className = 'bg-green-400 text-white text-center h-10 text-2xl font-bold'>Tailwind Test</h1>
      <h1 className="text-3xl font-bold underline text-center italic">
        Hello world!
      </h1>

      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-30 h-30 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src = {imageSrc} alt="" width="384" height="512"></img>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium text-white">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Rahul Bhardwaj
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Delhi,India
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default welcome;