import React from 'react'
import {Icon, Input} from 'semantic-ui-react'
export const Search = ({placeholder,handleChange}) => {
    return (
        <Input
            icon={< Icon name = 'search' inverted circular link />}
            placeholder={placeholder}
            fluid
            onChange={handleChange}/>
    )
}
