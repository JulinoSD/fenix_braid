import React from 'react'
import Document, { Html, Head, NextScript, DocumentInitialProps, DocumentContext, Main} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (MyApp) => (props) =>
            sheet.collectStyles(<MyApp {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element{
    return(
      <Html lang='pt'>
        <Head>
          <meta charSet='utf-8'/>
          {/* <title>Fenix Braid</title> */}
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
