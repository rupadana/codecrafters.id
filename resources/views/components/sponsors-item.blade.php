@props([
    'image',
    'alt'
])
<div
        class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
>
    <img
            src="{{$image}}"
            class="contrast-100 transition w-16 "
            loading="lazy"
            alt="{{$alt}}"
  />
</div>
