import styled from "styled-components";

export const CategoryPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;

export const Title = styled.h2`
    font-size: 28px;
    margin-bottom: 25px;
`;