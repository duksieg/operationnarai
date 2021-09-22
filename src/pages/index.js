import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {ShimmerSimpleGallery,ShimmerThumbnail} from 'react-shimmer-effects'
import Totalview from "../components/totalview"
import Mainstatus from "../components/mainstatus"
import Timer from '../components/time'
import LeafletMap from "../components/leafletmap"
// markup
class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user:null,
      loading:true
    }
  }

  async componentDidMount() {
   // let arrystatus = []
    try {
        let response = await fetch('http://localhost:4000/detail')
        let jsonresponse = await response.json()
        //arrystatus = jsonresponse.records
       if(jsonresponse!=null){
        this.setState({ user:jsonresponse ,loading:false})
       }
    } catch (err) {
      this.setState({ loading:false})
        console.error(err)
    }

}

  render(){
      if(this.state.user ==null) return <ShimmerSimpleGallery card imageHeight={100} row={2} col={3} gap={30} caption /> 
      return (
        <div className={'container-fluid mt-4'}>
          <div className = {'row'}> <Timer/></div>
          <div className={'row'}>
            <div className={'col'}>
            <Totalview></Totalview>
            </div>
            <div className={'col'}>
            <LeafletMap user= {!this.state.user || this.state.loading ?  <ShimmerThumbnail   rounded />:this.state.user } ></LeafletMap>
            </div>
          </div>
          <div className="row">
            <Mainstatus user={!this.state.user  || this.state.loading  ? <ShimmerSimpleGallery card imageHeight={100} row={2} col={3} gap={30} caption /> :this.state.user} ></Mainstatus>
          </div>
        </div>
      )
     
  }
}



export default IndexPage
