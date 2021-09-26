
import L from 'leaflet'
import greenicon from '../images/marker-icon-green.png'
import blackicon from '../images/marker-icon-black.png'
import blueicon from '../images/marker-icon-blue.png'
import redicon from '../images/marker-icon-red.png'
import yellowicon from '../images/marker-icon-yellow.png'
import greyicon from '../images/marker-icon-grey.png'

    export const greenIcon = new L.icon({
      iconUrl: greenicon,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    export const blackIcon = new L.icon({
      iconUrl: blackicon,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });
    export const greyIcon = new L.icon({
      iconUrl: greyicon,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });
    export const redIcon = new L.icon({
      iconUrl: redicon,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });
    export const blueIcon = new L.icon({
      iconUrl: blueicon,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });
    export const yellowIcon = new L.icon({
      iconUrl: yellowicon,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    });
    // let customicon = { yellowIcon, greyIcon, blackIcon, greenIcon, blackIcon }
    // return customicon
  




