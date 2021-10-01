import * as React from "react"
import { ShimmerSimpleGallery, ShimmerThumbnail } from 'react-shimmer-effects'
import Totalview from "../components/totalview"
import Timer from '../components/time'
import LeafletMap from "../components/leafletmap"
import Topuser from "../components/topuser"
import Charttotalguns from '../components/gunchart'
import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// markup

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loading: true,
      all: null,
      looptime:new Date()
    }
  }
  
  getdataRow = async () => {
    let result
    try {
      let resp = await fetch(process.env.GATSBY_APP_INFO)
      result = await resp.json()
    } catch (err) {
      console.error(err)
    }
    return result
  }

  async componentDidMount() {
    try {
      let totalItem = await this.getdataRow()
      let response = await fetch(process.env.GATSBY_APP_DETAIL)
      let jsonresponse = await response.json()
      //arrystatus = jsonresponse.records
      if (jsonresponse != null) {
        this.setState({ user: jsonresponse, loading: false })
      }
      if (totalItem != null) {
        this.setState(
          {
            all: totalItem
          }
        )
      }
    } catch (err) {
      this.setState({ loading: false })
      console.error(err)
    }
  }

  gettop5rows() {
    let topuser = []
    let maximumRow = 6
    let tempvalue = {}
    let sortable = [];

    if (this.state.user != null) {
      let allrows = this.state.user.records
      //load user datarow to object as index:total
      for (let index = 0; index < allrows.length; index++) {
        if (allrows[index].totalfound > 0 && allrows[index].pointno != null) {
          let total = allrows[index].totalfound
          { tempvalue[index] = total }
        } else {
          { tempvalue[index] = 0 }
        }
      }

      //looptemp to sortable 
      for (var indexin in tempvalue) {
        sortable.push([indexin, tempvalue[indexin]]);
      }
      sortable.sort(function (a, b) {
        return a[1] - b[1];
      });
      let sorted = sortable.reverse()
      for (let index = 0; index < maximumRow; index++) {
        let sortedIndex = sorted[index]

        topuser.push(allrows[sortedIndex[0]])
      }
      return topuser

    } else {
      console.log('user is null')
    }
  }

  updatetimepage(){
    setInterval(()=>{
      window.location.reload(false);
        this.setState({looptime:new Date()})
    },180000)
}

  render() {
    if (typeof window !== 'undefined'){
    { 
      this.updatetimepage()}
   }
    if (this.state.user == null) return <ShimmerSimpleGallery card imageHeight={100} row={2} col={3} gap={30} caption />
    return (
      <div className={'container-fluid mt-4'}>
        <div className={'row'}> <Timer /></div>
        <div className={'row'}>
          <div className={'col'}>
            <Totalview overview={this.state.all == null ? <ShimmerSimpleGallery card imageHeight={100} row={1} col={4} caption /> : this.state.all}></Totalview>
          </div>
          <div className={'col'}>
            <div className={'row col-rows-2'}>
              <p className={'fs-1 text-center'}>เป้าที่มียอดสูงสุด</p>
              <Topuser user={!this.state.user || this.state.loading ? <ShimmerSimpleGallery card imageHeight={100} row={1} col={4} gap={10} caption /> : this.gettop5rows()}> </Topuser>
            </div>
          </div>
        </div>

        <div className={'row mt-3'}>
          <div className="col">
            <Charttotalguns overview={this.state.all == null ? <ShimmerSimpleGallery card imageHeight={100} row={1} col={4} caption /> : this.state.all} ></Charttotalguns>
          </div>
          <div className={'col'}>
          <LeafletMap user={!this.state.user || this.state.loading ? <ShimmerThumbnail rounded /> : this.state.user} ></LeafletMap>
          </div>
        </div>
      </div>
    )

  }
}



export default IndexPage
