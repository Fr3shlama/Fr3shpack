// kubejs/server_scripts/tag_remover.js
ServerEvents.tags('item', event => {
  const removals = {
    'immersiveengineering:hammer': [
      'c:tools/wrench',
      'mekanism:configurators',
      'c:wrenches'
    ]
  }

  for (const [item, tags] of Object.entries(removals)) {
    tags.forEach(tag => {
      event.remove(tag, item)
    })
  }
})
