import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMeta } from '@utils/meta/meta.type'
import { clearText } from '@utils/string/clearText'

import { API_URL } from '../../config/api.config'
import { mergeTitle, siteName } from '../../config/meta.config'

export const Meta: FC<IMeta> = ({ title, image, description, children }) => {
    const { asPath } = useRouter()
    const currentUrl = API_URL + asPath

    return (
        <>
            <Head>
                <title>{mergeTitle(title)}</title>
                {description ? (
                    <>
                        <title itemProp="headline">{mergeTitle(title)}</title>
                        <meta
                            itemProp="description"
                            name="description"
                            content={clearText(description, 152)}
                        />
                        <link rel="canonical" href={currentUrl} />
                        <meta property="og:locale" content="en" />
                        <meta property="og:title" content={mergeTitle(title)} />
                        <meta property="og:url" content={currentUrl} />
                        {/*<meta property='og:image' content={image || logo} />*/}
                        <meta property="og:site_name" content={siteName} />
                        <meta property="og:description" content={clearText(description, 197)} />
                    </>
                ) : (
                    <>
                        <title>{title}</title>
                        <meta name="robots" content="noindex, nofollow" />
                    </>
                )}
            </Head>
            {children}
        </>
    )
}
