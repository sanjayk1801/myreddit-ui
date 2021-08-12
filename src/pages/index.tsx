import NavBar from "../components/NavBar"
import PostPreview from "../components/PostPreview";
import { usePostsQuery } from "../generated/graphql"

const Index = () => {

  const [{data, fetching}] = usePostsQuery();
  return (
  <>
  <NavBar  />
  { fetching? <div>loading....</div>: data.posts.map(p => 
   <PostPreview title= {p.title} body={p.body}></PostPreview> 
  )}
  </>
  
)}

export default Index
