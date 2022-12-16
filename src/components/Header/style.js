import styled from 'styled-components';

export const Container = styled.header`
    position: fixed;

    grid-area: header;

    width: 100%;
    height: 116px;

    display: flex;
    gap: 64px;
    align-items: center;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=>theme.COLORS.BACKGROUND_LINE};

    >h1{
        width: 164px;   
        height: 32px;

        margin-right: 64px;
        margin-left: 120px;
        margin-bottom: 25px;

        color: ${({theme})=>theme.COLORS.PINK_500};
    }
`;

export const Profile = styled.div`
    width: 200px;
    height: 68px;

    color: ${({theme})=>theme.COLORS.GRAY_500};

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 120px;
    margin-left: 20px;

    >div{
        min-width: 100%;

        h2{
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: ${({theme})=>theme.COLORS.WHITE_500};
        }
        a{
            margin-left: 55%;
            color: ${({theme})=>theme.COLORS.GRAY_500};
        }
    }
    >a img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;