import Link from "next/link";
import { Heading } from "@chakra-ui/react";
import { graphcms } from "../utils/graphcms";

export async function getStaticProps() {
  const { posts } = await graphcms.request(
    `
      { 
        posts {
          slug
          name
        }
      }
    `
  );

  return {
    props: {
      posts,
    },
  };
}

const Index = ({ posts }) => {
  return (
    <>
      <Heading>Welcome</Heading>
      {posts.map(({ slug, name }) => (
        <Link key={slug} href={`/posts/${slug}`}>
          <a>{`${name}`}</a>
        </Link>
      ))}
    </>
  );
};

export default Index;
