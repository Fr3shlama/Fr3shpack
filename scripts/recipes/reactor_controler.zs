
recipes.remove(<item:bigreactors:basic_reactorcontroller>);
recipes.remove(<item:bigreactors:reinforced_reactorcontroller>);

craftingTable.addShaped("bigreactors.reactor/basic/controller_ingots_uranium", <item:bigreactors:basic_reactorcontroller>,
    [
        [ <item:bigreactors:basic_reactorcasing>, <item:minecraft:comparator>,           <item:bigreactors:basic_reactorcasing> ],
        [ <tag:item:c:ingots/uranium>,            <item:mekanism:advanced_control_circuit>, <tag:item:c:ingots/uranium>            ],
        [ <item:bigreactors:basic_reactorcasing>, <tag:item:c:dusts/redstone>,           <item:bigreactors:basic_reactorcasing> ]
    ]
);

craftingTable.addShaped("bigreactors.reactor/basic/controller_ingots_yellorium",
    <item:bigreactors:basic_reactorcontroller>,
    [
        [ <item:bigreactors:basic_reactorcasing>, <item:minecraft:comparator>,           <item:bigreactors:basic_reactorcasing> ],
        [ <tag:item:c:ingots/yellorium>,          <item:mekanism:advanced_control_circuit>, <tag:item:c:ingots/yellorium>          ],
        [ <item:bigreactors:basic_reactorcasing>, <tag:item:c:dusts/redstone>,           <item:bigreactors:basic_reactorcasing> ]
    ]
);

craftingTable.addShaped("bigreactors.reactor/reinforced/controller_ingots_uranium",
    <item:bigreactors:reinforced_reactorcontroller>,
    [
        [ <item:bigreactors:reinforced_reactorcasing>, <item:minecraft:comparator>,              <item:bigreactors:reinforced_reactorcasing> ],
        [ <tag:item:c:ingots/uranium>,                  <item:mekanism:ultimate_control_circuit>, <tag:item:c:ingots/uranium>                  ],
        [ <item:bigreactors:reinforced_reactorcasing>,  <tag:item:c:dusts/redstone>,              <item:bigreactors:reinforced_reactorcasing>  ]
    ]
);

craftingTable.addShaped("bigreactors.reactor/reinforced/controller_ingots_yellorium",
    <item:bigreactors:reinforced_reactorcontroller>,
    [
        [ <item:bigreactors:reinforced_reactorcasing>, <item:minecraft:comparator>,              <item:bigreactors:reinforced_reactorcasing> ],
        [ <tag:item:c:ingots/yellorium>,                <item:mekanism:ultimate_control_circuit>, <tag:item:c:ingots/yellorium>                ],
        [ <item:bigreactors:reinforced_reactorcasing>,  <tag:item:c:dusts/redstone>,              <item:bigreactors:reinforced_reactorcasing>  ]
    ]
);


