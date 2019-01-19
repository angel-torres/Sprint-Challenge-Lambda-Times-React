import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      currentImage: '',
    }
  }
  componentDidMount(){
    setInterval(this.rightClick, 3000)
    this.setState({
      carouselImages: carouselData,
      currentImage: carouselData[0],
    })
  }

  leftClick = () => {

    if (this.state.currentImage === carouselData[3]) {
      this.setState({
        currentImage: carouselData[0]
      }) 
    } else if (this.state.currentImage === carouselData[0]) {
      this.setState({
        currentImage: carouselData[1]
      }) 
    } else if (this.state.currentImage === carouselData[1]) {
      this.setState({
        currentImage: carouselData[2]
      }) 
    } else if (this.state.currentImage === carouselData[2]) {
      this.setState({
        currentImage: carouselData[3]
      }) 
    }
  }

  rightClick = () => {
    if (this.state.currentImage === carouselData[0]) {
      this.setState({
        currentImage: carouselData[3]
      }) 
    } else if (this.state.currentImage === carouselData[3]) {
      this.setState({
        currentImage: carouselData[2]
      }) 
    } else if (this.state.currentImage === carouselData[2]) {
      this.setState({
        currentImage: carouselData[1]
      }) 
    } else if (this.state.currentImage === carouselData[1]) {
      this.setState({
        currentImage: carouselData[0]
      }) 
    }
  }

  selectedImage = () => {
    return <img src={this.state.currentImage} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div>{this.selectedImage()}</div>
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}