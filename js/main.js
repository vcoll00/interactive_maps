let map = L.map('first_map').setView([25.780749, -80.179385], 12.49);

L.tileLayer('https://api.mapbox.com/styles/v1/valeriac00/cki93a4ir1r2k19mn11qqptfy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmFsZXJpYWMwMCIsImEiOiJja2k5MnlrcnMwYjhxMnpuMWYyNW9oMmV3In0.ij_PjKGxb0mGMojNZJswVA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker1 = L.marker([25.78766892390647, -80.18572830734706]).addTo(map);
marker1.bindPopup("This is the Perez Art Museum Miami.");

var marker2 = L.marker([25.781441530999018, -80.1894465732794]).addTo(map);
marker2.bindPopup("This is the Museum of Art and Design @ MDC.");

var marker3 = L.marker([25.775615609450856, -80.1959163560078]).addTo(map);
marker3.bindPopup("This is the Miami Art Museum.");

var marker4 = L.marker([25.799924989535267, -80.2140079655187]).addTo(map);
marker4.bindPopup("This is the Rubell Museum.");
