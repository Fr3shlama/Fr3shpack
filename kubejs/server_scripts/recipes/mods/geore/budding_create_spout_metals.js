// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_create_spout_metals.js
// Description: Add Create mixing and sequenced assembly recipes to create GeOre budding metal blocks.

ServerEvents.recipes(event => {
  const METALS = [
    "iron",
    "gold",
    "copper",
    "tin",
    "lead",
    "zinc",
    "aluminum",
    "nickel",
    "silver"
  ];

  const LOOPS = 64;
  const MB = 1000;

  METALS.forEach(m => {
    const block = `geore:${m}_block`;
    const incomplete = `kubejs:incomplete_budding_${m}`;
    const budding = `geore:budding_${m}`;
    const molten = `productivemetalworks:molten_${m}`;
    event.recipes.create.mixing(
      incomplete,
      [
        block,
        "minecraft:amethyst_shard"
      ]
    )
    .superheated()
    .id(`pack:geore/${m}_budding_prime`);
    event.recipes.create.sequenced_assembly(
      [budding],
      incomplete,
      [
        event.recipes.create.filling(
          incomplete,
          [incomplete, Fluid.of(molten, MB)]
        )
      ]
    )
    .transitionalItem(incomplete)
    .loops(LOOPS)
    .id(`pack:geore/${m}_budding_spout`);
  });

});
