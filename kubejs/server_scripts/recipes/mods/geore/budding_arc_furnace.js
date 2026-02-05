// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_arc_furnance.js
// Description: Add Immersive Engineering arc furnace recipes to create GeOre budding metal blocks using ores that require more heat to process.


ServerEvents.recipes(event => {
  const ARC_TIER = [
    "osmium",
    "platinum"
  ];

  function arcBudding(material, energy, time) {
    energy = (energy === undefined) ? 512000 : energy;
    time   = (time === undefined) ? 2000 : time;

    event.custom({
      type: "immersiveengineering:arc_furnace",

      input: { item: `geore:${material}_block` },

       additives: [
        { tag: "c:coal_coke" },
        { item: "minecraft:amethyst_shard" }
      ],

      results: [
        { item: `geore:budding_${material}` }
      ],

      secondaries: [],

      energy: energy,
      time: time
    }).id(`pack:geore/budding_arc/${material}`);
  }

  ARC_TIER.forEach(m => arcBudding(m));
});

