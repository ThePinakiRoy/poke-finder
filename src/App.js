import React, {Component} from 'react'
import {Container, Header, Segment} from 'semantic-ui-react'
import {CardList} from './components/card-list/CardList'
import {Search} from './components/search/Search'
import Pagination from './components/Pagination'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            searchField: '',
            pageOfItems: []
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
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        const {pokemons, searchField , pageOfItems} = this.state;
        let filtered = pageOfItems.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()));
        
        return (
            <Container text className="text-center">
                <Segment stacked>
                    <Header as='h1' className="text-center fnt poke-text">Pokémon</Header>
                    <Search
                        placeholder={'Search Pokémon...'}
                        handleChange={this.handleChange} />
                </Segment>
                <CardList pokemon={filtered}/>
                <Pagination items={pokemons} onChangePage={this.onChangePage} />
            </Container>
        )
    }
}
