import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
function Profile() {
    const chartdata = useSelector(state => state.formData)
    
    const data = {
        labels:['views','likes','comments'],
        datasets:[{
            label: "News Statistics",
            backgroundColor: [
                "blue","green","red"
                
              ],
            //borderColor:,
            data:[chartdata.views,chartdata.likes,chartdata.comments],
          },],
    }
    return(
        <div>
        
            {chartdata.map((data)=>(
                <div className="flex h-[500px]  p-2 justify-center items-center sm:p-12">
                <Bar data={{
                    labels:['views','likes','comments'],
                    datasets:[{
                        label: data.title,
                        backgroundColor: [
                            "blue","green","red"
                            
                          ],
                        //borderColor:,
                        data:[data.views,data.likes,data.comment],
                      },],
                }}
                options={{scales: {
                    y:
                      {
                        min:0,
                        
                        ticks: {
                            stepSize: 50,
                          },
                      },
                    
                  },
            }}
                    
                className="mb-12 rounded-md bg-emerald-50 px- sm:mb-0"/>
                </div>
            ))}
        
        </div>
    )
}
export default Profile