import React from 'react'
import PropTypes from 'prop-types'
import AutosizeInput from 'react-input-autosize'
import styled from 'styled-components'

import { Input } from './EntitiesList'
import { ThemeContext } from './App'

const AttributeInputs = ({
    nameObject,
    attribute,
    attributeName,
    attrWithNum,
}) => {
    const maxLength = 20

    const {
        handleChangeAttribute,
        handleChangeAttributeName,
    } = React.useContext(ThemeContext)

    return (
        <Attribute>
            {!attributeName && !attribute ? (
                <Input
                    placeholder="..."
                    onChange={e =>
                        handleChangeAttributeName({
                            e,
                            attrWithNum,
                            nameObject,
                        })
                    }
                />
            ) : (
                <>
                    <AutosizeInput
                        autoFocus
                        maxLength={maxLength}
                        name="form-field-name"
                        value={attributeName}
                        inputStyle={{
                            font: '300 18px sans-serif',
                            border: 'none',
                            outline: 'none',
                        }}
                        onChange={e =>
                            handleChangeAttributeName({
                                e,
                                attrWithNum,
                                nameObject,
                            })
                        }
                    />
                    <div style={{ margin: '0 2px' }}>
                        {attributeName || attribute ? ':' : ''}
                    </div>
                    <InputAttribute
                        value={attribute}
                        maxLength={maxLength}
                        onChange={e =>
                            handleChangeAttribute({
                                e,
                                attrWithNum,
                                nameObject,
                            })
                        }
                    />
                </>
            )}
        </Attribute>
    )
}

AttributeInputs.propTypes = {
    nameObject: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired,
    attrWithNum: PropTypes.string.isRequired,
    attributeName: PropTypes.string.isRequired,
}

export const InputAttribute = styled.input`
    color: #8317db;
    border: none;
    outline: none;
    width: 200px;
    font: 300 18px sans-serif;
`

const Attribute = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding-top: 5px;
`

export default AttributeInputs
