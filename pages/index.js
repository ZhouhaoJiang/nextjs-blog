import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    // 如果 getSortedPostsData 是异步的，需要使用 await
    const allPostsData = await getSortedPostsData();
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
            {/*<section className={utilStyles.headingMd}>*/}
            {/*    Hello, I am a junior full-stack developer. Currently, I am learning Golang and React. I enjoy playing*/}
            {/*    table tennis and badminton. I have a passion for Python programming, where I work on API development and*/}
            {/*    backend development. Additionally, I have an interest in web3 and cryptocurrency quantitative trading. I*/}
            {/*    also closely follow the latest developments in AI.You can learn me from my github and blog.*/}
            {/*</section>*/}
            <section className={utilStyles.headingMd}>
                <p>Hello, I am a junior full-stack developer. Currently, I am continuing to learn Golang and React.</p>
                <p>I enjoy playing table tennis and badminton. I have a passion for Python programming, where I work on
                    API development and backend development.</p>
                <p>Additionally, I have an interest in web3 and cryptocurrency quantitative trading. I also closely
                    follow the latest developments in AI.</p>
                <p>You can learn more about me from my GitHub and blog.</p>
            </section>

            {/* 使用 JSX 正确的注释方式 */}
            {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */}
            <h2 className={utilStyles.headingLg}>Click it</h2>
            {/* 同样，对于外部链接使用 <a> 标签 */}
            <h3>
                <div>
                    <a href="https://github.com/1264204425">Here is my Github</a>
                </div>
                <div>
                    <a href='https://blog.sleepnow.work/'>Here is my Blog</a>
                </div>
            </h3>
            {/* 注释掉的列表，使用正确的 JSX 注释格式 */}
            {/* 
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br/>
                        <small className={utilStyles.lightText}>
                            <Date dateString={date}/>
                        </small>
                    </li>
                ))}
            </ul>
            */}
        </Layout>
    )
}
