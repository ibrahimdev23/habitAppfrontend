

const Stats = ({props}) => {


    return (
		
			
		<div className="w-50 h-30 bg-white p-2 rounded-2xl mb-3">
			<div className="flex items-center justify-center">
				<span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>
				</span>
				<span className="ml-1 text-medium font-small text-gray-500 ">Current Steak</span>
			</div>
			<span className="flex items-center justify-center text-3xl font-semibold mt-1">{props} {props > 1 ? "Days" : "Day"}</span>
			</div>
			
			

			
			
			
    )
	
		
	
}


export default Stats