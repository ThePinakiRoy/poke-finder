import React, {Component} from 'react'
import {Container, Header, Segment} from 'semantic-ui-react'
import {CardList} from './components/card-list/CardList'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/model/pokemondata.json').then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data.results);
            this.setState({pokemon: data.results})
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <Container text>
              <Segment stacked><Header as='h2' className="text-center">PokeMon</Header></Segment>
                
                <CardList pokemon={this.state.pokemon}/>

            </Container>
        )
    }
}
