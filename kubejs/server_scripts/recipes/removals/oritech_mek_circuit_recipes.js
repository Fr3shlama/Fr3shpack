// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/removals/oritech_mek_circuit_recipes.js
// Description: Remove Oritech Mekanism circuit compat recipes.

ServerEvents.recipes(event => {
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/basic_control_circuit' })
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/advanced_control_circuit' })
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/elite_control_circuit' })
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/ultimate_control_circuit' })
})

