<template>
  <div class="h-screen bg-[url('~/assets/bg4.png')] bg-no-repeat bg-cover">
    <nav
      class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-500"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <!-- logo -->
        <div class="flex items-center">
          <img
            src="~/assets/logo.png"
            class="mr-4 sm:h-11"
            alt="Translateasy logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Translateasyy</span
          >
        </div>
        <!-- language -->
        <div class="flex md:order-2">
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <NuxtLink
                to="/"
                class="block py-2 pl-3 pr-4 text-gray-400 md:p-0 md:dark:hover:text-white"
                >Translator</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="block py-2 pl-3 pr-4 text-white md:p-0"
                >About</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- about -->
    <div
      class="bg-white rounded-2xl container mx-auto translate-y-[14vh] shadow-2xl p-3"
    >
      <div class=" font-inter grid grid-cols-2 gap-3">
        <div
          class="p-3 border shadow-sm border-slate-300 focus:outline-none rounded-2xl focus:ring-1"
        >
          <section
            class="flex flex-col-reverse justify-center sm:flex-row px-5 items-center"
          >
            <article class="sm:w-1/2">
              <h2
                class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-black"
              >
                Translateasyy
                <span class="text-indigo-700 dark:text-indigo-300"
                  >Makes it easier</span
                >
                For communicate and translate
              </h2>
              <p
                class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
              >
                Communicate confidently and accurately in multiple languages
              </p>
              <p
                class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-600"
              >
                Group 4
              </p>
            </article>
            <img class="w-1/2 mx-3 pb-40" src="~/assets/book.png" alt="book" />
          </section>
        </div>
        <div
          class="p-3 border shadow-sm border-slate-300 focus:outline-none rounded-2xl focus:ring-1"
        >
        <div class="text-4xl text-black text-center font-bold ">
          Meet Our Team
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 pb-10">
          <div
            class="flex flex-col bg-slate-300 rounded-lg py-8 px-6 space-y-4 lg:space-y-6"
          >
            <div class="flex justify-center">
              <img
                src="/images/about/bg-circle-ican.png"
                class="w-32 lg:w-40"
                alt="Aloysius Bataona M"
              />
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-center text-slate-900">
                Aloysius Bataona M.
              </h4>
              <div class="text-sm text-center text-darkgray">5027211008</div>
            </div>
          </div>

          <div
            class="flex flex-col bg-slate-300 rounded-lg py-8 px-6 space-y-4 lg:space-y-6"
          >
            <div class="flex justify-center">
              <img
                src="/images/about/bg-circle-iyan.png"
                class="w-32 lg:w-40"
                alt="Abdul Zaki"
              />
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-center text-slate-900">
                Abdul Zaki
              </h4>
              <div class="text-sm text-center text-darkgray">5027211020</div>
            </div>
          </div>
          
          <div
            class="flex flex-col bg-slate-300 rounded-lg py-8 px-6 space-y-4 lg:space-y-6"
          >
            <div class="flex justify-center">
              <img
                src="/images/about/bg-circle-mada.png"
                class="w-32 lg:w-40"
                alt="Fina Keiza Arismana"
              />
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-center text-slate-900">
                Fina Keiza Arismana
              </h4>
              <div class="text-sm text-center text-darkgray">5027211028</div>
            </div>
          </div>
          <div
            class="flex flex-col bg-slate-300 rounded-lg py-8 px-6 space-y-4 lg:space-y-6"
          >
            <div class="flex justify-center">
              <img
              src="/images/about/bg-circle-fahrizal.png"
                class="w-32 lg:w-40"
                alt="Athallah Narda Wiyoga"
              />
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-center text-slate-900">
                Athallah Narda Wiyoga
              </h4>
              <div class="text-sm text-center text-darkgray">5027211041</div>
            </div>
          </div>
          <div
            class="flex flex-col bg-slate-300 rounded-lg py-8 px-6 space-y-4 lg:space-y-6"
          >
            <div class="flex justify-center">
              <img
                src="/images/about/bg-circle-fahrizal.png"
                class="w-32 lg:w-40"
                alt="Brigita Naraduhita P. P."
              />
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-center text-slate-900">
                Brigita Naraduhita P. P.
              </h4>
              <div class="text-sm text-center text-darkgray">5027211055</div>
            </div>
          </div>
          <div
            class="flex flex-col bg-slate-300 rounded-lg py-8 px-6 space-y-4 lg:space-y-6"
          >
            <div class="flex justify-center">
              <img
                src="/images/about/bg-circle-nungky.png"
                class="w-32 lg:w-40"
                alt="Tarisha Syira Mazaya"
              />
            </div>
            <div class="space-y-2">
              <h4 class="text-lg font-semibold text-center text-slate-900">
                Tarisha Syira M. P.
              </h4>
              <div class="text-sm text-center text-darkgray">5027211061</div>
            </div>
          </div>
        </div>

        </div>
    </div>
      
    </div>
    <h2 class="pt-28 text-center">©️Translateasyy</h2>
  </div>
</template>
