<template>
  <div class="h-screen bg-white">
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-500">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <!-- logo -->
        <div class="flex items-center">
          <img src="~/assets/logo.png" class="mr-4 sm:h-11" alt="Translateasy logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Translateasyy</span>
        </div>
        <!-- language -->
        <div class="flex md:order-2">
          <select
            id="countries"
            class="bg-pink-50 border border-pink-100  text-pink-100 text-sm rounded-lg focus:ring-pink-200 focus:border-pink-100 block w-full p-2.5 dark:bg-pink-600 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 focus:ring-2 hover-bg-pink-100 dark:hover:bg-pink-700"
          >
            <option selected>Indonesia</option>
            <option value="US">English</option>
          </select>
        </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-gray-400 md:p-0 md:dark:hover:text-white 
            ">Translator</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="block py-2 pl-3 pr-4 text-white md:p-0">About</NuxtLink>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  
    <div class="max-w-4xl mx-auto container translate-y-[14vh]">
      <section id="hero"
            class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
            <article class="sm:w-1/2">
                <h2
                    class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-black">
                    Translateasyy <span class="text-indigo-700 dark:text-indigo-300">Makes it easier</span> For communicate and translate
                </h2>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                  Communicate confidently and accurately in multiple languages
                </p>
                <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                    Group 4
                </p>
            </article>
            <img class="w-1/2" src="~/assets/book.jpg" alt="book">
        </section>
        <hr class="mx-auto bg-black dark:bg-white w-1/2">
  
  <section id="rockets"
    class="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
    <h2 class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-black">
        Our Teams👋
    </h2>
    <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <li
            class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-slate-400 py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="Explorer" class="w-1/2 mb-6">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Athallah Narda Wiyoga</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-gray-800">50272110--</p>
        </li>
        <li
            class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="Adventurer" class="w-1/2 mb-6">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Abdul Zaki</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">5027211020</p>
        </li>
        <li
            class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-slate-400 py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="Infinity" class="w-1/2 mb-6">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Aloysius Bataona M</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-gray-800">5027211008</p>
        </li>
    </ul>
    <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        
        <li
            class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="Adventurer" class="w-1/2 mb-6">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Fina Keiza Arismana</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">5027211028</p>
        </li>
        <li
            class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-slate-400 py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="Explorer" class="w-1/2 mb-6">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Brigita Naraduhita P.</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-gray-800">5027211055</p>
        </li>
        <li
            class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-gray-800 py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="Infinity" class="w-1/2 mb-6">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Tarisha Syira M.P</h3>
            <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">5027211061</p>
        </li>
    </ul>
  </section>
    <!-- </div> -->
  </div>
  </div>
  </template>

