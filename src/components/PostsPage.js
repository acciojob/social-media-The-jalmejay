// src/components/PostsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

function PostsPage({ posts, users, onReact, onCreate }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const title = fd.get("postTitle")?.toString() || "";
    const authorId = fd.get("postAuthor")?.toString() || "";
    const content = fd.get("postContent")?.toString() || "";

    if (!title.trim() || !authorId.trim() || !content.trim()) return;

    onCreate({ title, authorId, content });
    e.target.reset();
  };

  return (
    <div className="container AppContent">
      <h2 className="sectionTitle">Add a New Post</h2>

      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            id="postTitle"
            name="postTitle"
            type="text"
            placeholder="What's on your mind?"
          />

          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            name="postAuthor"
            defaultValue={users[0]?.id}
          >
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>

          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            placeholder="Write something..."
          />
        </div>

        {/* IMPORTANT: direct child of form → matches `form > button` */}
        <button type="submit" className="button">
          Save Post
        </button>
      </form>

      <h2 className="sectionTitle">Posts</h2>

      <section className="posts-list">
        {/* first child: intro, so new post becomes :nth-child(2) */}
        <div>Latest</div>

        {posts.map((p) => (
          <article key={p.id} className="post">
            <h3>{p.title}</h3>
            <div className="meta">
              by {users.find((u) => u.id === p.authorId)?.name}
            </div>
            <p className="content">{p.content}</p>

            <div className="reactions">
              {p.reactions.map((count, idx) => (
                <button
                  key={idx}
                  onClick={() => onReact(p.id, idx)}
                  className="reaction-btn"
                >
                  {["👍", "🎉", "❤️", "🚀", "👀"][idx]} {count}
                </button>
              ))}
            </div>

            {/* this is `.posts-list > :nth-child(2) > .button` */}
            <button
              className="button"
              onClick={() => navigate(`/posts/${p.id}`)}
            >
              View Post
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PostsPage;
