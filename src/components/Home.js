import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <>
        <div className='row'>
            <div className='col-lg-4 col-md-10 col-sm-12 align-item-md-center'>
                <h1 className='mx-auto'>PROTFOLIO</h1>
                <p className='ls-12 mt-12'>Photo M3</p>
                <img alt="dog" src="\images\dog-puppy-on-garden-royalty-free-image-1586966191.jpg" width={500.83} height={500}/>
            </div>
        </div>
        </>
    )
  }
}
