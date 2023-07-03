import styled from 'styled-components';

type DotProps = {
    active: boolean;
  };

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

    @media screen and (max-width: 1024px) {
        left: 40%;
    }

    @media screen and (max-width: 768px) {
        left: 30%;
    }
`;

export const Dot = styled.li<DotProps>`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#f2f0a1' : '#9B9B9B')};
    cursor: pointer;
`;