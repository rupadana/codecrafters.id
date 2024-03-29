<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OpenSourceResource\Pages;
use App\Filament\Resources\OpenSourceResource\RelationManagers;
use App\Models\OpenSource;
use Awcodes\Curator\Components\Forms\CuratorPicker;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OpenSourceResource extends Resource
{
    protected static ?string $model = OpenSource::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    /**
     * The resource navigation group.
     */
    protected static ?string $navigationGroup = 'Collections';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('url')
                    ->maxLength(255)
                    ->label('Project URL')
                    ->url()
                    ->required(),
                Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
                CuratorPicker::make('image_id')
                    ->label('Image')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('url')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('image_id')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOpenSources::route('/'),
            'create' => Pages\CreateOpenSource::route('/create'),
            'edit' => Pages\EditOpenSource::route('/{record}/edit'),
        ];
    }
}
