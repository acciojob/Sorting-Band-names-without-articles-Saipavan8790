/* Your CSS code here. */
//your code here
// Function to remove articles from band names for comparison
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Array of band names
let bandNames = ['The Rolling Stones', 'The Beatles', 'Aerosmith', 'Led Zeppelin', 'Nirvana', 'Pink Floyd'];

// Sort the band names without articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase();
  const nameB = removeArticles(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Create an ul element
const ul = document.createElement('ul');
ul.id = 'band';

// Add each sorted band name as an li element
bandNames.forEach((name) => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Add the ul to the document
document.body.appendChild(ul)