import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    console.log(allPostsData);

    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>Hello, I am a junior full-stack developer. Currently, I am
                learning Golang and React. I enjoy playing table tennis and badminton. I have a passion for Python
                programming, where I work on API development and backend development. Additionally, I have an interest
                in web3 and cryptocurrency quantitative trading. I also closely follow the latest developments in AI.
                <Link href={"https://github.com/1264204425"}>Here is my github</Link>
            </section>
            // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <a href='https://blog.sleepnow.work/'>Here is My Blog</a>
                // <ul className={utilStyles.list}>
                //     {allPostsData.map(({ id, date, title }) => (
                //         <li className={utilStyles.listItem} key={id}>
                //             <Link href={`/posts/${id}`} legacyBehavior>
                //                 <a>{title}</a>
                //             </Link>
                //             <br/>
                //             <small className={utilStyles.lightText}>
                //                 <Date dateString={date}/>
                //             </small>
                //         </li>
                //     ))}
                // </ul>
            // </section>
        </Layout>
    )
}
