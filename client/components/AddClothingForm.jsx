import React from 'react'
import {connect} from 'react-redux'

import { getAllClothing } from '../api'
import { addClothingItem } from '../api'


class AddClothingForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitted: false,
      message: '',
      newItem: {}
    }
  }


  handleChange (e) {
    let newItem = this.state.newItem
    newItem[e.target.name] = e.target.value
    this.setState({newItem})
    console.log(newItem);
  }

  handleSubmit (e) {
    e.preventDefault()
    addClothingItem(this.state.newItem, this.submitted.bind(this))
  }

  submitted ()  {
    this.setState({submitted: true, message: 'Your item has been submitted!'})
  }

  refreshForm () {
    this.setState({submitted: false, message: ''})
  }

  renderMessage () {
    return
      <div>
        <h4 className="submit-message">{this.state.message}</h4>
        <button onClick={(e) => this.refreshForm()}>Start New Form</button>
      </div>
  }

  renderForm () {
    return (
      <form className='add-clothing-form' onSubmit={(e) => this.handleSubmit(e)}>
        <h4>Add a new clothing item</h4>

        <label className="add-clothing-input" htmlFor="name"> Item Title: </label>
          <input type='text' id='title' name='title' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Size: </label>
          <input type='text' id='size_id' name='size_id' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Brand: </label>
          <input type='text' id='brand_id' name='brand_id' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Style: </label>
          <input type='text' id='style_id' name='style_id' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Condition: </label>
          <input type='text' id='condition_id' name='condition_id' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Status: </label>
          <input type='text' id='status_id' name='status_id' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Photo 1: </label>
          <input type='text' id='photo1' name='photo1' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Photo 2: </label>
          <input type='text' id='photo2' name='photo2' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Photo 3: </label>
          <input type='text' id='photo3' name='photo3' onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Description: </label>
          <textarea name="description" onChange={(e) => this.handleChange(e)} />

        <label className="add-clothing-input" htmlFor="name"> Item Keywords: </label>
          <textarea name="keywords" onChange={(e) => this.handleChange(e)} />

        <div className="add-clothing-sumbit">
          <button className="btn" type='submit' id='submit' value='Submit New Clothing Item'>Submit New Clothing Item</button>
        </div>
      </form>
    )
  }

  render () {
    return (
      <div className = 'add-clothing-form-container container'>
        {this.state.submitted ? this.renderMessage() : this.renderForm() }
      </div>
    )
  }

}


export default connect()(AddClothingForm)
