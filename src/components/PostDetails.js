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

  const save = () => {
    onSave(id, { title, content });
    setEditing(false);
  };

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="post">
        {!editing ? (
          <>
            <h2>{post.title}</h2>
            <div className="meta">
              by {users.find((u) => u.id === post.authorId)?.name}
              <span
                style={{
                  marginLeft: 8,
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                {post.time}
              </span>
            </div>
            <p className="content">{post.content}</p>

            <div style={{ marginTop: 12 }}>
              <button
                className="button viewBtn"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
              <button
                style={{ marginLeft: 8 }}
                className="button"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </>
        ) : (
          <>
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
              {/* First button: Cancel */}
              <button onClick={() => setEditing(false)}>Cancel</button>
              {/* Last button on the page: Save (with .button class) */}
              <button
                style={{ marginLeft: 8 }}
                className="viewBtn button"
                onClick={save}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
