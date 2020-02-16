import React, {Component} from 'react'
import {Container, Header, Segment} from 'semantic-ui-react'
import {CardList} from './components/card-list/CardList'
import {Search} from './components/search/Search'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('./model/pokemondata.json').then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data.results);
            this.setState({pokemons: data.results})
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange = e =>{
        this.setState({searchField: e.target.value})
    }
    render() {
        const {pokemons, searchField} = this.state;
        const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <Container text>
                <Segment stacked>
                    <Header as='h1' className="text-center fnt poke-text">Pokémon</Header>
                    <Search
                        placeholder={'Search Pokémon...'}
                        handleChange={this.handleChange} />
                </Segment>
                <CardList pokemon={filtered}/>
            </Container>
        )
    }
}
