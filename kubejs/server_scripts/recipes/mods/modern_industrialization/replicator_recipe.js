// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/modern_industrialization/replicator_recipe.js
// Description: Custom assembler recipe to craft MI replicator.

ServerEvents.recipes(event => {
  const REPLICATOR_ID = "modern_industrialization:electric_age/machine/assembler/replicator";

  event.remove({ id: REPLICATOR_ID });

  event.custom({
    type: "modern_industrialization:assembler",
    eu: 32,
    duration: 1000,

    item_inputs: [
      { item: "modern_industrialization:quantum_circuit", amount: 4 },
      { item: "modern_industrialization:quantum_upgrade", amount: 2 },
      { item: "modern_industrialization:quantum_machine_hull", amount: 1 },
      { item: "avaritia:infinity_block", amount: 16 }
    ],

    item_outputs: [
      { item: "modern_industrialization:replicator", amount: 1 }
    ]
  }).id(REPLICATOR_ID);
});
