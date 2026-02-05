// Fr3shlama (TM) | File: kubejs/server_scripts/recipes/mods/geore/budding_emerald_create_superheated.js
// Description: Superheated Mixing recipe for Budding Emerald using Create Superheated Mixer


ServerEvents.recipes(event => {
  const inputs = ["geore:emerald_block"];

  for (let i = 0; i < 32; i++) {
    inputs.push({ tag: "c:dusts/beryllium" });
  }

  event.recipes.create.mixing(
    "geore:budding_emerald",
    inputs
  )
  .superheated()
  .id("pack:geore/budding/emerald_superheated_beryllium");
});
