import axios from 'axios'
import React, { Component,Suspense} from 'react'
import Option from './Option'


export default class Body extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              value:"To generate lorum impsum",
              para:"",
              type:"text"
         }
     }
    
    
    buttonHandler=(e)=>{
        this.setState({value:"Loading......."})
        e.preventDefault();
        axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${this.state.para}&start-with-lorem=10&format=${this.state.type}`)
        .then((res)=>{
            this.setState({value:res.data})
        })
        .catch(err => {
            console.log(err)
        })
    } 


    paraHandler = (e) => {
    this.setState({para:e.target.value})
    }


    handleSelect = (e) =>{
    this.setState({type:e.target.value})
    }
  

    render() {
        return (
            <div>
                <div className="form">
                <form className="form__group field">
                    <input value={this.state.para} type="number" onChange={this.paraHandler} className="form__field"  placeholder="No" name="no" />
                    <label for="name" className="form__label" >Number</label>
                     <Option type={this.state.type} handleSelect={this.handleSelect}   />
                    <input type="submit" className="custom-btn btn-16"  onClick={this.buttonHandler} value="Submit"/>
                </form>
                </div>
                
               <p className="paragrah">{this.state.value}</p>
               
            </div>
        )
    }
}
