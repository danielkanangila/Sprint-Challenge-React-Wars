import React from 'react';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import styled  from 'styled-components';

const PaginationWrapper = styled.div``

const Pagination = props => {
    const {next, previous, updateState} = props;

    return(
        <PaginationWrapper>
            <ButtonGroup>
                <Button onClick={updateState} aria-label="contained primary button group" disabled={previous}>
                    Previous
                </Button>
                <Button onClick={updateState} aria-label="contained primary button group" disabled={next}>
                    Next
                </Button>
            </ButtonGroup>
        </PaginationWrapper>
    );
}

export default Pagination;