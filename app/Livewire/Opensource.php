<?php

namespace App\Livewire;

use App\Models\Post;
use Livewire\Component;
use Spatie\SchemaOrg\Schema;

class Opensource extends Component
{
    public function render()
    {
        seo()
            ->title($title = config('app.name'))
            ->description($description = 'Collaborate with our passionate community to develop and improve open-source projects. Share your skills, learn from others, and make a lasting impact on the developer ecosystem.')
            ->canonical($url = url('/opensource'))
            ->addSchema(
                Schema::webPage()
                    ->name($title)
                    ->description($description)
                    ->url($url)
                    ->author(Schema::organization()->name($title))
            );

        $posts = \App\Models\OpenSource::all();

        return view('livewire.opensource', compact('posts'));
    }
}
