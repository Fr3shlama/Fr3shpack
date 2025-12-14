ServerEvents.recipes(event => {
  const ID = "modern_industrialization:quarry/stainless_steel"

  let originalJsonString = null

  event.forEachRecipe({ id: ID }, r => {
    originalJsonString = "" + r.json
  })

  if (!originalJsonString) {
    console.log(`[MI QUARRY] Could not find recipe ${ID}`)
    return
  }

  const obj = JSON.parse(originalJsonString)
  event.remove({ id: ID })
  obj.item_outputs = obj.item_outputs || []
  obj.item_outputs.push({
    item: "alltheores:ruby_ore",
    amount: 1,
    probability: 0.08
  })
  event.custom(obj).id(ID)
  console.log(`[MI QUARRY] Replaced ${ID}`)
})

