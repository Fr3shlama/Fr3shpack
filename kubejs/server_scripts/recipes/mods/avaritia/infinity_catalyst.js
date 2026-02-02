// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/avaritia/infinity_catalyst.js
// Description: Redefine the Avaritia infinity catalyst recipe.

ServerEvents.recipes(event => {
  event.remove({ id: 'avaritia:infinity_catalyst' });
  event.remove({ id: 'avaritia:infinity_catalyst_from_infinity_singularity' });

  event.custom({
    type: 'avaritia:extreme_shapeless',
    ingredients: [
      { item: 'avaritia:diamond_lattice' },
      { item: 'avaritia:crystal_matrix_ingot' },
      { item: 'avaritia:neutron_pile' },
      { item: 'avaritia:neutron_nugget' },
      { item: 'avaritia:neutronium_ingot' },
      { item: 'avaritia:record_fragment' },
      { item: 'avaritia:ultimate_stew' },
      { item: 'avaritia:cosmic_meatballs' },
      { item: 'avaritia:endest_pearl' },
      { item: 'extendedcrafting:ultimate_singularity' },
      { item: 'mekanism:pellet_antimatter' },
      { item: 'modern_industrialization:quantum_upgrade' },
      { item: 'mekanism_extras:infinite_control_circuit' },
      { item: 'megacells:cell_component_256m' },
//    { item: 'justdirethings:time_crystal' },
//    { item: 'oritech:machine_core_7' },
      { item: 'create:precision_mechanism' }
    ],
    result: {
      id: 'avaritia:infinity_catalyst',
      count: 1
    }
  }).id('kubejs:avaritia/infinity_catalyst');
});



