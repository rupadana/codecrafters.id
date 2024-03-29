<div>
  <div class="py-16">
    <div class="mb-12 space-y-2 text-center">
      <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Open Source Packages</h2>
    </div>
    <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="grid gap-12 md:gap-6 md:grid-cols-3 lg:gap-12">
        @foreach($posts as $post)
          <x-opensource-post :post='$post' />
        @endforeach
      </div>
    </div>
  </div>
</div>
