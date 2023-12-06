import React, { } from 'react'
import Chart from 'react-google-charts'


const Analysis = (props) => {

    const pieOptions = {
        'title':"Your Spending's Distribution", is3D: true,"legend":"top"
    }
    let setgrocery = 0
    let setmedical = 0
    let setstationary = 0
    let setpetrol = 0
    let setrent = 0 
    let setmiscelleneous = 0
    
    // const [grocery ,setgrocery] = useState(0);
    // const [medical ,setmedical] = useState(0);
    // const [stationary ,setstationary] = useState(0);
    // const [petrol ,setpetrol] = useState(0);
    // const [rent ,setrent] = useState(0);
    // const [miscelleneous ,setmiscelleneous] = useState(0);
    props.lists.map((ele, i)=>{
        if (ele.cat === 'Grocery'){return setgrocery += Number(ele.amt)}
        else if (ele.cat === 'Medical'){return setmedical += Number(ele.amt)}
        else if (ele.cat === 'Stationary'){return setstationary += Number(ele.amt)}
        else if (ele.cat === 'Petrol'){return setpetrol += Number(ele.amt)}
        else if (ele.cat === 'Rent'){return setrent += Number(ele.amt)}
        else if (ele.cat === 'Miscelleneous'){return setmiscelleneous += Number(ele.amt)}
        else return null
    })
    const pieData = [
        ['Task', 'Hours per Day'],
        ['Grocery', setgrocery],
        ['Medical', setmedical],
        ['Stationary', setstationary],
        ['Petrol', setpetrol],
        ['Rent', setrent],
        ['Miscelleneous', setmiscelleneous],
      ]
  return (
    <>
    <h2 className='text-center mx-auto lg:w-full relative z-10 justify-self-start align-top'>Analysis of Expenses</h2>
    <div className="container mt-5 w-full mx-auto flex justify-center flex-col align-middle border-2 border-black overflow-scroll">
    
    <div className="w-3/4 justify-self-center"><Chart
      width={'600px'}
      height={'320px'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={pieData}
      options={pieOptions}
      rootProps={{ 'data-testid': '3' }}
      
    /></div>
  </div>
  </>
)
}

export default Analysis




// class PieChart extends Component {
//   render() {
    
//   }
// }
// export default PieChart


