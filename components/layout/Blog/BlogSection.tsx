import Link from 'next/link';

import BlogCard from './BlogCard';
import { blogPosts } from './blog.data';

export default function BlogSection() {
  return (
    <section className="my-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900 sm:text-base">
          مقالات و راهنمای خرید
        </h2>

        <Link href="/blog" className="text-xs font-medium text-blue-600">
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
