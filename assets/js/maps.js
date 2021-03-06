// Google map API
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 53.350140, lng: -6.266155 },
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

        // open marker content
        marker.addListener("click", function () {
            infoWindow.close();
            infoWindow.setContent(coords.content);
            infoWindow.open(map, marker);
        });
    }

    // clear markers
    function clearMarkers() {
        for (let i = 0; i < currentMarkers.length; i++) {
            currentMarkers[i].setMap(null);
        }
        currentMarkers = [];
    }

    //button click for attractionMarkers
    $(document).ready(function () {
        $("#attractions").on("click", function () {
            clearMarkers();
            showMarkers(attractionsMarker);
        })
    })

    // button click for outDoorMarkers
    $(document).ready(function () {
        $("#outdoors").on("click", function () {
            clearMarkers();
            showMarkers(outdoorMarker);
        })
    })

    // for loop to show markers on map
    function showMarkers(markers) {
        for (i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }
        map.setCenter({ lat: 53.350140, lng: -6.266155 });
    }

    // Attractions marker locations and affiliated content
    var attractionsMarker = [
        {
            location: { lat: 53.3438, lng: -6.2546 },
            content: "<h4>Trinity College Dublin</h4><p>Visit this esteemed research university and the home of the Book of Kells, the sole constituent college of the University of Dublin.</p><h6>Address</h6><p>College Green, Dublin 2</p><h6>Phone No.</h6><p>(01) 896 1000</p>"
        },
        {
            location: { lat: 53.3728, lng: -6.2768 },
            content: "<h4>Glasnevin Cemetary</h4><p>It holds the graves and memorials of several notable figures who have helped shaped Irish history and culture.</p><h6>Address</h6><p>Finglas Rd, Glasnevin</p><h6>Phone No.</h6><p>(01) 882 6500</p>"
        },
        {
            location: { lat: 53.3429, lng: -6.2674 },
            content: "<h4>Dublin Castle</h4><p>Erected in the early thirteenth century on the site of a Viking settlement. It is now a major government complex and a key tourist attraction.</p><h6>Address</h6><p>Dame Street, Dublin 2</p><h6>Phone No.</h6><p>+353 1 6458800</p>"
        },
        {
            location: { lat: 53.3449, lng: -6.2675 },
            content: "<h4>Temple Bar</h4><p> It is promoted as Dublin's 'cultural quarter' and, as a centre of Dublin's city centre's nightlife, is a tourist destination.</p><h6>Address</h6><p>Temple Bar, Dublin</p>"
        },
        {
            location: { lat: 53.33833198, lng: -6.285498858 },
            content: "<h4>Guinness Storehouse</h4><p>Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over twenty million visitors.</p><h6>Address</h6><p>St. James's Gate, Dublin 8</p><h6>Phone No.</h6><p>(01) 408 4800</p>"
        },
    ]

    // Outdoor marker locations and affiliated content
    var outdoorMarker = [
        {
            location: { lat: 53.3559, lng: -6.3298 },
            content: "<h4>Phoenix Park</h4><p>The Phoenix Park is the largest enclosed public park in any capital city in Europe.</p><h6>Address</h6><p>Dublin 8</p>"
        },
        {
            location: { lat: 53.3786, lng: -6.0570 },
            content: "<h4>Howth</h4><p>Great views of the rugged coastline and cliffs, Dublin Bay, Howth Harbour and an almost aerial view of both the Baily Lighthouse and Howth Harbour Lighthouse.</p><h6>Address</h6><p>Howth, Dublin 13</p>"
        },
        {
            location: { lat: 53.3421, lng: -6.1513 },
            content: "<h4>Poolbeg Lighthouse</h4><p>The Poolbeg Lighthouse Walk is a gorgeous coastal walk that???ll blow off the thickest of cobwebs.</p><h6>Address</h6><p>(01) 408 4800</p>"
        },
        {
            location: { lat: 53.3699, lng: -6.2705 },
            content: "<h4>National Botanic Gardens</h4><p>Ireland's premier garden is a green oasis situated in the leafy suburb of Glasnevin, not far from Dublin city centre.</p><h6>Address</h6><p>Glasnevin, Dublin 9</p>"
        },
    ]
}

