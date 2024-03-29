<div>
  <div class="hidden bg-black md:block bg-opacity-90">
    <x-container>
      {{ Breadcrumbs::render('post', $post) }}
    </x-container>
  </div>

  <article>

    <x-container class='pt-20 md:pt-0'>
      <div class="prose max-w-none">
        @foreach ($post->blocks as $block)
          @switch($block->type)
            @case('markdown')
              @markdom($block->data->content)
            @break

            @case('figure')
              <x-figure
                :image="$block->data->image"
                :alt="$block->data->alt"
                :caption="$block->data->caption"
              />
            @break

            @default
              @dump($block)
          @endswitch
        @endforeach
      </div>

      @if (Auth::check())
        <div class="pt-4 mt-4 border-t">
          <a class="inline-flex items-center text-sm text-primary-500 hover:text-primary-600" href="{{ $post->editUrl }}">
            <x-heroicon-s-pencil class="inline-block w-3 h-3 mr-2" />
            Edit post
          </a>
        </div>
      @endif
    </x-container>
  </article>
</div>
