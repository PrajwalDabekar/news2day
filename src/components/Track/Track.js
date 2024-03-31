import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNews } from "../../feature/formSlice";

function Track() {
    const newsfeed = useSelector(state => state.formData)
    const dispatch = useDispatch()
    console.log(newsfeed)
 
  
    return(
        <div className="p-4">
      <h1 className="text-center font-semibold text-2xl mb-2">Manage News Feeds</h1>
      <div
      className="flex justify-around items-center"
      >
      <table
      className="w-full m-2"
      >
        <thead>
          <tr>
            <th className="px-8 py-4 border-2">Title</th>
            <th className="px-8 py-4 border-2">Category</th>
            <th className="px-8 py-4 border-2">Date</th>
            <th className="px-8 py-4 border-2">Status</th>
            <th className="px-8 py-4 border-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {newsfeed.map((feed) => (
            <tr key={feed.id}>
              <td className="px-8 py-4 border-2">{feed.title}</td>
              <td className="px-8 py-4 border-2">{feed.category}</td>
              <td className="px-8 py-4 border-2">{feed.date}</td>
              <td className="px-8 py-4 border-2 bg-green-200 text-green-600 font-semibold">Published</td>
              <td className="px-8 py-4 border-2"><button onClick={()=> dispatch(deleteNews(feed.id))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    )
}
export default Track