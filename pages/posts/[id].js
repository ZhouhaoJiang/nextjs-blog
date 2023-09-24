import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from "../../components/date";
import Head from "next/head";


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                {postData.title}
            </Head>
            <br/>
            {postData.id}
            <br/>
            <Date dateString={postData.date}/>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id)
    // ...
    return {
        props: {
            postData // 将 postData 嵌套在 props 下
        }
    }
}