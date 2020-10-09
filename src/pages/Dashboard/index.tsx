import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from './styles'

const Dashboard: React.FC =() =>{

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Ana', label: 'Ana'},
        {value: 'Maria', label: 'Maria'}
    ]
    const frutas = [
        {value: 'Maça', label: 'Maça'},
        {value: 'Uva', label: 'Uva'},
        {value: 'Banana', label: 'Banana'}
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} />
                <SelectInput options={frutas} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;