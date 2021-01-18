function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: {
                    lat: 47.424166434527066,
                    lng:  8.865602049538841
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [
                { lat:  40.995399132934665, lng: 17.22094028027515 },   
                { lat: 38.11637256444217, lng:  13.360550116028266 }, 
                { lat: 39.22360909816497, lng: 9.120739069039061 },
                { lat: 36.74573623803619, lng: -3.8799172645394373 },
                { lat: 41.383328027353535, lng: 2.1877349809692834 }, 
                { lat: 39.569198067832346, lng: 2.650959684369021 },   
                { lat: 37.984275443032146, lng: 23.72864048260015 },   
                { lat: 36.39596237126229, lng: 25.463031208367465 },
                { lat: 37.77575950347747,  lng: 20.945493259626083 }  

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

           
