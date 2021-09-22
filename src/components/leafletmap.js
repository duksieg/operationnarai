
import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import L from 'leaflet'
import * as iconcustom from './mapicon'


class LeafletMap extends React.Component {


  renderuserfromdata() {
    let temparry = []
    let result = this.props.user
    if (result != null) {
      result.records.forEach(record => {
        try {
          let pointlatlng
          if (record.pointlatlng != "" && record.pointlatlng != "#N/A") {
            pointlatlng = record.pointlatlng.trim().replace(' ', '').split(',')
            pointlatlng[0] = pointlatlng[0].substring(0, (pointlatlng[0].indexOf('.')) + 7)
            pointlatlng[1] = pointlatlng[1].substring(0, (pointlatlng[1].indexOf('.')) + 7)
          }
          if (record.dv.includes('1')) {
            temparry.push(<Marker key={record.pointno} position={L.latLng(pointlatlng[0], pointlatlng[1])} icon={iconcustom.blueIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.dv.includes('2')) {
            temparry.push(<Marker key={record.pointno} position={L.latLng(pointlatlng[0], pointlatlng[1])} icon={iconcustom.greenIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.dv.includes('3')) {
            temparry.push(<Marker key={record.pointno} position={L.latLng(pointlatlng[0], pointlatlng[1])} icon={iconcustom.blackIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.dv.includes('4')) {
            temparry.push(<Marker key={record.pointno} position={L.latLng(pointlatlng[0], pointlatlng[1])} icon={iconcustom.greyIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.dv.includes('5')) {
            temparry.push(<Marker key={record.pointno} position={L.latLng(pointlatlng[0], pointlatlng[1])} icon={iconcustom.redIcon} >
              <Popup>
                รหัสจุดค้นที่:{record.pointno}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          } else if (record.dv.includes('6')) {
            temparry.push(<Marker key={record.pointno} position={L.latLng(pointlatlng[0], pointlatlng[1])} icon={iconcustom.yellowIcon}>
              <Popup>
                รหัสจุดค้นที่:{record.pointno}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
              </Popup>
            </Marker>)
          }
        } catch (err) {
          console.log(record.pointno + 'latlng not in format')
        }
      })
    }

    return temparry
  }


  render() {
    return (
      <MapContainer center={[13.798995, 100.562988]} zoom={10} style={{ height: '600px' }}>
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



