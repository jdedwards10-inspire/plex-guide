const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', async () => {
  const message = document.getElementById('help-message');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(message.value);
    status.textContent = 'Copied. Paste this into your usual message to John.';
  } catch {
    message.hidden = false;
    message.focus();
    message.select();
    status.textContent = 'Select and copy the message below.';
  }
});
