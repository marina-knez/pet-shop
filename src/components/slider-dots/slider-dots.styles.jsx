import styled from 'styled-components';

export const DotsContainer = styled.ul`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    list-style: none;
`;

export const Dot = styled.li`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#ffffff' : '#9B9B9B')};
    cursor: pointer;
`;