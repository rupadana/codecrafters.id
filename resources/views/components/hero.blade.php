{{-- @props([
  'title' => null,
  'afterTitle' => null,
])

<div {{ $attributes->merge(['class' => 'py-16 text-white bg-primary-500 mb-8']) }}>
  <x-container>
    <h1 class="text-4xl">{{ $title ?? $slot }}</h1>

    @if ($afterTitle)
      <div class="mt-4">
        {{ $afterTitle }}
      </div>
    @endif
  </x-container>
</div> --}}


<div class="relative pt-40 pb-20 lg:pt-44">
  <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
    <h1
      class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
      Crafting Innovation <br class="lg:block hidden"> <span
        class="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">Through Code</span>.</h1>
    <div class="lg:flex">
      <div
        class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
        <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
          Welcome to CodeCrafters Community, where every line of code we write becomes a work of art that transforms the digital world.
        </p>
        <span class="block font-semibold text-gray-500 dark:text-gray-400">Join to our Community</span>
        <div class="grid grid-cols-2 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
          <a aria-label="add to slack" href="https://discord.gg/jQBZjWhfxU"
             class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
            <div class="flex justify-center space-x-4">
              <img class="w-6 h-6" src="images/icons/discord.svg" alt="discord logo" loading="lazy" width="128"
                   height="128">
              <span class="hidden font-medium md:block dark:text-white">Discord</span>
            </div>
          </a>
          <a aria-label="add to chat" href="https://github.com/CraftersCode"
             class="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
            <div class="flex justify-center space-x-4">
              <img class="w-6 h-6" src="images/icons/github.svg" alt="github logo" loading="lazy" width="128"
                   height="128">
              <span class="hidden font-medium md:block dark:text-white">GitHub</span>
            </div>
          </a>
        </div>
      </div>
      <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
        <div class="relative w-full">
          <div aria-hidden="true"
               class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl">
          </div>
          <img src="images/globalization-cuate.svg" class="relative w-full" alt="wath illustration"
               loading="lazy" width="320" height="280">
        </div>
      </div>
    </div>
  </div>
</div>
