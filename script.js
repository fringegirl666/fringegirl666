document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
        btn.textContent = 'Expand';
      } else {
        content.style.display = 'block';
        btn.textContent = 'Collapse';
      }
    });
  });
});