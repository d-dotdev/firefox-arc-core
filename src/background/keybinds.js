const commands = {
  toggleSidebar: () => {
    browser.sidebarAction.toggle();
  },
};

/**
 * @argument {string} command
 */
function handleShortcut(command) {
  let commandFunction = commands[command];
  commandFunction();
}

browser.commands.onCommand.addListener(handleShortcut);
