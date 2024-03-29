<?php

namespace App\Models;

use Awcodes\Curator\Models\Media;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenSource extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'url',
        'image_id',
    ];


    /**
     * Get the featured image for the post.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function image()
    {
        return $this->belongsTo(Media::class);
    }
}
