import React from 'react';
import axios from 'axios';


function index(props) {
    let posts=(props.posts)?props.posts:[];
    return (
        <div>
            <h1>
           {props.kandiMessage.primaryMessage}
           </h1>
           <h1>
           {props.kandiMessage.secondaryMessage}
           </h1>
           <div>
              { posts.map(post=>{
                
                return(
                    <div>
                        <h1>
                        {post.id}
                        </h1>
                        <br/>
                        <h1>
                        {post.body}
                        </h1>
                   </div>
                )

              }) }

           </div>
        </div>
    );
}

export default index;

export const getServerSideProps=async()=>{

  const[kandiMessage,posts]=await Promise.all(
      [getKandiMessage(),getPosts()]);
      //console.log("posts",posts);
     // console.log("kandiMessage",kandiMessage);
   
      return{
          props:{kandiMessage,posts}
      }
}

function getKandiMessage(){

    let url='https://api.kandi.dev/consumer/home/gethomepagemessages/landingPage';
     return axios.get(url).then(res=>{
       return (res.data)?res.data:{}
     }).catch(err=>{
       return {};
     })
  
  }

  function getPosts(){

    let url='https://jsonplaceholder.typicode.com/posts';
     return axios.get(url).then(res=>{
       return (res.data)?res.data:[]
     }).catch(err=>{
       return [];
     })
  
  }


  //