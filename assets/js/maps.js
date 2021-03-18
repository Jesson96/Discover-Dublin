// Google map API
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 	53.350140, lng:-6.266155},
    });

   
    // Variable for markers  
    var currentMarkers = [];


    // Info window variable for markers

    var infoWindow = new google.maps.InfoWindow();

       // function for marker
    function addMarker(coords) {
        var marker = new google.maps.Marker({
            position: coords.location,
            map: map,
        });

     // markers pushed to currentMarkers
        currentMarkers.push(marker);



    // Attractions marker locations and affiliated content
    var attractionsMarker = [

        {
            location: {lat: 53.3438,lng: -6.2546},
            content: "<h4>Trinity College Dublin</h4><p>Visit this esteemed research university and the home of the Book of Kells, the sole constituent college of the University of Dublin.</p>"
    },
        {
            location: {lat: 53.3728,lng: -6.2768},
            content: "<h4>Glasnevin Cemetary</h4><p>It holds the graves and memorials of several notable figures who have helped shaped Irish history and culture.</p>"
    },
        {
            location: {lat: 53.3429,lng: -6.2674},
            content: "<h4>Dublin Castle</h4><p>Erected in the early thirteenth century on the site of a Viking settlement. It is now a major government complex and a key tourist attraction.</p>"
    },
        {
            location: {lat: 53.3449,lng: -6.2675},
            content: "<h4>Temple Bar</h4><p> It is promoted as Dublin's 'cultural quarter' and, as a centre of Dublin's city centre's nightlife, is a tourist destination.</p>"
    },
    {   
        location: {lat:53.33833198, lng:-6.285498858},
        content: "<h4>Guinness Storehouse</h4><p>Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over twenty million visitors.</p>"
    },
    ]

    // outdoor marker locations and affiliated content
    var outdoorMarker = [
        {
            location: {lat: 53.3559,lng: -6.3298},
            content: "<h4>Phoenix Park</h4><p>The Phoenix Park is the largest enclosed public park in any capital city in Europe.</p>"
    },
        {
            location: {lat: 53.3786,lng: -6.0570},
            content: "<h4>Howth</h4><p>Great views of the rugged coastline and cliffs, Dublin Bay, Howth Harbour and an almost aerial view of both the Baily Lighthouse and Howth Harbour Lighthouse.</p>"
    },
        {
            location: {lat: 53.3421,lng: -6.1513},
            content: "<h4>Poolbeg Lighthouse</h4><p>The Poolbeg Lighthouse Walk is a gorgeous coastal walk that’ll blow off the thickest of cobwebs.</p>"
    },
        {
            location: {lat: 53.3699,lng: -6.2705},
            content: "<h4>National Botanic Gardens</h4><p>Ireland's premier garden is a green oasis situated in the leafy suburb of Glasnevin, not far from Dublin city centre.  </p>"
    },
    ]
}
}
