// CommentSection.jsx
import React, { useState } from 'react';


const CommentSection = () => {
  const [comments, setComments] = useState([]); // 댓글 목록
  const [input, setInput] = useState(''); // 입력창 값

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(), // 고유 id
      text: input,
    };

    setComments([newComment, ...comments]);
    setInput('');
  };

  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="container mt-4">
      <form 
        onSubmit={handleSubmit}
        style={{ width:'800px', margin:'0 auto'}}
        >
        <textarea
          className="form-control"
          rows="2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="댓글을 입력하세요"
        ></textarea>
        <div 
            style={{ textAlign:'right'}}>
            <button 
                type="submit" 
                className="btn primary-dark-btn mt-2 "
                style={{borderRadius:'30px'}}>
                등록
            </button>
        </div>
      </form>

{/* 댓글 등록 기능*/}
      <ul className="list-group mt-4 "
          style={{width:'830px', margin:'0 auto'}}
      >
        {comments.map(comment => (
          <li 
            key={comment.id} 
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{border:'none'}}
            >
            {comment.text}
            <button 
                className="btn btn-sm btn-outline-danger" 
                onClick={() => handleDelete(comment.id)}
                style={{borderRadius:'30px'}}
                >삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
