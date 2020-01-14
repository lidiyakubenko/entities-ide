import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FieldInputs from './FieldInputs'
import { ThemeContext } from './App'
import JSONInput from 'react-json-editor-ajrm'

const Entity = ({ entityName, entityFields }) => {
    const [jsonHeight, setJsonHeight] = React.useState(100)
    const [emptyField, setEmptyField] = React.useState('')
    const { createNewField } = React.useContext(ThemeContext)

    const handleChangeEmptyInput = e => {
        createNewField({ e, entityName, nextNumber: entityFields.length + 1 })
        setEmptyField('')
    }

    const handleChange = e => {
        console.log(e)
    }

    return (
        <WrapperObj>
            <NameWrap>
                <Kind>object</Kind>
                <Name>{entityName}</Name>
                <BraceTop>{'{'}</BraceTop>
            </NameWrap>
            {entityFields.map((field, index) => (
                <div key={index}>
                    <FieldInputs
                        entityName={entityName}
                        index={index}
                        field={field}
                    />
                    <WrapperJSON>
                        <JSONInput
                            confirmGood={false}
                            id="entity-attributes"
                            height={jsonHeight}
                            width="100%"
                            onChange={handleChange}
                            placeholder={{ type: '' }}
                            style={{
                                labelColumn: { color: 'red' },
                                warningBox: { display: 'none' },
                                body: { height: '100%' },
                            }}
                        />
                    </WrapperJSON>
                </div>
            ))}
            <Input
                placeholder="..."
                value={emptyField}
                onChange={handleChangeEmptyInput}
            />
            <BraceBottom>{'}'}</BraceBottom>
        </WrapperObj>
    )
}

Entity.propTypes = {
    entityName: PropTypes.string.isRequired,
    entityFields: PropTypes.array.isRequired,
}

const WrapperObj = styled.div`
    padding-top: 32px;
    display: flex;
    flex-flow: column;
    max-width: 600px;
`

const NameWrap = styled.div`
    padding-bottom: 8px;
    display: flex;
    align-items: flex-end;
`

const Kind = styled.div`
    font-style: italic;
    color: #ff4500;
`

const Name = styled.div`
    text-transform: capitalize;
    font-weight: 600;
    padding-left: 12px;
`

const BraceTop = styled.div`
    font-weight: 600;
    margin-left: 12px;
    margin-bottom: 2px;
`

const BraceBottom = styled.div`
    padding-top: 10px;
    font-weight: 600;
`
const Input = styled.input`
    margin-top: 5px;
    outline: none;
    width: 100%;
    font: 300 18px sans-serif;

    ::placeholder {
        margin-left: 15px;
        color: red;
    }
`

const SubBraceTop = styled.div`
    margin-left: 12px;
    margin-bottom: 2px;
`

const SubBraceBottom = styled.div`
    padding-top: 8px;
    padding-left: 24px;
`
const WrapperJSON = styled.div``

export default Entity
