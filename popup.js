// Author: HuskyDG

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-btn');
  const statusText = document.getElementById('status-text');

  // Load saved state
  chrome.storage.local.get(['enabled'], (result) => {
    const isEnabled = result.enabled !== false; // Default to true
    toggleBtn.checked = isEnabled;
    updateStatusText(isEnabled);
  });

  // Handle toggle switch
  toggleBtn.addEventListener('change', () => {
    const isEnabled = toggleBtn.checked;
    chrome.storage.local.set({ enabled: isEnabled }, () => {
      updateStatusText(isEnabled);
    });
  });

  function updateStatusText(enabled) {
    if (enabled) {
      statusText.textContent = "mDNS anonymization active";
      statusText.style.color = "#1e8e3e";
    } else {
      statusText.textContent = "Protection disabled (IP exposed)";
      statusText.style.color = "#d93025";
    }
  }
});