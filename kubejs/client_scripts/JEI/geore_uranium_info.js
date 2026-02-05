RecipeViewerEvents.addInformation('item', event => {
  event.add('geore:uranium_block', [
    'Uranium Budding Conversion (Radiation Triggered)',
    '',
    'Right-click this block while standing in a',
    'sufficiently irradiated area.',
    '',
    'If the ambient Mekanism radiation level is high enough,',
    'the block will convert into Budding Uranium.',
    '',
    'Warning: radiation is extremely dangerous.',
    'Protective gear and distance are strongly recommended.'
  ])

  event.add('geore:budding_uranium', [
    'Created by right-clicking a GeOre Uranium Block',
    'in an area with high Mekanism radiation levels.'
  ])

  event.add('mekanism:radioactive_waste_barrel', [
    'A common source of environmental radiation.',
    'Can be used to create irradiated areas',
    'for Uranium GeOre conversion.'
  ])
})
