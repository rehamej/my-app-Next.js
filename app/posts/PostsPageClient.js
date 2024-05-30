// app/posts/PostsPageClient.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./PostsPageClient.css"; // Ensure correct path

export default function PostsPageClient({ initialPosts }) {
    const [posts, setPosts] = useState(initialPosts);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value === "") {
            setPosts(initialPosts);
        } else {
            const filteredPosts = initialPosts.filter(post =>
                post.title.toLowerCase().includes(value.toLowerCase()) ||
                post.body.toLowerCase().includes(value.toLowerCase())
            );
            setPosts(filteredPosts);
        }
    };

    const highlightText = (text, highlight) => {
        if (!highlight.trim()) {
            return text;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        return text.split(regex).map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <span key={index} className="highlight">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="container">
            <h1 className="title">Posts Page</h1>
            <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearch}
                className="searchInput"
            />
            <div className="postList">
                {posts.map(post => (
                    <Link href={`/posts/${post.id}`} key={post.id} className="postLink">
                        <div className="post">
                            <h2 className="postTitle">{highlightText(post.title, searchTerm)}</h2>
                            <p className="postBody">{highlightText(post.body, searchTerm)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
