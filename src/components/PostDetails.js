// src/components/PostDetails.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostDetails({ posts, users, onSave }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  if (!post) return <div style={{ padding: 24 }}>Post not found</div>;

  const handleSave = () => {
    onSave(post.id, { title, content });
    setEditing(false);
  };

  if (!editing) {
    return (
      <div className="container" style={{ paddingTop: 20 }}>
        <div className="post">
          <h2>{post.title}</h2>
          <div className="meta">
            by {users.find((u) => u.id === post.authorId)?.name}
          </div>
          <p className="content">{post.content}</p>

          {/* IMPORTANT: direct child of `.post` and only one with class .button */}
          <button
            className="button"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>

          {/* back button WITHOUT .button class */}
          <button
            style={{ marginLeft: 8 }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // editing mode
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="post">
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div style={{ marginTop: 8 }}>
          {/* first button: Cancel */}
          <button onClick={() => setEditing(false)}>Cancel</button>

          {/* LAST button on the page: Save */}
          <button
            style={{ marginLeft: 8 }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
