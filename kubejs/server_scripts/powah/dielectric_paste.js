ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:crafting_shapeless', output: 'powah:dielectric_paste' });
  event.remove({ type: 'minecraft:crafting_shaped',   output: 'powah:dielectric_paste'   });

  const FEED_COAL = { tag: 'c:coal', amount: 1 };               
  const FEED_CLAY = { item: 'minecraft:clay_ball', amount: 1 };
  const OUT_PASTE = { item: 'powah:dielectric_paste', amount: 64 };

  const EU_PER_TICK = 16;
  const DURATION_T  = 200;

  function addRubberMixer(fluidId, suffix) {
    event.custom({
      type: 'modern_industrialization:mixer',
      eu: EU_PER_TICK,
      duration: DURATION_T,
      item_inputs: [ FEED_COAL, FEED_CLAY ],
      fluid_inputs: [ { fluid: fluidId, amount: 100 } ],
      item_outputs: [ OUT_PASTE ]
    }).id(`pack:mi_mixer_dielectric_paste_${suffix}`);
  }

  addRubberMixer('modern_industrialization:styrene_butadiene_rubber', 'sbr');
  addRubberMixer('modern_industrialization:synthetic_rubber',         'synthetic');
});
