import React from 'react'
import {
    Grid,
    Card,
    Icon,
    Image   
    
} from 'semantic-ui-react'
export const CardList = (props) => {
    return (
        <Grid>
            <Grid.Row columns={3} >
                {
                    props
                    .pokemon
                    .map(poke => {

                        const id = poke
                            .url
                            .substr(34, poke.url.length - 34);
                        return (
                            <Grid.Column key={poke.name} className="my-column" mobile={16} tablet={8} computer={4}>
                                <Card className="my-card">
                                    <Image
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                        wrapped
                                        ui={false}/>
                                    <Card.Content>
                                        <Card.Header>{poke.name}</Card.Header>

                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user'/>
                                            Poke Id {id}
                                        </a>
                                    </Card.Content>
                                </Card>

                            </Grid.Column>
                        )
                    })
}
            </Grid.Row>
            <br/>
        </Grid>
    )
}
