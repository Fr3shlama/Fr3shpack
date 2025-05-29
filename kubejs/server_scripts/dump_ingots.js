// kubejs/server_scripts/dump_ingots_command.js

ServerEvents.commandRegister(event => {
    event.register(Command.literal("dumpingots").executes(ctx => {
      const tagId = 'c:ingots';
      const items = Ingredient.of(`#${tagId}`).itemIds;
  
      console.log(`[KubeJS] Dumping ${items.length} items in '${tagId}':`);
      items.forEach(id => {
        console.log(` - ${id}`);
      });
  
      ctx.source.sendSystemMessage(Text.of(`Dumped ${items.length} items from '${tagId}' to console.`));
      return 1;
    }));
  });
  