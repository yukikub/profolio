import React, { Component } from 'react'



export default class Home extends Component {
  render() {
    return (
        <>
        <div className='row'>
            <div className='me-auto col-lg-4 col-md-10 col-sm-12 align-item-md-center'>
                <h1 className='mx-auto'>PROTFOLIO</h1>
                <p className='ls-12 mt-12'>Photo M3</p>
                <img alt="dog" src="\images\dog-puppy-on-garden-royalty-free-image-1586966191.jpg" width={600.83} height={600}/>
            </div>
            <div className='ms-auto col-lg-6 col-md-6 col-sm-8'>
                <img alt=" " src="\images\parvovirus_thumb_1647089326234_1647089335606.webp" width={400.721} height={230}/>
            </div>
            <div className='ms-auto col-lg-4 col-md-6 col-sm-12'>
                <img alt=" " src="\images\main-qimg-f15cf04df30418989d9afff851ebf96b-lq.jpg" />
            </div>
        </div>
        </>
    )
  }
}
