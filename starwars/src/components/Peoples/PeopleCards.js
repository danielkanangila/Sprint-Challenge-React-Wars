import React from 'react';
import PeopleCard from './PeopleCard';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: center;
`;

const PeopleCards = props => {
    const { people } = props;

    return(
        <Div>
            {people?.map((person, index) => <PeopleCard key={index} {...person} />)}
        </Div>
    )
}

export default PeopleCards;