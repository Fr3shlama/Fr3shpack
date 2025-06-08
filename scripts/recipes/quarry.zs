// Remove original Quarry and Advanced Quarry recipes
recipes.remove(<item:quarryplus:quarry>);
recipes.remove(<item:quarryplus:adv_quarry>);
recipes.remove(<item:rftoolsbuilder:shape_card_def>);

// --------------------
// Custom Advanced Quarry
// --------------------
craftingTable.addShaped("custom.adv_quarry", <item:quarryplus:adv_quarry>, [
    [<tag:item:c:storage_blocks/diamond>, <item:minecraft:dragon_head>, <tag:item:c:storage_blocks/diamond>],
    [<item:quarryplus:quarry>, <item:avaritia:infinity_singularity>, <item:quarryplus:quarry>],
    [<tag:item:c:storage_blocks/emerald>, <item:avaritia:endest_pearl>, <tag:item:c:storage_blocks/emerald>]
]);

// --------------------
// Custom Quarry
// --------------------
craftingTable.addShaped("custom.quarry", <item:quarryplus:quarry>, [
    [<item:minecraft:netherite_pickaxe>, <item:alltheores:steel_ingot>, <item:minecraft:netherite_pickaxe>],
    [<item:alltheores:steel_ingot>, <item:create:precision_mechanism>, <item:alltheores:steel_ingot>],
    [<item:minecraft:redstone_block>, <item:alltheores:steel_ingot>, <item:minecraft:redstone_block>]
]);

// --------------------
// Custom Shape Card (Default)
// --------------------
craftingTable.addShaped("custom.shape_card_def", <item:rftoolsbuilder:shape_card_def>, [
    [<item:pneumaticcraft:pcb_blueprint>, <item:minecraft:bricks>, <item:pneumaticcraft:pcb_blueprint>],
    [<tag:item:c:dusts/redstone>, <item:create:precision_mechanism>, <tag:item:c:dusts/redstone>],
    [<item:pneumaticcraft:pcb_blueprint>, <item:minecraft:bricks>, <item:pneumaticcraft:pcb_blueprint>]
]);
