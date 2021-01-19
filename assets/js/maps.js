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
        { lat: 40.995399132934665, lng: 17.22094028027515, name: "<h5>Polignano A Mare</h5> <p>Overlooking the azure waters of the Adriatic Sea, petite Polignano a Mare is home to some of Puglia’s loveliest beaches. Ringed by dramatic cliffs, the Lama Monachile Beach—also known as Cala Porte—is one of the most coveted, and most photographed, in the region. </p>"},
        { lat: 38.11637256444217, lng: 13.360550116028266, name: "<h5>Palermo</h5> <p><b>Palermo</b> is a city of ever-changing character. An abundance of dusty museums, Arabian domes and flourishes of baroque splendor jostle with boisterous markets, chaotic traffic and oppressive summer heat. The Sicilian hotspot is a noisy, polluted, often dangerous, but always fascinating city. Don't miss marvels of Arab-Norman architecture, such as 12th-century Palazzo dei Normanni or San Giovanni degli Eremiti. Ask your hotel to arrange cabs and negotiate fares before setting off.</p>"  },
        { lat: 39.22360909816497, lng: 9.120739069039061, name: "<h5>Cagliari</h5> <p><b>Cagliari</b> it's Sardinia’s largest city and its capital for centuries, Cagliari on the island’s south coast offers the perfect mix of recreation and exploration options. The five-mile-long Poetto Beach is among the best city beaches on the Mediterranean, and together with the adjacent Marina Piccola, satisfies all manner of sun and sea pursuits. Seekers of culture will love Cagliari’s old district, Castello, where 13th-century towers still guard the medieval city walls. </p>" },
        { lat: 36.72111157241735, lng: -4.421972742184493, name: "<h5>Malaga</h5> <p>Malaga, Pablo Picasso's birthplace and the gateway to the Costa del Sol, is a hectic, sometimes unruly city of 550,000. An impressive number of museums and monuments, including the 11th-century Alcazaba fort and Museu Picasso Malaga, provide plenty of diversions for those who opt not to spend all their time on the coast's famed beaches and in their accompanying bars. The old city bustles with taverns and bistros. The generous Paseo del Parque offers a delightful stroll past banana trees and fountains.</p>" },
        { lat: 41.383328027353535, lng: 2.1877349809692834, name: "<h5>Barcelona</h5> <p>Bustling markets, tree lined blocks, and fantastical architecture cozy up to one another in this dreamy Mediterranean beach town. Paella and pintxos bars, exceptional seafood, standout local wines, a world-class arts scene, and bumping nightlife, Barcelona effortlessly blends the history of its districts with a healthy appetite for the new.</p>" },
        { lat: 39.569198067832346, lng: 2.650959684369021, name: "<h5>Palma De Mallorca</h5> <p>Palma, the economic and cultural hub of Majorca, is a delightful base for exploring the island's many gold and white beaches. A former Moorish casbah, or walled city, Palma's Old Town is an appealing maze of narrow streets that are a delight to explore on foot. Hop on the Soller Railway for a 17-mile scenic trip, visit 14th-century Bellver Castle and the museum of contemporary art, and check out the nightlife.</p>" },
        { lat: 37.984275443032146, lng: 23.72864048260015, name: "<h5>Athens</h5> <p>Once the heart of one of the most powerful civilizations in the Neolithic Age, Athens is dominated by colossal architectural feats of the ancient past, from the Acropolis to the Temple of Olympian Zeus. However, the neighbourhoods and backstreets of Athens reveal a delightfully modern and laidback energy, with lively urban restaurants and edgy galleries, set against relics of a bygone era. Those seeking respite from the bustle can take a stroll down its gleaming coastline, with pristine waters and relaxing beach resorts.</p>" },
        { lat: 36.39596237126229, lng: 25.463031208367465, name: "<h5>Santorini</h5> <p>Even if you’ve never been to this Cyclades island in the Aegean Sea, you’d still recognise it immediately—its candy-coloured houses carved into cliffs, sapphire waters, and chalk-white buildings topped with cobalt-blue domes. Roam the peaceful black-sand beaches or wander the streets of a provincial village like Imerovigli. Beautiful Oia is world famous for its sunsets, which seem to dial through a kaleidoscope of colours before fading to starlight.</p>" },
        { lat: 37.77575950347747, lng: 20.945493259626083, name: "<h5>Zakynthos</h5> <p>The Ionian Islands are splendid, cinematic paradise. The waters are bluest blue, the sands are achingly silky and smooth. Everything looks heavily Photoshopped. But that's just Mother Nature, in all her unspoiled glory. Zakynthos is the largest of the Ionian Islands, and it's as fruitful as it is beautiful, boasting a bounty of crops like olives and grapes. Music is a huge part of the local culture—you can catch a concert or festival almost any night of the week, and you'll be captivated by the sights and sounds of Zakynthos performers.</p>" }
    ];
    var markers = locations.map(function (location, i) {
        const infowindow = new google.maps.InfoWindow({
            content: location.name,
        });
        const marker = new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
        return marker;
    });

            var markerCluster = new MarkerClusterer(map, markers, 
            {imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
            } 

           
