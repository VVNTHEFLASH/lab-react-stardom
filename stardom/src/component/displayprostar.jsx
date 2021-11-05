import React, { Component } from 'react';
import './displayprostar.css';
import prostar from '../resources/prostars.json';

export default class Displayprostar extends Component {

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
        const data = this.state.prostar;
        const mapProstar = data.map(prostar => (
            <tr key='prostar.id'>
                <td>
                    <img src={prostar.pictureUrl} alt=""/>
                </td>
                <td>
                    {prostar.name}
                </td>
                <td>
                    {prostar.popularity}
                </td>
                <td>
                    <button className='del-btn'>Delete</button>
                </td>
            </tr>
        ))
        return mapProstar;
    }

    addRandomProstar = () => {
        let newArr = prostar.slice(5, prostar.length)
        console.log(newArr);
        let random = Math.floor(Math.random() * newArr.length)
        console.log('random', newArr[random]);
        this.setState({ prostar: [...this.state.prostar, newArr[random]] });
    }
    sortByName = () => {
        let sortedValue = prostar.sort((a, b) => a.name.localeCompare(b.name))
        console.log(prostar.sort((a, b) => a.name.localeCompare(b.name)));
        this.setState({
            prostar: sortedValue
        })
    }
    soryByPopularity = () => {
        let sortPopularity = prostar.sort((a,b) => b.popularity - a.popularity);
        this.setState({
            prostar: sortPopularity
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='buttons'>
                    <button className="button-1" onClick={this.addRandomProstar}>
                        Add Random ProStar
                    </button>
                    <button className="button-2" onClick={this.sortByName}>
                        Sort By Name
                        </button>
                    <button className="button-3" onClick={this.soryByPopularity}>
                        Sort By Popularity
                    </button>
                </div>
                <div className='table-container'>
                    <table className='table-content'>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProstar()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
