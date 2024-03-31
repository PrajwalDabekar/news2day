import { useLocation } from "react-router-dom"
import NewsCard from "../NewsCard/NewsCard"

function Preview(){
    
    return(
        <div className="flex justify-around items-center">
        <div className="w-[320px] h-[460px] border border-black my-6">
            <div class="w-[320px] h-[460px] text-clip overflow-hidden  border">
        <img
          src='https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
          alt="Laptop"
          class="h-[200px] w-full object-cover"
        />
        <div class="p-4">
          <h1 class="inline-flex items-center text-lg font-semibold">
            Title Here!  {" "}
          </h1>
          <br/>
          <h1 class="inline-flex items-center text-md font-semibold bg-blue-200 text-blue-400 rounded-md px-2 py-1 text-center">
            Category  {" "}
          </h1>
          <p class="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?
          </p>
          
          
        </div>
      </div>
        </div>
        <div className="text-3xl font-semibold italic">Here is Mobile Preview!!!</div>
        </div>
    )
}
export default Preview