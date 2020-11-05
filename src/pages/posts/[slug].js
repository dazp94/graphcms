import { graphcms } from "../../utils/graphcms";

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query ProductPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        name
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
  { 
    posts {
      slug
      name
    }
  }
  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

const Post = ({ post }) => post.name;
export default Post;
