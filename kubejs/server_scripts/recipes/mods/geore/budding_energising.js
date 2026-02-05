// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_energising.js
// Description: Add Create New Age energising recipes to create GeOre budding coal and redstone blocks.

ServerEvents.recipes(event => {
  const energise = (outputId, energyNeeded, ingredients, id) => {
    event.custom({
      type: "create_new_age:energising",
      energy_needed: energyNeeded,
      ingredients: ingredients,
      results: [{ id: outputId, amount: 1 }]
    }).id(id);
  };

  energise(
    "geore:budding_coal",
    2000000,
    [{ item: "geore:coal_block" }],
    "pack:geore_energising_coal"
  );

  energise(
    "geore:budding_redstone",
    10000000,
    [{ item: "geore:redstone_block" }],
    "pack:geore_energising_redstone"
  );
});
