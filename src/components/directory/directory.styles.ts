import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    width: 100%;
    //height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }
`