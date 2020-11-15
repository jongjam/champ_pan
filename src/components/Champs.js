import React, {Component} from "react";
import '../App.js';
export default class Champs extends Component {
    constructor() {
        super();
        this.state = {
            champion: []
        };
    }
        
    

    buildList = (data) => {
        this.setState({champion: data})
    }

    
    componentDidMount() {
        fetch("http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json")
        .then(response => 
        this.setState({champions: response.data }));
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.champion.map( (data) => (
                        <li key={data.key}> {data.id} </li> 
                        ))
                    }
                </ul>
            </div>
        );
    }


}