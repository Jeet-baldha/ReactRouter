import { useEffect, useState } from "react"
import {useLoaderData} from "react-router-dom"


function Github() {
    
    // const [data,setData] = useState();

    // useEffect(() => {
    //     fetch('https://api.github.com/users/jeet-baldha')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setData(data);
    //         console.log(data);
    //     })
    // },[])

    const data = useLoaderData();


  return (
    <>

    <div className='text-center bg-gray-600 text-white p-4 text-3xl'> Github UserName: {data.login}
    </div>
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github Follower: {data.followers}
    <img src={data.avatar_url} width={300} alt="github profile"></img>

    </div> 
    </>
  )
}

export default Github;

export const loaderInfo = async () => {
    const res = await fetch('https://api.github.com/users/jeet-baldha')

    return res.json();
}
