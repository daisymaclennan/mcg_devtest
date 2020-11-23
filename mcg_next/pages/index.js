import Layout from "../components/Layout"
import NavMenuItem from "../components/NavMenuItem"
import NavMenu from "../components/NavMenu"

export default function Page({ frontPages }) {
  return (
    <Layout>
      <h2>this is a homepage</h2>
      <NavMenu>
      {frontPages.map(frontPage => (
        <NavMenuItem title={frontPage.acf.menu_title} number={frontPage.acf.number} />
      ))}
      </NavMenu>
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:8888/wp-json/wp/v2/front-page')
  const frontPages = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      frontPages,
    },
  }
}
