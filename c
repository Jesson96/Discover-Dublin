[1mdiff --git a/assets/css/style.css b/assets/css/style.css[m
[1mindex a758a63..5997221 100644[m
[1m--- a/assets/css/style.css[m
[1m+++ b/assets/css/style.css[m
[36m@@ -48,7 +48,6 @@[m [mbody {[m
     color: #182628;[m
     text-transform: uppercase;[m
     text-decoration: black;[m
[31m-    [m
 }[m
 [m
 nav a:hover {[m
[1mdiff --git a/assets/js/maps.js b/assets/js/maps.js[m
[1mindex ed14983..bf4063e 100644[m
[1m--- a/assets/js/maps.js[m
[1m+++ b/assets/js/maps.js[m
[36m@@ -1,31 +1,92 @@[m
[32m+[m[32mlet map;[m
[32m+[m
 function initMap() {[m
[31m-    //new map[m
[31m-    const map = new google.maps.Map(document.getElementById("map"), {[m
[31m-    // map options[m
[32m+[m[32m    map = new google.maps.Map(document.getElementById("map"), {[m
         zoom: 12,[m
[31m-        center: {[m
[31m-            lat: 53.350140,[m
[31m-            lng: -6.266155[m
[31m-        }[m
[32m+[m[32m        center: { lat: 	53.350140, lng:-6.266155},[m
     });[m
 [m
[32m+[m[32m    // Variable to for markers[m
[32m+[m
[32m+[m[32m    var activeMarkers = [];[m
[32m+[m
[32m+[m[32m    // Info window variable for markers[m
[32m+[m
[32m+[m[32m    var infoWindow = new google.maps.InfoWindow();[m
[32m+[m
[32m+[m[32m    // function for markers/button click[m
[32m+[m[32m    function addMarker(property) {[m
[32m+[m[32m        var marker = new google.maps.Marker({[m
[32m+[m[32m            position: property.location,[m
[32m+[m[32m            map: map,[m
[32m+[m[32m        });[m
[32m+[m
[32m+[m[32m        // markers pushed to activeMarkers[m
[32m+[m[32m        activeMarkers.push(marker);[m
[32m+[m
[32m+[m[32m        // open marker content[m
[32m+[m[32m        marker.addListener("click", function () {[m
[32m+[m[32m            infoWindow.close();[m
[32m+[m[32m            infoWindow.setContent(property.content);[m
[32m+[m[32m            infoWindow.open(map, marker);[m
[32m+[m[32m        });[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    // clear markers[m
[32m+[m
[32m+[m[32m    function clearMarkers() {[m
[32m+[m[32m        for (let i = 0; i < activeMarkers.length; i++) {[m
[32m+[m[32m            activeMarkers[i].setMap(null);[m
[32m+[m[32m        }[m
[32m+[m[32m        activeMarkers = [];[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    //button click for attractionMarkers[m
[32m+[m[32m    $(document).ready(function () {[m
[32m+[m[32m        $("#attractions").on("click", function () {[m
[32m+[m[32m            clearMarkers();[m
[32m+[m[32m            showMarkers(attractionsMarker);[m
[32m+[m[32m        })[m
[32m+[m[32m    })[m
[32m+[m[41m    [m
[32m+[m[32m    // button click for outDoorMarkers[m
[32m+[m[32m    $(document).ready(function () {[m
[32m+[m[32m        $("#outdoors").on("click", function () {[m
[32m+[m[32m            clearMarkers();[m
[32m+[m[32m            showMarkers(outdoorMarkers);[m
[32m+[m[32m        })[m
[32m+[m[32m    })[m
[32m+[m
[32m+[m[41m    [m
[32m+[m[32m    // for loop to show markers on map[m
[32m+[m[32m    function showMarkers(markers) {[m
[32m+[m[32m        for (i = 0; i < markers.length; i++) {[m
[32m+[m[32m            addMarker(markers[i]);[m
[32m+[m[32m        }[m
[32m+[m[32m        map.setCenter({ lat: 53.350140, lng:-6.266155 });[m
[32m+[m[32m    }[m
[32m+[m
     // Marker locations and affiliated content[m
     var attractionsMarker = [[m
         {[m
[31m-            location: {lat: 53.3438,lng: 6.2546},[m
[32m+[m[32m            location: {lat: 53.3438,lng: -6.2546},[m
             content: "<h4>Trinity College Dublin</h4><p>Visit this esteemed research university and the home of the Book of Kells, the sole constituent college of the University of Dublin.</p>"[m
     },[m
         {[m
[31m-            location: {lat: 53.3728,lng: 6.2768},[m
[32m+[m[32m            location: {lat: 53.3728,lng: -6.2768},[m
             content: "<h4>Glasnevin Cemetary</h4><p>t holds the graves and memorials of several notable figures who have helped shaped Irish history and culture.</p>"[m
     },[m
         {[m
[31m-            location: {lat: 53.3429,lng: 6.2674},[m
[32m+[m[32m            location: {lat: 53.3429,lng: -6.2674},[m
             content: "<h4>Dublin Castle</h4><p>Erected in the early thirteenth century on the site of a Viking settlement. It is now a major government complex and a key tourist attraction.</p>"[m
     },[m
         {[m
[31m-            location: {lat: 53.3449,lng: 6.2675},[m
[32m+[m[32m            location: {lat: 53.3449,lng: -6.2675},[m
             content: "<h4>Temple Bar</h4><p> It is promoted as Dublin's 'cultural quarter' and, as a centre of Dublin's city centre's nightlife, is a tourist destination.</p>"[m
     },[m
[32m+[m[32m    {[m[41m   [m
[32m+[m[32m        location: {lat:53.33833198, lng:-6.285498858},[m
[32m+[m[32m        content: "<h4>Guinness Storehouse</h4><p>Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over twenty million visitors.</p>"[m
[32m+[m[32m    },[m
     ][m
 }[m
