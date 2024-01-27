window.onload = function() {
    const button = document.querySelector('#changeBtn');
    const inputField = document.querySelector('#customUserAgent') as HTMLInputElement;
  
    button?.addEventListener('click', () => {
      chrome.runtime.sendMessage({ customUserAgent: inputField.value });
    });
  };