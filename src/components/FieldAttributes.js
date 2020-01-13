import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EntityField from './EntityField'

const FieldAttributes = ({}) => {
    return arr.map(name => <EntityField />)
}

FieldAttributes.propTypes = {
    entities: PropTypes.object.isRequired,
    entityNames: PropTypes.array.isRequired,
}

const Wrap = styled.div``

export default FieldAttributes
