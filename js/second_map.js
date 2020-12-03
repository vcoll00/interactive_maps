let map = L.map('second_map').setView([37.558834, -95.772905], 3.49);

L.tileLayer('https://api.mapbox.com/styles/v1/valeriac00/cki93a4ir1r2k19mn11qqptfy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmFsZXJpYWMwMCIsImEiOiJja2k5MnlrcnMwYjhxMnpuMWYyNW9oMmV3In0.ij_PjKGxb0mGMojNZJswVA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].companyName + '</h3>' + '<p>' + places[i].headquarterCity + '</p>')
  .addTo(map);
}
