import React from "react";
import { useNavigate } from "react-router-dom";

function PostsPage({ posts, users, onReact, onCreate }) {
  const navigate = useNavigate();

  return (
    <div className="container AppContent">
      <h2 className="sectionTitle">Add a New Post</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.target);
          const title = fd.get("postTitle").toString();
          const author = fd.get("postAuthor");
          const content = fd.get("postContent").toString();
          if (!title.trim()) return;
          onCreate({ title, authorId: author, content });
          e.target.reset();
        }}
      >
        <div className="formRow">
          <label htmlFor="postTitle">Post Title:</label>
          <input id="postTitle" name="postTitle" type="text" placeholder="What's on your mind?" />

          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" name="postAuthor" defaultValue={users[0]?.id}>
            {users.map((u) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </select>

          <label htmlFor="postContent">Content:</label>
          <textarea id="postContent" name="postContent" placeholder="Write something..." />

          <button type="submit" className="viewBtn">Save Post</button>
        </div>
      </form>

      <h2 className="sectionTitle">Posts</h2>

      <section className="posts-list">
        <div className="intro">Latest</div>
        {posts.map((p) => (
          <article key={p.id} className="post">
            <h3>{p.title}</h3>
            <div className="meta">
              by {users.find((u) => u.id === p.authorId)?.name}
              <span style={{ marginLeft: 8, color: "#666", fontStyle: "italic" }}>{p.time}</span>
            </div>

            <p className="content">{p.content}</p>

            <div className="reactions">
              {p.reactions.map((count, idx) => (
                <button key={idx} onClick={() => onReact(p.id, idx)} className="reaction-btn">
                  {["👍", "🎉", "❤️", "🚀", "👀"][idx]} {idx < 4 ? count : 0}
                </button>
              ))}
            </div>

            <button className="viewBtn button" onClick={() => navigate(`/posts/${p.id}`)}>
              View Post
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PostsPage;
