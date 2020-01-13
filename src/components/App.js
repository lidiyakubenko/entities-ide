import React from 'react'
import styled from 'styled-components'

import Form from './Form'
import EntitiesList from './EntitiesList'

export const ThemeContext = React.createContext({})

const App = () => {
    const [allEntities, setEntities] = React.useState({
        cat: ['name', 'old'],
    })

    const createEntity = entityName => {
        if (entityName) {
            setEntities({ ...allEntities, [entityName]: [] })
        }
    }

    const handleChangeFieldName = ({ e, index, entityName }) => {
        const { value } = e.currentTarget

        if (value === '') {
            const filteredArr = allEntities[entityName].filter(
                (_, i) => i !== index
            )
            setEntities({
                ...allEntities,
                [entityName]: filteredArr,
            })
            return
        }

        const newFields = allEntities[entityName].map((field, i) =>
            i === index ? value : field
        )
        setEntities({ ...allEntities, [entityName]: newFields })
    }

    const createNewField = ({ e, entityName }) => {
        const { value } = e.currentTarget
        setEntities({
            ...allEntities,
            [entityName]: [...allEntities[entityName], value],
        })
    }

    const saveNewAttrValue = e => {
        const { value } = e.currentTarget
    }

    const context = {
        createNewField,
        handleChangeFieldName,
    }

    return (
        <ThemeContext.Provider value={context}>
            <Layout>
                <WrapBubbles />
                <WrapEntities>
                    <Form createEntity={createEntity} />
                    <EntitiesList
                        entities={allEntities}
                        entityNames={Object.keys(allEntities)}
                    />
                </WrapEntities>
            </Layout>
        </ThemeContext.Provider>
    )
}

const Layout = styled.div`
    font: 300 18px sans-serif;
    display: flex;
    flex-flow: row wrap;
`

const WrapEntities = styled.div`
    flex: 1 1 100px;
`

const WrapBubbles = styled.div`
    flex: 2 1 200px;
`

export default App
