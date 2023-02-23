import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = (props) => {
    const [google, setGoogle] = useState(null);
    const [map, setMap] = useState(null);
    const [lat, setLat] = useState(34.0689);
    const [long, setLong] = useState(-118.4552);
    const [heatmapData, setHeatMapData] = useState([]);

    useEffect(() => {
        const loader = new Loader({
            apiKey: 'AIzaSyBNU6wqoSvC3BZ7C0nPwPJISmNhohZYLKI',
            version: 'weekly',
            libraries: ['places', 'visualization'],
        });

        const mapOptions = {
            center: {
                lat: 34.0689,
                lng: -118.4552,
            },
            zoom: 15,
        };

        loader
            .load()
            .then((google) => {
                setGoogle(google);
                setMap(
                    new google.maps.Map(
                        document.getElementById('map'),
                        mapOptions
                    )
                );
            })
            .catch((e) => {
                // do something
                console.log('falied to fetch google map');
            });
    }, []);

    function handleClick() {
        if (google) {
            setLat(lat + 0.0001);
            setHeatMapData([
                ...heatmapData,
                {
                    location: new google.maps.LatLng(lat, long),
                    weight: Math.floor(Math.random() * 1000),
                },
            ]);
            let heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatmapData,
            });
            console.log('bruh');
            heatmap.setMap(map);
        }
    }
    console.log('i refreshed');

    return (
        <>
            <div id="map">Map</div>
            <button onClick={handleClick}>button</button>
        </>
    );
};

export default Map;
