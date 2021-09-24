
import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet'
import Mapicon from '../components/mapicon'
const isBrowser = typeof window !== "undefined"


class LeafletMap extends React.Component {

  renderuserfromdata() {
    let temparry = []
    const {greyIcon,yellowIcon,blueIcon,greenIcon,} = Mapicon()
    let result = this.props.user
    if (result != null) {

      result.records.forEach(record => {
        try {
          let pointlatlng
          let latlng
          if (record.pointlatlng != "" && record.pointlatlng != "#N/A") {
              pointlatlng = record.pointlatlng.replace(' ','').split(',')
              pointlatlng[0] = pointlatlng[0].substring(0, (pointlatlng[0].indexOf('.')) + 7)
             pointlatlng[1] = pointlatlng[1].substring(0, (pointlatlng[1].indexOf('.')) + 7)
              latlng =L.latLng(pointlatlng[0],pointlatlng[1])
          if (record.status=='before') {
            temparry.push(<Marker key={record.pointno} position={latlng} icon={blueIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno} สถานะ:{record.status}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.status=='after') {
            temparry.push(<Marker key={record.pointno} position={latlng} icon={greenIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno} สถานะ:{record.status} กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
           } else if (record.status != 'before' || record.status != 'after' || record.status != 'current') {
            temparry.push(<Marker key={record.pointno} position={latlng} icon={greyIcon} >
              <Popup>
               รหัสจุดค้นที่:{record.pointno} สถานะ:{record.status} กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.status=='current') {
            temparry.push(<Marker key={record.pointno} position={latlng} icon={yellowIcon}>
              <Popup>
                รหัสจุดค้นที่:{record.pointno} สถานะ:{record.status}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          }
        }else{
        }
        } catch (err) {
           // console.log(record.pointno + 'latlng not in format')
        }
      })
    }
    return temparry
  }

  getdirection(){

  }


  render() {
    return (
      <MapContainer center={[13.798995, 100.562988]} zoom={6} style={{ height:'600px'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.renderuserfromdata()}
      </MapContainer>
    );
  }

}
export default LeafletMap



