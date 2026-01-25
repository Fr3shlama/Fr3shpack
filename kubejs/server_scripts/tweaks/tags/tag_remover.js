// Fr3shlama (TM) | File: kubejs/server_scripts/tweaks/tags/tag_remover.js
// Description: Remove items from specific tags.

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

