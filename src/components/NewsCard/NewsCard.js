import React from "react";

function NewsCard({title,desc,category,image='https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'}) {
    return(
        <div class="w-[200px] h-[250px] text-clip overflow-hidden rounded-md border">
        <img
          src={image}
          alt="Laptop"
          class="h-[100px] w-full object-cover"
        />
        <div class="p-4">
          <h1 class="inline-flex items-center text-lg font-semibold">
            {title}  {" "}
          </h1>
          <br/>
          <h1 class="inline-flex items-center text-md font-semibold bg-blue-200 text-blue-400 rounded-md px-2 py-1 text-center">
            {category}  {" "}
          </h1>
          <p class="mt-3 text-sm text-gray-600">
            {desc}
          </p>
          
          
        </div>
      </div>  
    )
}
export default NewsCard