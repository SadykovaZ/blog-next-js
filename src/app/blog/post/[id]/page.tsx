// "use client";

import { useEffect, useState } from "react";
import { getPosts } from "@/app/lib/data";
// import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
import { notFound } from "next/navigation";
import NotFound from "./not-found";

export interface PostProps {
  id?: string;
  title?: string;
  content?: string;
  date?: string;
}

export default async function Page({ params }: { params: { id: string } }) {
  // const [post, setPost] = useState<PostProps | null>();
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id);

  // const loadData = async () => {

  //   setPost(post);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  console.log("====================================");
  console.log(post, "postspostsposts");
  console.log("====================================");
  // const posts = await getPosts();
  // const post = posts?.find((post) => post.id === params.id);
  if (!post) {
    NotFound();
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
