// File: kubejs/server_scripts/gears/gears.js

ServerEvents.recipes(event => {
    // List of recipe IDs to remove
    const recipeIds = [
        'alltheores:crafting/diamond/gear',
        'alltheores:crafting/aluminum/gear',
        'alltheores:crafting/lead/gear',
        'alltheores:crafting/nickel/gear',
        'alltheores:crafting/osmium/gear',
        'alltheores:crafting/platinum/gear',
        'alltheores:crafting/silver/gear',
        'alltheores:crafting/silver/gear',
        'alltheores:crafting/tin/gear',
        'alltheores:crafting/uranium/gear',
        'alltheores:crafting/zinc/gear',
        'alltheores:crafting/iridium/gear',
        'alltheores:crafting/steel/gear',
        'alltheores:crafting/invar/gear',
        'alltheores:crafting/electrum/gear',
        'alltheores:crafting/bronze/gear',
        'alltheores:crafting/brass/gear',
        'alltheores:crafting/enderium/gear',
        'alltheores:crafting/lumium/gear',
        'alltheores:crafting/signalum/gear',
        'alltheores:crafting/constantan/gear',
        'alltheores:crafting/copper/gear',
        'enderio:iron_gear',
        'alltheores:crafting/iron/gear',
        'industrialforegoing:iron_gear',
        'alltheores:crafting/gold/gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:diamond_gear',
        'alltheores:crafting/netherite/gear'
    ];

    // Loop through each ID and remove the recipe
    recipeIds.forEach(id => {
        event.remove({ id: id });
        console.log(`Removed recipe: ${id}`);
    });
});
