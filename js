document.addEventListener('keydown', event => {
  if (event.key === 'a') {
    setInterval(() => {
      document.elementFromPoint(event.clientX, event.clientY).click();
    }, 100);
  }
});
