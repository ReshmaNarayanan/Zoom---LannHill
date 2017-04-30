var cities = [
    {
        place : 'Al Barsha',
        desc : 'Villa Lantana 2',
        lat : 25.0779515,
        long : 55.2389574
    },
    {
        place : 'Al Barsha',
        desc : 'Villa Lantana',
        lat : 25.0746196,
        long : 55.1653189
    },
    {
        place : 'Al Barsha',
        desc : 'Villa Lantana Show Villa',
        lat : 25.0764127,
        long : 55.1614045
    },
    {
        place : 'Al Barsha',
        desc : 'Mira 3',
        lat : 25.007111,
        long : 55.305462
    },
    {
        place : 'Al Barsha',
        desc : 'La Villa Najd',
        lat : 25.120469,
        long : 55.2029887
    }
];

app.controller('MapCtrl', function ($scope) {

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
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.place
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});