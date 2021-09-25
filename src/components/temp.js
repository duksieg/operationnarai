
import React,{useState} from "react";
import {  Popup, TileLayer, Marker, MapContainer,useMapEvent ,MapConsumer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L, { map } from 'leaflet'
import Mapicon from '../components/mapicon'
const isBrowser = typeof window !== "undefined"


function Mapfly(coor) {
  const map = useMapEvent('click', () => {
    map.flyTo(coor,6)
  })
  return null
}



function usemapcenter(props,placeid) {
  try {
    let record = props.user.records
    let latlng 

    record.find((element) => {
      if(element.pointlatlng != null && (element.pointlatlng == placeid)){
         latlng = element.pointlatlng
      }else{
        latlng = '13.798995, 100.562988'
      }
    })
    console.log('latlng = '+latlng)
    if(latlng != null){
      console.log(latlng)
    latlng = latlng.replace(' ', '').split(',')
    let lat = latlng[0]
    let lng = latlng[1]
    latlng = L.latLng(lat, lng)
    const map = useMapEvent('click', () => {
      map.flyTo(latlng,6)
    })
    }else{
      console.log('latlng is '+latlng)
    }
  } catch (err) {
    console.error(err)
  }
}



function renderMarker(prop){
  let temparry = []
    const { greyIcon, yellowIcon, blueIcon, greenIcon, } = Mapicon()
    let result = prop.user
    if (result != null) {
      result.records.forEach(record => {
        try {
          let pointlatlng
          let latlng
          if (record.pointlatlng != "" && record.pointlatlng != "#N/A") {
            pointlatlng = record.pointlatlng.replace(' ', '').split(',')
            pointlatlng[0] = pointlatlng[0].substring(0, (pointlatlng[0].indexOf('.')) + 7)
            pointlatlng[1] = pointlatlng[1].substring(0, (pointlatlng[1].indexOf('.')) + 7)
            latlng = L.latLng(pointlatlng[0], pointlatlng[1])
            if (record.status == 'before') {
              temparry.push(<Marker key={record.pointno} position={latlng} icon={blueIcon} >
                <Popup>
                  รหัสจุดค้นที่:{record.pointno} สถานะ:{record.status}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
                </Popup>
              </Marker>)
            } else if (record.status == 'after') {
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
            } else if (record.status == 'current') {
              temparry.push(<Marker key={record.pointno} position={latlng} icon={yellowIcon}>
                <Popup>
                  รหัสจุดค้นที่:{record.pointno} สถานะ:{record.status}  กก.ที่รับผิดชอบ:{record.dv} รวมตรวจค้นได้:{record.totalfound}
                </Popup>
              </Marker>)
            }
          } else {
          }
        } catch (err) {
          // console.log(record.pointno + 'latlng not in format')
        }
      })
    }
    return temparry
}

export default function LeafletMap(props){
  const [pointid, setpointID] = useState("");
  const record = useState(props.user.records)

  const handleSubmit = (evt) => {
    evt.preventDefault();
    Usemapcenter(props,pointid)
  }


    return (
      <>
      {/* <form onSubmit={this.usemapcenter(this)}> */}
      <form onSubmit={handleSubmit}>
        <div className="form d-flex justify-content-center">
          <div className="col-md-3">
            <input type="text" class="form-control"  value={pointid} onChange={e=>setpointID(e.target.value)}
                placeholder="รหัสเป้า" />
          </div>
          <div className="col-md-2">
            <div className="btn btn-secondary" type="submit" value="Submit" variant="primary" >
              Search
            </div>
          </div>
        </div>
        </form>
        {/* </form>  */}
         <MapContainer center={[13.798995, 100.562988]} zoom={6}  whenCreated={} style={{ height: '600px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {renderMarker(props)}
          <MapConsumer>
        {(map) => {
          console.log('map center:', map.flyTo([13.798995, 100.562988],6))
          return null
        }}
      </MapConsumer>
        </MapContainer>
      </>
    );
  
}



