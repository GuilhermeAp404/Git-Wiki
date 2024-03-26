import styled from "styled-components";

export const ItemRepoContainer = styled.div`
    width: 80%;
    margin: 20px;

    h3{
        font-size: 32px;
    }

    p{
        font-size 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a{
        margin: 0 25px 0 0;

        &.remove{
            color: red;
            text-decoration: none
            
            &:active{
                color:red;
            }
        }
        &.look{
            padding:3px 5px;
            border-radius: 2px;
            background-color: green;
            color: #FAFAFA;
            text-decoration: none
        }
    }

    hr{
        margin-top: 10px;
        width: 100%;
        size: 2px;
        color: #FAFAFA60;
    }

`