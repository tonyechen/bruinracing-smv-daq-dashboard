import React, { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { getAllTrials } from '../database/db';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Container } from '@mui/material';
import { useSelector } from 'react-redux';

const Map = (props) => {
    const [google, setGoogle] = useState(null);
    const [map, setMap] = useState(null);
    const [lat, setLat] = useState(34.0689);
    const [long, setLong] = useState(-118.4552);
    const [heatmapData, setHeatMapData] = useState([]);
    const liveData = useSelector((state) => state.trialData.data);

    const [heatmap, setHeatmap] = useState(null);

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
            disableDefaultUI: true,
        };

        loader
            .load()
            .then((google) => {
                console.log('google map loading...');
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
                console.log('falied to fetch google map: ', e);
            });
        // getAllTrials();
    }, []);

    useEffect(() => {
        if (google) {
            let mapData = [];
            for (const index in liveData) {
                mapData.push({
                    location: new google.maps.LatLng(
                        liveData[index].latitude,
                        liveData[index].longtitude
                    ),
                    weight: liveData[index]['RPM'],
                });
            }

            setHeatMapData(mapData);

            let heatmap = new google.maps.visualization.HeatmapLayer({
                data: mapData,
                map: map
            });

            map.setCenter({
                lat: mapData[mapData.length - 1].lat,
                lng: mapData[mapData.length - 1].long,
            });

            // heatmap.setMap(map);
        }
    }, [liveData]);

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

            map.setCenter({ lat: lat, lng: long });

            heatmap.setMap(map);
        }
    }

    function handleResize() {
        if (google) {
            let bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < heatmapData.length; i++) {
                bounds.extend(heatmapData[i].location);
            }
            map.fitBounds(bounds);
        }
    }

    console.log('i refreshed');

    return (
        <Container sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <div id="map">Map</div>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{ position: 'absolute', left: '30px', bottom: '10px' }}
            >
                <Button onClick={handleClick}>Add</Button>
                <Button onClick={handleResize}>resize</Button>
            </ButtonGroup>
        </Container>
    );
};

export default Map;
