ServerEvents.recipes(event => {
    const recipeIds = [
        'modern_industrialization:materials/bronze_dust',
        'oritech:pulverizer/compat/mekanism/dust/bronze',
        'oritech:grinder/compat/mekanism/dust/bronze',
        'allthecompatibility:oritech/foundry/bronze',
        'jei:/alltheores/alloysmelter/bronze/ingot',
        'jei:/immersiveengineering/alloysmelter/electrum',
        'jei:/alltheores/alloysmelter/electrum/ingot',
        'jei:/alltheores/alloysmelter/constantan/ingot',
        'jei:/immersiveengineering/alloysmelter/invar',
        'modern_industrialization:materials/steel/cutting_machine/main',
        'modern_industrialization:materials/steel/cutting_machine/double_ingot',
        'modern_industrialization:materials/chemical_reactor/water',

    ];
    recipeIds.forEach(id => {
        event.remove({ id: id });
        console.log(`Removed recipe: ${id}`);
    });
});