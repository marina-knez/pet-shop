import styled, {css} from "styled-components";

const borderYellow = css`
    border: 2px solid rgb(242, 234, 0);
`

const sharedStyles = css`
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    outline: none;
    padding: 10px 20px;
`

export const ContactFormWrapper = styled.div`
    margin: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        margin: 20px;
        flex-direction: column;
    }
`

export const FormTitle = styled.h2`
    font-size: 1.7rem;
`

export const FormDescription = styled.p`
    font-size: 1.3rem;
`

export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;
        gap: 0;
    }
`

export const InputFieldsContainer = styled.div`
    flex: 1;
    max-width: 500px;
    width: 100%;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    margin-bottom: 1rem;
    height: 100px;
`

export const InputField = styled.input`
    ${sharedStyles}
    height: 50%;
    font-size: 1.2rem;
    
    &:focus {
        ${borderYellow}
    }

    &::placeholder {
        font-size: 1rem;
    }
`

export const SelectField = styled.select`
    ${sharedStyles}
    height: 50%;
    font-size: 1rem;

    &:focus {
        ${borderYellow}
    }

    & option {
        font-size: 1rem;
    }
`

export const Textarea = styled.textarea`
    border: 1px solid lightgrey;
    ${sharedStyles}
    resize: none;
    font-size: 1rem;
    min-height: 100px;
    font-family: Arial, Helvetica, sans-serif;

    &:focus {
        ${borderYellow}
    }

    &::placeholder {
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const Label = styled.label`
    font-size: 1.2rem;
    padding-bottom: .5rem;

    &.error-text {
        color: red;
    }
`

export const ButtonContainer = styled.div`
    margin-top: 5rem;
`

export const FormImageContainer = styled.div`
    flex: 1;
    position: relative;

    @media screen and (max-width: 1024px) {
        & img {
        height: 250px;
        width: 250px;
        clip-path: circle(50% at 50% 50%);
    }   
    }
`

/*export const Picture = styled.picture`

`*/