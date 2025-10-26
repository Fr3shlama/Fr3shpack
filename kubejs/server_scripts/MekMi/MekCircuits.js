// Unify Mekanism(+Extras) circuits to Modern Industrialization components

ServerEvents.recipes(event => {
  const OSMIUM = '#c:ingots/osmium';

  const OUT = {
    basic:    'mekanism:basic_control_circuit',
    advanced: 'mekanism:advanced_control_circuit',
    elite:    'mekanism:elite_control_circuit',
    ultimate: 'mekanism:ultimate_control_circuit',
    absolute: 'mekanism_extras:absolute_control_circuit',
    supreme:  'mekanism_extras:supreme_control_circuit',
    cosmic:   'mekanism_extras:cosmic_control_circuit',
    infinite: 'mekanism_extras:infinite_control_circuit',
  };

  const MI = {
    analog_board:     'modern_industrialization:analog_circuit_board',
    analog:           'modern_industrialization:analog_circuit',
    electronic_board: 'modern_industrialization:electronic_circuit_board',
    electronic:       'modern_industrialization:electronic_circuit',
    digital_board:    'modern_industrialization:digital_circuit_board',
    digital:          'modern_industrialization:digital_circuit',
    quantum_board:    'modern_industrialization:quantum_circuit_board',
    quantum:          'modern_industrialization:quantum_circuit',
  };

  Object.values(OUT).forEach(it => event.remove({ output: it }));

  const addTri = (out, a, b, c, id) => {
    event.shapeless(out, [a, b, c]).id(id);
  };

  // Tier 1: Basic
  addTri(OUT.basic,    OSMIUM, MI.analog_board,     OSMIUM,                  'pack:circuit_basic');
  // Tier 2: Advanced
  addTri(OUT.advanced, OUT.basic, MI.analog,        OUT.basic,               'pack:circuit_advanced');
  // Tier 3: Elite
  addTri(OUT.elite,    OUT.advanced, MI.electronic_board, OUT.advanced,      'pack:circuit_elite');
  // Tier 4: Ultimate
  addTri(OUT.ultimate, OUT.elite, MI.electronic,    OUT.elite,               'pack:circuit_ultimate');
  // Tier 5: Absolute (Mekanism Extras)
  addTri(OUT.absolute, OUT.ultimate, MI.digital_board,   OUT.ultimate,       'pack:circuit_absolute');
  // Tier 6: Supreme (Mekanism Extras)
  addTri(OUT.supreme,  OUT.absolute, MI.digital,     OUT.absolute,           'pack:circuit_supreme');
  // Tier 7: Cosmic (Mekanism Extras)
  addTri(OUT.cosmic,   OUT.supreme, MI.quantum_board,   OUT.supreme,         'pack:circuit_cosmic');
  // Tier 8: Infinite (Mekanism Extras)
  addTri(OUT.infinite, OUT.cosmic, MI.quantum,      OUT.cosmic,              'pack:circuit_infinite');
});

