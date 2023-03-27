<template>
  <div class="h-screen bg-[url('~/assets/bg4.png')] bg-no-repeat bg-cover">
    <nav
      class="bg-white px-2 sm:px-4 py-2.5 dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200"
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
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-blue-500"
            >Translateasyy</span
          >
        </div>
        <!-- language -->
        <div
          class="flex items-center justify-between hidden w-full md:flex md:w-auto md:order-3"
        ></div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li class="group">
              <NuxtLink
                to="/"
                class="block py-2 pl-3 pr-4 text-gray-400 md:p-0 md:dark:hover:text-black"
                >Translator</NuxtLink
              >
              <div
                class="h-0.5 mt-0.5 group-hover:scale-y-100 group-hover:bg-black group-hover:block w-[100%] transition-all duration-300"
              ></div>
            </li>
            <li class="group">
              <NuxtLink
                to="/about"
                class="block py-2 pl-3 pr-4 text-black md:p-0 font-medium group-hover:text-black transition-all duration-300"
                >About</NuxtLink
              >

              <div
                class="bg-black h-0.5 mt-0.5 group-hover:scale-y-100 group-hover:bg-black group-hover:block w-[100%] transition-all duration-300"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- about -->
    <div
      class="bg-white rounded-2xl container mx-auto translate-y-[14vh] shadow-2xl p-3"
    >
      <div class="font-inter grid grid-cols-2 gap-3">
        <div
          class="p-3 border shadow-sm border-slate-300 focus:outline-none rounded-2xl focus:ring-1"
        >
          <section class="sm:flex-row px-5">
            <article class="space-y-4">
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
                class="leading-normal max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
              >
                Welcome to our translation application! Our mission is to break
                down language barriers and make communication easier for
                everyone. 
              </p>
              <p
                class="leading-normal max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
              >
                With our app, you can quickly and easily translate
                text between multiple languages, including English, Indonesia,
                Canada, French, Germany, and Japanese.
              </p>
              <p
                class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-600"
              >
                Group 4
              </p>
            </article>
            <!-- <img class="w-1/2 mx-3 pb-40" src="~/assets/book.png" alt="book" /> -->
          </section>
        </div>
        <div
          class="p-3 border shadow-sm border-slate-300 focus:outline-none rounded-2xl focus:ring-1"
        >
          <div class="text-4xl text-black text-center font-bold">
            <h2
              class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-black"
            >
              Give us a
              <span class="text-indigo-700 dark:text-indigo-300">Feedback</span>
            </h2>
            <p
              class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
            >
              Please leave a comment bellow ^^
            </p>
            <form action="https://fabform.io/f/mb5wXp7" method="post">
              <div class="form-group mb-6">
                <input
                  name="name"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group mb-6">
                <input
                  name="email"
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>
              <div class="form-group mb-6">
                <input
                  name="message"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                  required
                />
              </div>
              <button
                class="button is-link w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>

          <div class="">
            <img
              src="~/assets/nj.gif"
              class="mr-4 sm:h-72 md:h-72 lg:h-72 xl:h-72 flex justify-center mx-40"
              alt="Translateasy logo"
            />
          </div>
        </div>
      </div>
    </div>

    <section class="pt-28 dark:bg-blue-900 dark:text-gray-100">
      <div
        class="container flex flex-col items-center justify-center mx-auto sm:p-10"
      >
        <p class="text-sm font-medium tracking-wider text-center uppercase">
          Meet Our team
        </p>
        <h1 class="text-4xl font-bold leading-none text-center sm:text-5xl">
          The talented people behind the scenes
        </h1>

        <div class="flex flex-row flex-wrap-reverse justify-center mt-8">
          <div
            class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
          >
            <img
              alt=""
              class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-white"
              src="~/assets/teams/agoy.png"
            />
            <div class="flex-1 my-4">
              <p class="text-xl font-semibold leading-snug">
                Athallah Narda Wiyoga
              </p>
              <p>5027211041</p>
            </div>
          </div>

          <div
            class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
          >
            <img
              alt=""
              class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-white"
              src="~/assets/teams/nara.png"
            />
            <div class="flex-1 my-4">
              <p class="text-xl font-semibold leading-snug">
                Brigita Naraduhita Primanti Putri
              </p>
              <p>5027211055</p>
            </div>
          </div>

          <div
            class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
          >
            <img
              alt=""
              class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-white"
              src="~/assets/teams/icha.png"
            />
            <div class="flex-1 my-4">
              <p class="text-xl font-semibold leading-snug">
                Tarisha Syira Mazaya Putri
              </p>
              <p>5027211061</p>
            </div>
          </div>

          <div
            class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
          >
            <img
              alt=""
              class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="~/assets/teams/aloy.png"
            />
            <div class="flex-1 my-4">
              <p class="text-xl font-semibold leading-snug">
                Aloysius Bataona Manulang
              </p>
              <p>5027211008</p>
            </div>
          </div>

          <div
            class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
          >
            <img
              alt=""
              class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="~/assets/teams/duljek.png"
            />
            <div class="flex-1 my-4">
              <p class="text-xl font-semibold leading-snug">Abdul Zaki</p>
              <p>5027211020</p>
            </div>
          </div>

          <div
            class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
          >
            <img
              alt=""
              class="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="~/assets/teams/keiza.png"
            />
            <div class="flex-1 my-4">
              <p class="text-xl font-semibold leading-snug">
                Fina Keiza Arismana
              </p>
              <p>5027211028</p>
            </div>
          </div>
        </div>
        <h2 class="text-center text-white">©️Translateasyy</h2>
      </div>
    </section>
  </div>
</template>
