import Head from 'next/head'

export const Meta = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ description } />
            <meta charSet='utf-8' />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>{title}</title> 
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Filamsa',
    keywords: 'Tuberias, articulos de mineria',
    description: 'Tubos, alcayata, pistolestes, mineria'
}

