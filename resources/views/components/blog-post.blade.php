@props([
    'post'
])
{{--@php(dd($post->content))--}}
<div class="group space-y-6">
  @if ($post->image)
    <a href="{{ $post->url }}">
      <img
        src="{{ $post->image->url }}"
        alt="{{ $post->image->alt ?? $post->title }}"
        loading="lazy"
        width="1000"
        height="667"
        class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />
    </a>
  @endif
  <a href="{{ $post->url }}">
    <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
      {{ $post->title }}
    </h3>
  </a>
  <div class="flex gap-6 items-center">
    <a href="#"
       class="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800">
      <img class="w-8 h-8 object-cover rounded-full" src="images/man.jpg" alt="">
      <span
        class="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">{{$post->user->name}}</span>
    </a>
    <span class="w-max block font-light text-gray-500 sm:mt-0">{{date('M d, Y', strtotime($post->published_at))}}</span>
    <div class="flex gap-2 items-center text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-5 h-5 text-gray-400 dark:text-gray-600">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>
</div>
