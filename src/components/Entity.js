import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FieldInputs from './FieldInputs'
import { Input } from './EntitiesList'
import { ThemeContext } from './App'

const Entity = ({ entityName, entityFields }) => {
    const [emptyField, setEmptyField] = React.useState('')
    const { createNewField } = React.useContext(ThemeContext)

    const handleChangeEmptyInput = e => {
        createNewField({ e, entityName, nextNumber: entityFields.length + 1})
        setEmptyField('')
    }

    return (
        <WrapperObj>
            <NameWrap>
                <Kind>object</Kind>
                <Name>{entityName}</Name>
                <BraceTop>{`{`}</BraceTop>
            </NameWrap>
            {entityFields.map((field,index) => (
                <div key={field}>
                    <FieldWrap>
                        <FieldInputs
                            entityName={entityName}
                            index={index}
                            field={field}
                        />
                        <SubBraceTop>{`{`}</SubBraceTop>
                    </FieldWrap>

                    <SubBraceBottom>{`}`}</SubBraceBottom>
                </div>
            ))}
            <Input
                value={emptyField}
                onChange={handleChangeEmptyInput}
            />
            <BraceBottom>{`}`}</BraceBottom>
        </WrapperObj>
    )
}

Entity.propTypes = {
    entity: PropTypes.object.isRequired,
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

const FieldWrap = styled.div`
    padding-left: 24px;
    padding-bottom: 8px;
    display: flex;
    align-items: flex-end;
`

const SubBraceTop = styled.div`
    margin-left: 12px;
    margin-bottom: 2px;
`

const SubBraceBottom = styled.div`
    padding-top: 8px;
    padding-left: 24px;
`

const Attribute = styled.div`
    padding-left: 36px;
`

export default Entity
