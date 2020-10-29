// import React from 'react'
// import { graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'
// import get from 'lodash/get'
// import Img from 'gatsby-image'
// import Layout from '../components/layout'
// import styles from './blog.module.css' //change this eventually?
// import Testimonial from '../components/testimonial/testimonial'
// class AboutUs extends React.Component {
//     render(){
//         const siteTitle = get(this, SITE_QUERY.site.siteMetadata.title)
//         const testimonials = get(this, TESTIMONIALS_QUERY.allContentfulTestimonial.edges)

//         return (
//             <Layout location={this.props.location}>
//               <div style={{ background: '#fff' }}>
//                 <Helmet title={siteTitle}  />
//                 <div className={styles.hero}>I believe in Han.</div>
//                   <div className="wrapper">
//                     <h2 className="section-headline">Testimonials</h2>
//                     <ul className="article-list">
//                       {testimonials.map(({ node }) => {
//                         return (
//                         <li key={node.name}>
//                         <Testimonial testimonial={node} />
//                         </li>
//                          )
//                         })}
//                     </ul>
//                  </div>
//               </div>
//             </Layout>
//         )
//     }
// }

// export default AboutUs



