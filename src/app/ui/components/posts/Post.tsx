import { PostProps } from "@/app/blog/post/[id]/page";
import Link from "next/link";
import React, { JSX } from "react";

export default function Component({ id, title, content, date }: PostProps) {
  return (
    <div key={id} className="border border-gray-200 p-4 my-4">
      <Link
        href={`post/${id}`}
        className="text-blue-600 hover:underline hover:text-blue-800 cursor-pointer"
      >
        {title}
      </Link>
      <p className="text-gray-500">{date}</p>
      <p>{content}</p>
    </div>
  );
}
