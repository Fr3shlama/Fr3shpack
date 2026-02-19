// Fr3shlama (TM) | File: kubejs/server_scripts/tweaks/items/banned_items.js
// Description: Disable crafting and usage of banned items, plus remove specific recipes.

const recipeIds = [
  'modern_industrialization:materials/bronze_dust',
// 'oritech:pulverizer/compat/mekanism/dust/bronze',
// 'oritech:grinder/compat/mekanism/dust/bronze',
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

const bannedItems = [
  // Extended Industrialization Nano Quantum Armor
  'extended_industrialization:nano_quantum_helmet',
  'extended_industrialization:nano_quantum_chestplate',
  'extended_industrialization:nano_quantum_leggings',
  'extended_industrialization:nano_quantum_boots',

  // Modern Industrialization Quantum Armor
  'modern_industrialization:quantum_helmet',
  'modern_industrialization:quantum_chestplate',
  'modern_industrialization:quantum_leggings',
  'modern_industrialization:quantum_boots',
  'modern_industrialization:quantum_sword',

  // Avaritia Singularities
  'avaritia:copper_singularity',
  'avaritia:iron_singularity',
  'avaritia:gold_singularity',
  'avaritia:lapis_singularity',
  'avaritia:redstone_singularity',
  'avaritia:quartz_singularity',
  'avaritia:diamond_singularity',
  'avaritia:emerald_singularity',
  'avaritia:amethyst_singularity',
  'avaritia:netherite_singularity',
  'avaritia:infinity_singularity',

  // Avaritia Infinity Chest
  'avaritia:infinity_chest',

  //Nukes
  // 'oritech:nuke',
  // 'oritech:low_yield_nuke',
   
  // no infinity energy >:(
  'createaddition:creative_energy',
  'ironfurnaces:augment_generator',
  'mekanism_extras:infinite_induction_cell',
];

ServerEvents.recipes(event => {
  recipeIds.forEach(id => {
    event.remove({ id: id });
    console.log(`Removed recipe: ${id}`);
  });

  bannedItems.forEach(id => {
    event.remove({ output: id });
    event.remove({ input: id });
  });
});

