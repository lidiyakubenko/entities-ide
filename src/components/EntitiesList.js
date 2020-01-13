import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Entity from './Entity'

const EntitiesList = ({ entities, entityNames }) => {
    return entityNames.map(name => (
        <Entity
            key={name}
            entityName={name}
            entityFields={entities[name]}
        />
    ))
}

EntitiesList.propTypes = {
    entities: PropTypes.object.isRequired,
    entityNames: PropTypes.array.isRequired,
}

export const Input = styled.input`
    outline: none;
    width: 200px;
    font: 300 18px sans-serif;
`

export default EntitiesList
