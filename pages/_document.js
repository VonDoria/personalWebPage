import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document()
{
    render(){
        return(
        <Html lang="id">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/x-icon" href="../static/icon.ico" />
                <title>Teste</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }
}

