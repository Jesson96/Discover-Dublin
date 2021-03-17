// Google map API
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 	53.350140, lng:-6.266155},
    });

   

  

    // Marker locations and affiliated content
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
}
