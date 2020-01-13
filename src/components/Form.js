import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = ({ createEntity }) => {
    const [entityName, setEntityName] = React.useState('')

    const handleChangeObjectName = ({ currentTarget }) => {
        const { value } = currentTarget
        setEntityName(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        createEntity(entityName)
        setEntityName('')
    }

    return (
        <Wrapper>
            <Content>
                <Title>Create new object</Title>
                <FormStyled onSubmit={handleSubmit}>
                    <Input
                        placeholder="Name"
                        maxLenght={15}
                        value={entityName}
                        onChange={handleChangeObjectName}
                    />
                    <Button>Ok</Button>
                </FormStyled>
            </Content>
        </Wrapper>
    )
}

Form.propTypes = {
    createEntity: PropTypes.func.isRequired,
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: 50px;
    background: linear-gradient(#4b84e1, #8317db);
    border-radius: 0 0 0 30px;
`
const Content = styled.div`
    padding-left: 24px;
`

const FormStyled = styled.form``

const Title = styled.h2`
    color: #fff;
`

const Input = styled.input`
    padding: 10px 13px;
    border-radius: 5px 0 0 5px;
    outline: none;

    border: none;
`

const Button = styled.button`
    padding: 10px 13px;
    border-radius: 0 5px 5px 0;
    outline: none;
    background-color: gray;
    cursor: pointer;
    border: none;
    transition: 0.5s;

    &:hover {
        color: #fff;
        background-color: #424242;
    }
`

export default Form
