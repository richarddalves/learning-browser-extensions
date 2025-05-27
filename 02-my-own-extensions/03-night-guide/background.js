// Night-Guide CSS file
const NIGHT_CSS = "styles/night-theme.css";

// Track state with the badge text itself ("ON" | "OFF")
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: "#777" });
});

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return; // Safety guard

  // Read previous badge
  const prev = await chrome.action.getBadgeText({ tabId: tab.id });
  const next = prev === "ON" ? "OFF" : "ON";
  
  // Update badge first
  await chrome.action.setBadgeText({ tabId: tab.id, text: next });
  await chrome.action.setBadgeBackgroundColor({
    tabId: tab.id,
    color: next === "ON" ? "#4caf50" : "#777",
  });

  // Apply or remove CSS
  if (next === "ON") {
    await chrome.scripting.insertCSS({
      files: [NIGHT_CSS],
      target: { tabId: tab.id }
    });
  } else {
    await chrome.scripting.removeCSS({
      files: [NIGHT_CSS],
      target: { tabId: tab.id },
    });
  }
});
