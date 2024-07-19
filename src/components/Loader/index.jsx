
const Loader = ({type}) => {
if(type === "header") 
  return (
    <div data-testid="header-loader" className='text-gray-800 flex items-center space-x-2 animate-pulse'>
   <div className='w-16 lg:w-24 h-[32px] lg:h-[36px] lg:h-[64px] rounded-md bg-gray-400'/>
   <div className='w-[180px] h-[32px] lg:h-[36px] rounded-md bg-gray-400'/>
    </div>
  );


  // map ile dönebilmek için 16 elemanlı bir dizi oluşturduk
const arr = new Array (16).fill();

  return arr.map((i,key)=>(
  <div data-testid="card-loader" key={key} className='bg-gray-200 p-4 rounded-lg shadow-md 
  text-transparent min-w-[226px] animate-pulse mt-6 select-none'>
  <p className="bg-gray-300 w-2/5 text-sm font-semibold mb-2 rounded-md">aaa</p>
  <h2 className="bg-gray-300 w-3/4 text-lg font-bold  rounded-md">aaa</h2>
    </div>

))
}

export default Loader
