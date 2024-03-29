<footer class="w-full bg-gray-100 dark:bg-gray-900 py-16">
  <div class="md:px-12 lg:px-28">
    <div class="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
      <img src="/logo.svg" alt="logo codecrafters" class="m-auto w-32" />
      <ul
        role="list"
        class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
      >
        <li role="listitem"><a href="{{url('/')}}" class="hover:text-primary">Home</a></li>
        <li role="listitem"><a href="{{url('/#services')}}" class="hover:text-primary">Services</a></li>
        <li role="listitem"><a href="{{url('/#teams')}}" class="hover:text-primary">Teams</a></li>
        <li role="listitem"><a href="{{url('/opensource')}}" class="hover:text-primary">Open Source</a></li>
        <li role="listitem"><a href="https://monitoring.codecrafters.id/status/codecrafters" class="hover:text-primary">Monitoring</a></li>
      </ul>
      <div class="m-auto flex w-max items-center justify-between space-x-4">
        <a href="mailto:teams@codecrafters.id" aria-label="send mail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            ></path>
          </svg>
        </a>
      </div>

      <div class="text-center">
        <span class="text-sm tracking-wide"
        >
          &copy; {{ date('Y') }} {{ config('app.name') }}
      </div>
    </div>
  </div>
</footer>

