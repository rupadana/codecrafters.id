<?php

namespace App\Filament\Resources\OpenSourceResource\Pages;

use App\Filament\Resources\OpenSourceResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditOpenSource extends EditRecord
{
    protected static string $resource = OpenSourceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
