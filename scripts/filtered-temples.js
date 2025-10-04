// ----------------------
// Footer Year + Last Modified
// ----------------------
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 
  `Last Modified: ${document.lastModified}`;

// ----------------------
// Temple Data
// ----------------------
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-64636.jpg"
  },
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois",
    dedicated: "1846-05-01",
    area: 54000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-4279.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5151.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154.jpg"
  },
  {
    templeName: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4058.jpg"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
  },
  // Extra temples added
  {
    templeName: "Kinshasa Democratic Republic of Congo Temple",
    location: "Kinshasa, DRC",
    dedicated: "2019-04-14",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3526.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44175,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054.jpg"
  },
  {
    templeName: "Preston England Temple",
    location: "Preston, England",
    dedicated: "1998-06-07",
    area: 69630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-56880.jpg"
  }
];

// ----------------------
// Function to Render Temple Cards
// ----------------------
function renderTemples(filteredTemples) {
  const container = document.getElementById('temple-cards');
  container.innerHTML = ''; // Clear

  filteredTemples.forEach(temple => {
    const card = document.createElement('figure');
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    container.appendChild(card);
  });
}

// ----------------------
// Filters
// ----------------------
document.getElementById('home').addEventListener('click', () => renderTemples(temples));
document.getElementById('old').addEventListener('click', () => renderTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)));
document.getElementById('new').addEventListener('click', () => renderTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)));
document.getElementById('large').addEventListener('click', () => renderTemples(temples.filter(t => t.area > 90000)));
document.getElementById('small').addEventListener('click', () => renderTemples(temples.filter(t => t.area < 10000)));

// Initial load
renderTemples(temples);

// ----------------------
// Hamburger Menu
// ----------------------
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});
