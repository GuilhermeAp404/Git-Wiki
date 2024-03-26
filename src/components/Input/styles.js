import styled from 'styled-components'

export const InputContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 62px;
    margin: 20px;
    padding: 0 20px;

    border: 2px solid #FAFAFA;
    border-radius: 20px;

    input {
        background: transparent;
        
        color: #ffffff;
        font-size: 20px;

        border: none;

        width: 100%;
        padding: 10px 0;
        

        &:focus{
            outline:none;
        }
    }

    
`