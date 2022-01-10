import { FunctionComponent, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import {theme} from '../../styles/theme'

interface IProps {
    main: ReactNode
}
export const Layout: FunctionComponent<IProps> = ({main}) => {
    return (
        <ThemeProvider theme = {theme}>
            <div>
                {main}
            </div>
        </ThemeProvider>
    )
}