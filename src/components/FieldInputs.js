import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AutosizeInput from 'react-input-autosize'
import { ThemeContext } from './App'

const FieldInputs = ({ entityName, field, index }) => {
    const { handleChangeFieldName } = React.useContext(ThemeContext)

    return (
        <AutosizeInput
            autoFocus
            maxLength={15}
            value={field}
            inputStyle={{
                font: '300 18px sans-serif',
                outline: 'none',
            }}
            onChange={e => handleChangeFieldName({ e, index, entityName })}
        />
    )
}

FieldInputs.propTypes = {
    prop: PropTypes.object,
}

export default FieldInputs
