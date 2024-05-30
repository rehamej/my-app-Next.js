// app/posts/page.js

import PostsPageClient from "./PostsPageClient";

export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 120
        }
    });

    const posts = await response.json();

    return (
        <PostsPageClient initialPosts={posts} />
    );
}
