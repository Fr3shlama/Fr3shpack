// Remove original Infinity Catalyst recipes
recipes.removeByName("avaritia:infinity_catalyst");
recipes.removeByName("avaritia:infinity_catalyst_from_infinity_singularity");

// Add custom recipe with expanded requirements
<recipetype:avaritia:extreme_crafting>.addJsonRecipe("custom.infinity_catalyst", {
    type: "avaritia:extreme_shapeless",
    ingredients: [
        { "item": "avaritia:diamond_lattice" },
        { "item": "avaritia:crystal_matrix_ingot" },
        { "item": "avaritia:neutron_pile" },
        { "item": "avaritia:neutron_nugget" },
        { "item": "avaritia:neutronium_ingot" },
        { "item": "avaritia:record_fragment" },
        { "item": "avaritia:ultimate_stew" },
        { "item": "avaritia:cosmic_meatballs" },
        { "item": "avaritia:endest_pearl" },
        { "item": "extendedcrafting:ultimate_singularity" },
        { "item": "mekanism:pellet_antimatter" },
        { "item": "modern_industrialization:quantum_upgrade" },
        { "item": "mekanism_extras:infinite_control_circuit" },
        { "item": "megacells:cell_component_256m" }
    ],
    result: {
        "id": "avaritia:infinity_catalyst",
        "count": 1
    }
});
