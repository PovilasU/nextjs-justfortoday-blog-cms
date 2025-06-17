import { BlogPostsPreview } from "@/components/BlogPostPreview";
// import { HompePage } from "@/components/Home";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";

const Page = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 2, page });
  console.log("Fetched posts:", result.posts);

  // Hardcoded posts for testing
  const result1 = {
    posts: [
      {
        id: "clvm6i42w0003c7p8uanleynx",
        title: "The Healing Power of Travel: Finding Myself Again",
        image:
          "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/b3524cb8-3965-47d4-ad1c-e8e4b50a41ab.png/public",
        description:
          "Heartbroken, I traveled to Bhutan seeking healing. Amid ancient Buddhist traditions, majestic peaks, and remote villages, I shed layers of pain. Bhutan's spiritual energy and simplicity reignited my essence. Travel's power immersed me in new beliefs, allowing me to rediscover my true self.",
        slug: "the-healing-power-of-travel-finding-myself-again",
        authorId: "cluqywzs7000021a9m3aueeiq",
        teamId: "clvlugru90000o4g8ahxp069s",
        createdAt: "2024-04-30T09:21:17.096Z",
        updatedAt: "2024-09-23T02:13:48.336Z",
        publishedAt: "2024-04-30T09:21:17.096Z",
        tags: [[Object], [Object]],
        author: {
          name: "Raymond Yeh",
          image:
            "https://lh3.googleusercontent.com/a/ACg8ocLy2t_8gkYSmpcOlQtFe9a-G6YP2DAG089A4AymO3tkjTD769Ba=s96-c",
        },
      },
      {
        id: "clvm12wbi001lnrohtvnnpw23",
        title: "Connecting with Locals: The True Essence of Travel",
        image:
          "https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/c24f2238-4c6c-43a1-a73e-983383e319fe.png/public",
        description:
          "At a night market in Kuala Lumpur, I was invited behind a satay stall to learn a vendor's generations-old family recipes. Connecting with locals like this provides the deepest cultural immersion - a window into their traditions, values and human experiences that dissolve stereotypes and foster empathy.",
        slug: "connecting-with-locals-the-true-essence-of-travel",
        authorId: "cluqywzs7000021a9m3aueeiq",
        teamId: "clvlugru90000o4g8ahxp069s",
        createdAt: "2024-04-30T06:49:29.118Z",
        updatedAt: "2024-04-30T06:50:07.779Z",
        publishedAt: "2024-04-30T06:50:07.779Z",
        tags: [[Object], [Object], [Object]],
        author: {
          name: "Raymond Yeh",
          image:
            "https://lh3.googleusercontent.com/a/ACg8ocLy2t_8gkYSmpcOlQtFe9a-G6YP2DAG089A4AymO3tkjTD769Ba=s96-c",
        },
      },
    ],
    pagination: {
      page,
      pageCount: 1,
      total: 2,
      hasNextPage: false,
      hasPrevPage: false,
    },
  };
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      {/* <HompePage posts={result.posts} /> */}
      {/* <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} /> */}
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
};

export default Page;
