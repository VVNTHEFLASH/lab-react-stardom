import React, { Component } from 'react';
import prostar from '../resources/prostars.json';
import "../components/displayProstar.css";

export default class DisplayProstar extends Component {
    
    constructor() {
        super();
        this.state = {
            prostar: [
                prostar[0],
                prostar[1],
                prostar[2],
                prostar[3],
                prostar[4]
            ]
        }
    }

    renderProstar = () => {
        let data = this.state.prostar;
        return(
            <>
            {data.map((item,key) => {
                return(
                    <tr key={key} className="rowTable">
                        <td><img src={item.pictureUrl} alt={item.id} className="image" /></td>
                        <td>{item.name}</td>
                        <td>{item.popularity}</td>
                        <td><button className="deleteBtn" onClick={this.deleteProstar} value={item.id} >Delete</button></td>
                    </tr>
                )
            })}
            </>
        )
    }

    addRandomProstar = () => {
        let newArr = prostar.slice(5, prostar.length);
        let random = Math.floor(Math.random() * newArr.length)
        this.setState({ prostar: [...this.state.prostar, newArr[random]] });
    }

    sortByName = () => {
        let sortedValue = this.state.prostar.sort((a,b) => a.name.localeCompare(b.name))

        this.setState({ prostar: sortedValue })
    }

    sortByPopularity = () => {
        let sortedPopularity = this.state.prostar.sort((a,b) => b.popularity - a.popularity)
        this.setState({ prostar: sortedPopularity })
    }

    deleteProstar = (e) => {
        let deletedValue = this.state.prostar.filter((item) =>{
            return item.id !== e.target.value;
        })
        this.setState({ prostar: deletedValue })
    }
  render() {
    return (
        <>
        <div className='sortBtn'>
          <button
          onClick={this.addRandomProstar}>Add Random prostar</button>
          <button
          onClick={this.sortByPopularity}>Sort by Popularity</button>
          <button
          onClick={this.sortByName}>Sort by Name</button>
        </div>
      <div className='table-container'>
          <table className='table'>
              <thead>
                  <tr>
                      <th>picture</th>
                      <th>name</th>
                      <th>popularity</th>
                      <th>action</th>
                  </tr>
              </thead>
              <tbody>
                  <this.renderProstar />
              </tbody>
          </table>
      </div>
      </>
    )
  }
}
