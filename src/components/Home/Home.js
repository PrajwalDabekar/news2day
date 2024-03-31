import { useSelector } from "react-redux"
import NewsCard from "../NewsCard/NewsCard"

function Home() {
    const formData = useSelector(state => state.formData);
    
    return(

        <div>
            <div className="px-8 py-8 bg-blue-200 text-black text-3xl w-full font-semibold font-sarif italic">Your Every Day News Partner...</div>
            <div className="text-lg font-semibold p-2 mx-4">Your News...</div>
            <div className="flex space-x-2 mx-4">
      {formData.map((newsItem)=>(
        <div key={newsItem.id}>
            <NewsCard
            title={newsItem.title}
            category={newsItem.category}
            desc={newsItem.description}
            img={newsItem.image}
            />
        </div>
      ))} </div>
      </div>
    )
}
export default Home