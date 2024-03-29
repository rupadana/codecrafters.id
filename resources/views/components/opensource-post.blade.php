@props([
    'post'
])
{{--@php(dd($post->content))--}}
<div class="group space-y-6">
  @if ($post->image)
    <a href="{{ $post->url }}">
      <img
        src="{{ $post->image->url }}"
        alt="{{ $post->image->alt ?? $post->name }}"
        loading="lazy"
        width="1000"
        height="667"
        class="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
      />
    </a>
  @endif

  <h3 class="text-3xl font-semibold text-gray-800 dark:text-white">
    <a href="{{ $post->url }}">
      {{ $post->name }}
    </a>
  </h3>
  <p class="text-gray-600 dark:text-gray-300">
    Finding the right open source project for your first contribution can feel daunting. It took me years to find a
    repository that fit my skills and interests.
  </p>
</div>
