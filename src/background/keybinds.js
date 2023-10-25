const commands = {
  toggleSidebar: () => {
    browser.sidebarAction.toggle();
  },
};

function handleShortcut(command) {
  let commandFunction = commands[command];
  commandFunction();
}

browser.commands.onCommand.addListener(handleShortcut);
