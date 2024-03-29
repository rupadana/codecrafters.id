<!DOCTYPE html>
<html lang="en">

<head>

  {{ seo()->render() }}

  @stack('head')

  @livewireStyles
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
<x-sections.header />


{{ $slot }}

<x-sections.footer />

@livewireScriptConfig
@stack('scripts')
</body>

</html>
