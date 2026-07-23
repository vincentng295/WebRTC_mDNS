// Author: HuskyDG
// Background script to set WebRTC IP handling policy

const POLICY_MDNS = 'default_public_interface_only';
const POLICY_DEFAULT = 'default';

// Initialize state on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['enabled'], (result) => {
    if (result.enabled === undefined) {
      chrome.storage.local.set({ enabled: true }, () => {
        applyWebRTCPolicy(true);
      });
    } else {
      applyWebRTCPolicy(result.enabled);
    }
  });
});

// Function to set the Chrome WebRTC policy
function applyWebRTCPolicy(isEnabled) {
  const policyValue = isEnabled ? POLICY_MDNS : POLICY_DEFAULT;
  
  if (chrome.privacy && chrome.privacy.network && chrome.privacy.network.webRTCIPHandlingPolicy) {
    chrome.privacy.network.webRTCIPHandlingPolicy.set(
      { value: policyValue },
      () => {
        if (chrome.runtime.lastError) {
          console.error("Error setting WebRTC policy:", chrome.runtime.lastError);
        } else {
          console.log(`WebRTC IP Handling Policy set to: ${policyValue}`);
        }
      }
    );
  }
}

// Listen for toggle updates from popup
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.enabled) {
    applyWebRTCPolicy(changes.enabled.newValue);
  }
});