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

  // Stack upgrades
  'sophisticatedbackpacks:stack_upgrade_omega_tier',
  'sophisticatedstorage:stack_upgrade_omega_tier',

  //nukes
  'oritech:nuke',
  'oritech:low_yield_nuke',
  'industrialforegoing:infinity_nuke',
    
      'createaddition:creative_energy'

];

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  bannedItems.forEach(id => event.remove(id));
});
