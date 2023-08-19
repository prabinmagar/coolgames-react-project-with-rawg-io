import React from 'react'

const StoreItem = () => {
    return (
        <StoreItemWrapper>
        </StoreItemWrapper>
    )
}

export default StoreItem;

const StoreItemWrapper = styled.div`
    grid-template-columns: repeat(2, 1fr);
    min-height: 120px;
    margin: 16px 0;

    .card-text{
        padding: 16px;

        .card-title{
            letter-spacing: 0.04em;
            color: #0B082D;
            font-size: 16px;
            display: inline-block;
            transition: var(--transition-default);

            &:hover{
                color: #000;
                opacity: 0.9;
            }
        }

        .card-info{
            li{
                /* color: #050415; */
                color: #fff;

                a{
                    color: #fff;
                }
            }
        }

        .card-games{
            gap: 8px;
            li{
                background-color: #B9198E;
                border-radius: 100vh;
                padding-right: 8px;
                padding-left: 8px;
                height: 23px;

                *{
                    font-weight: 500;
                    color: var(--clr-violet-darker);
                }

                a{
                    color: var(--clr-white);
                    font-size: 13px;
                    display: inline-block;
                    transform: translateY(-3px);
                    font-style: italic;
                }
            }
        }
    }
`;
