// 1. Make the Search Box Work
  const searchInput = document.querySelector('.search-box input');

if (searchInput) {
  searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
  const query = searchInput.value;
  if (query.trim() !== "") {
// Opens the search query in a new Google tab
 window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
 }
 }
 });
}
// 2. Automatically update the Footer Copyright Year
 const yearSpan = document.getElementById('year');
 if (yearSpan) {
 yearSpan.textContent = new Date().getFullYear();
}