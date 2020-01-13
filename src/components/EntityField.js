import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AttributeInputs, { InputAttribute } from './AttributeInputs'
import { ThemeContext } from './App'

const EntityField = ({ entityName, entity, entityFields }) => {
    const { handleChangeAttribute } = React.useContext(ThemeContext)

    return (
        <Object>

            {entityFields.map(field =>
                field === 'type' ? (
                    <WrapType key={field}>
                        <div style={{ marginRight: 5 }}>type :</div>
                        <InputAttribute
                            maxLength={20}
                            onChange={e =>
                                handleChangeAttribute({
                                    e,
                                    attrWithNum: field,
                                    nameObject: entityName,
                                })
                            }
                            placeholder="enter type of object..."
                        />
                    </WrapType>
                ) : (
                    <AttributeInputs
                        key={entityName}
                        entityField={field}
                        entityName={entityName}
                        attribute={object[field].attribute}
                        attributeName={object[field].attributeName}
                    />
                )
            )}
            <BraceBottom>{`}`}</BraceBottom>
        </Object>
    )
}

EntityField.propTypes = {
    entityName: PropTypes.string.isRequired,
    entity: PropTypes.object.isRequired,
    entityFields: PropTypes.array.isRequired,
}

const Object = styled.div`
    padding-top: 30px;
    display: flex;
    flex-flow: column;
    max-width: 600px;
`


const BraceBottom = styled.div`
    padding-top: 10px;
    font-weight: 600;
`

const WrapType = styled.div`
    display: flex;
    align-items: center;
`
export default EntityField
