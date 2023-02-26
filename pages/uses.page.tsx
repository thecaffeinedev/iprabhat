import { MDXLayoutRenderer } from "@/components/MDXComponents";
import { getUsesFileBySlug } from "@/lib/mdx";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AuthorFrontMatter } from "types/AuthorFrontMatter";

const DEFAULT_LAYOUT = "UsesLayout";

export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter };
}> = async () => {
  const authorDetails = await getUsesFileBySlug("uses");
  const { mdxSource, frontMatter } = authorDetails;
  return { props: { authorDetails: { mdxSource, frontMatter } } };
};

export default function Uses({
  authorDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
}
