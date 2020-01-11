import React from 'react';
import PeopleCard from './PeopleCard';
import styled from 'styled-components';
import CharacterCountDisplay from './CharacterCountDisplay';

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
            <CharacterCountDisplay count={props?.count} />
            {people?.map((person, index) => <PeopleCard key={index} {...person} />)}
        </Div>
    )
}

export default PeopleCards;