function checkForSpam(message) {
  const messageLowerCase = message.toLowerCase();
  return messageLowerCase.includes("spam") || messageLowerCase.includes("sale");
}
