import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchFailure, fetchSuccess, newComment } from "../redux/commentSlice";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({videoId}) => {
  const { currentUser } = useSelector(state => state.user);
  const { currentComments } = useSelector(state => state.comment);
  const dispatch = useDispatch();

  const [desc, setDesc] = useState('');
  

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/comments/${videoId}`);
      dispatch(fetchSuccess(res.data));
    }
    fetchComments();
  }, [videoId, dispatch]);

  const handleOnAddComment = async (e) => {
    if(e.key === 'Enter') {
      try {
        const res = await axios.post(`/comments`, { videoId, desc});
        dispatch(newComment(res.data));
        setDesc('');
      } catch (err) {
        dispatch(fetchFailure());
      } 
    }
  }

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." value={desc} onChange={(e) => setDesc(e.target.value)} onKeyPress={handleOnAddComment} />
      </NewComment>
      {currentComments.map((comment) => (
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  );
};

export default Comments;
