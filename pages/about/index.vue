<template>
    <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-500">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <!-- logo -->
        <div class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Translateasy logo">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Translateasy</span>
        </div>
        <!-- profile -->
      <div class="flex md:order-2">
          <button>
            <img src="~/assets/profile.png" class=" sm:h-18" alt="Profile logo">
          </button>
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
    </template>