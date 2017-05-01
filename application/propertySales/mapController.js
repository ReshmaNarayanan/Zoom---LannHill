app.controller('MapCtrl', [ '$scope', 'commonFactory',
    function ($scope, commonFactory) {

        var createMarker = function (info) {
            
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                data: info
            });
            marker.content = '<figure><a href="#"><img src="'+marker.data.image+'"></a></figure><div class="list-details"><p class="caption-1">'+marker.data.name+'</p><p class="caption-2">'+marker.data.aed+'</p><p class="caption-3">'+marker.data.caption+'</p></div><div class="more-details"><div class="bd-num">3bd</div><div class="ba-num">2ba</div><span class="sqft">2,370 sqft</span></div><div class="grey-divider"></div><div class="contact-details"><div class="call">Call</div><div class="email">@ Email</div><div class="right-arrow"></div></div>';
            
            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<div class="search-result-list"><div class="search-list"><div>'+marker.content+'</div></div></div>');
                infoWindow.open($scope.map, marker);
            });
            
            $scope.markers.push(marker);  
        }
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(25.0929375,55.1814362),
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            zoomControl: true,
            scaleControl: true
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];
        
        var infoWindow = new google.maps.InfoWindow();

        commonFactory.getData().then(function(response) {
            $scope.searchList = response.searchList;
            for (i = 0; i < $scope.searchList.length; i++) {
                createMarker($scope.searchList[i]);
            }
        },
        function(error) {
            console.log(error);
        });
        
        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }
    }
]);