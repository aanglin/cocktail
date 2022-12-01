import React from 'react'
import {useSession, getSession} from "next-auth/react";

function cocktails() {
    const {data: status} = useSession();
  if (status === 'authenticated') {
  return (
    <div>cocktails</div>
  )
}else {
    return (
      <div>
        <p>You are not signed in</p>
      </div>
    )
  }
}
export default cocktails

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session){
      return {
        redirect: {
          destination: '/'
        }
      }
    }
    return {
      props: {session},
      
    };
  }; 