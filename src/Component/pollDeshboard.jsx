import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { pollRequest } from '../redux/action/index';

export default function PollDeshboard() {

  const dispatch = useDispatch();
  const pollSelector = useSelector((state) => state && state.pollReducer);
  // console.log(pollSelector);

useEffect(()=>{
dispatch(pollRequest())
},[])

  return (
    <>
      <h1>Poll Deshboard</h1>
    </>
  )
}
