export const theme = {
    colors: {
        background: 'red',
        text: '#fff',
        primary: '#f0055',
        secondary: '#f52a10',
        buttonOn: 'gren',
        buttonOf: 'red',
    },
    dimension: {
        ButtonLanding: {
            width: '200px',
            height: '40px',
            background: 'pink'
        },
        screen: {
            width: '100vw',
            height: '100vh'
        },
        splashScreen: {
            title: {
                color: 'red',
                width: '250px',
                heght: '30px',
                borderRadios: '5px',
            }
        }
    },
    price: {
        titlePrice: {
            textTransform: 'uppercase',
            color: '#d89667'
        },
        product: {
            title: {
                textTransform: 'uppercase',
                fontSize: 'light',
            },
            subTitle: {
                textTransform: 'lowercase',
                color: 'inherit',
            },
            value: {
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 'light',
            }
        }
    }

}
export default theme