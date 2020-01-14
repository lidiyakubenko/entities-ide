import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AutosizeInput from 'react-input-autosize'
import { ThemeContext } from './App'

const FieldInputs = ({ entityName, field, index }) => {
    let nameInput = React.createRef()
    const { handleChangeFieldName } = React.useContext(ThemeContext)

    const handleFocusInput = e => {
        nameInput.focus()
    }
    return (
        <FieldWrap>
            <Content onClick={handleFocusInput}>
                <Kind>field</Kind>
                <AutosizeInput
                    autoFocus
                    maxLength={15}
                    value={field}
                    inputStyle={{
                        font: '300 18px sans-serif',
                        outline: 'none',
                        border: 'none',
                    }}
                    ref={input => {
                        nameInput = input
                    }}
                    onChange={e =>
                        handleChangeFieldName({ e, index, entityName })
                    }
                />
            </Content>
        </FieldWrap>
    )
}

FieldInputs.propTypes = {
    prop: PropTypes.object,
}

const FieldWrap = styled.div`
    padding-left: 24px;
    padding-bottom: 8px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    cursor: text;
`

const Kind = styled.div`
    font-style: italic;
    color: #7246de;
    margin-right: 10px;
`

export default FieldInputs

