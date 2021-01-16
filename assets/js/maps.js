function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                { lat: 40.785091, lng: -73.968285 },
                { lat: 41.084045, lng: -73.874245 },
                { lat: 40.754932, lng: -73.984016 }

            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length], 
            });
            });

            var markerCluster = new MarkerClusterer(map, markers, 
            {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
            }



/*
            function initMap() {
            var map = new google.maps.Map(document.getElementById("map-2"), {
                zoom: 9,
                center: {       
                    lat: 51.50197236490781,
                    lng: -0.020643166954232132
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
               
                { lat:51.49874252820631, lng: -0.019553628885394345}
                
            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length], 
            });
            });

            var markerCluster = new MarkerClusterer(map, markers, 
            {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
            }  */