ServerEvents.recipes(event => {
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/basic_control_circuit' })
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/advanced_control_circuit' })
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/elite_control_circuit' })
  event.remove({ id: 'oritech:atomicforge/compat/mekanism/ultimate_control_circuit' })
})