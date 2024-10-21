document.getElementById('info-btn').addEventListener('click', function () {
    alert('Oulu tunnetaan kiekkokaupunkina ja sen kauniista merimaisemista!');
});

document.getElementById('culture-btn').addEventListener('click', function () {
    const cultureSection = document.createElement('p');
    cultureSection.textContent = 'Oulussa järjestetään vuosittain kansainvälisiä elokuva- ja musiikkifestivaaleja.';
    document.getElementById('culture').appendChild(cultureSection);
});

const attractions = [
    { name: 'Oulun Linna', hours: 'Avoinna kesäisin' },
    { name: 'Torinranta', hours: 'Avoinna ympäri vuoden' },
    { name: 'Oulun Tuomiokirkko', hours: 'Arkisin klo 12-13 sekä pe ja su klo 16-19' },
    { name: 'Pohjois-Pohjanmaan museo', hours: 'Väliaikaisesti suljettu' }
];

function populateAttractionsList() {
    const list = document.getElementById('attractions-list');
    attractions.forEach(attraction => {
        const li = document.createElement('li');
        li.textContent = attraction.name;
        list.appendChild(li);
    });
}

function populateAttractionsTable() {
    const tbody = document.querySelector('#attractions-table tbody');
    attractions.forEach(attraction => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const hoursCell = document.createElement('td');

        nameCell.textContent = attraction.name;
        hoursCell.textContent = attraction.hours;

        row.appendChild(nameCell);
        row.appendChild(hoursCell);
        tbody.appendChild(row);
    });
}

populateAttractionsList();
populateAttractionsTable();