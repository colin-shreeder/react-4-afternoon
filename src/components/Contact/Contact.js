import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className='title'>Contact Information of Utah State University:</h1>
        <div className='sub_box'>
          <p><strong>Address:</strong> 1400 Old Main Hill
Logan, Utah 84322-1400</p>
          <p><strong>Number:</strong> 1-435-797-1162</p>
          <p><strong>Email:</strong> admit@usu.edu</p>
        </div>
      </div>
    )
  }
}