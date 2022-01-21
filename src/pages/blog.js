import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, useStatticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Welcome to my Blogs</h1>
            <hr />
            <ol>
                {
                    data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <h3>{edge.node.frontmatter.title}</h3>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    })
                }
            </ol>
            
        </Layout>
    )
}

export default BlogPage
