export const theme = {
    colors: {
        background: '#00e',
        text: '#fff',
        primary: 'rgba(255, 0, 0, 0.5)',
        secondary: '#f52a10',
        buttonOn: 'gren',
        buttonOf: 'red',
    },
    dimension: {
        button: {
            width: '150px',
            height: '50px'
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