export function escapeHTML(text) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return String(text).replace(/[&<>"']/g, (character) => {
    return entities[character];
  });
}
