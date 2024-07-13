var latitude=22.7868542,longitude=88.3643296
mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[latitude,longitude],
    zoom:5
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)

var img1=document.querySelector("#Amber")
var marker1=new mapboxgl.Marker({element:img1}).setLngLat([75.85133,26.98547]).addTo(map)
var img1=document.querySelector("#Gateway")
var marker1=new mapboxgl.Marker({element:img1}).setLngLat([72.835163,18.920180]).addTo(map)
var img1=document.querySelector("#India")
var marker1=new mapboxgl.Marker({element:img1}).setLngLat([77.22931,28.61495]).addTo(map)
var img1=document.querySelector("#Lotus")
var marker1=new mapboxgl.Marker({element:img1}).setLngLat([77.25880,28.553501]).addTo(map)
var img1=document.querySelector("#Victoria")
var marker1=new mapboxgl.Marker({element:img1}).setLngLat([88.342785,22.546170]).addTo(map)