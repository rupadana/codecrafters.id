<header>
  <input type="checkbox" name="hbr" id="hbr" class="hbr peer" hidden aria-hidden="true">
  <nav
    class="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
    <div class="xl:container m-auto px-6 md:px-12">
      <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
        <div class="w-full flex justify-between lg:w-auto">
          <a href="{{url('/')}}" aria-label="logo" class="flex space-x-2 items-center">
            <div aria-hidden="true" class="flex space-x-1">
              <img src="/logo.svg" class='w-8' alt="logo codecrafters">
            </div>
            <span class="text-base font-bold text-gray-600 dark:text-white">{{ config('app.name') }}</span>
          </a>
          <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
            <div aria-hidden="true"
                 class="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
            <div aria-hidden="true"
                 class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
          </label>
        </div>
        <div
          class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
          <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
            <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
              <li>
                <a href="{{url('/')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="{{url('/#services')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="{{url('/#teams')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                  <span>Teams</span>
                </a>
              </li>
              <li>
                <a href="{{url('/opensource')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                  <span>Open Source</span>
                </a>
              </li>

            </ul>
          </div>

          <div
            class="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
            <a href="mailto:teams@codecrafters.id"
               class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span class="relative text-sm font-semibold text-white dark:text-gray-900">Join our Teams</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
