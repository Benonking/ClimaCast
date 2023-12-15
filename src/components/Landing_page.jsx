import { BiSearchAlt2 } from "react-icons/bi";
import React from 'react';
import img from '../assets/img.avif'
import bg from '../assets/bg.jpg'

function Landing() {
	//const backgroundImage = 'url({bf})'

	return (  
		<div className='w-full h-screen py-6' style={{backgroundImage:`url(${bg})`}}>
			<div className='md:max-w-[1480px] m-auto grid grid-cols-2 max-w-[600px] py-4'>
				<div className="flex flex-col ">
					<p className="text-6xl text-[#0e7490] font-bold py-2">Get Accurate forecasts</p>
					<p className="text-2xl text-black">Weather Data at your fingure tips</p>
					<p className="text-1xl text-[#57534e] pt-6">Search by location | Get access to Historical data</p>
					<form className="max-w-[500px] shadow-lg rounded-md flex justify-between">
						<input 
						className="bg-stone-200 w-full rounded-md border-none h-8"
						type="text"
						placeholder=" Enter location!!"
						/>
						<button>
							<BiSearchAlt2 
								size={20}
								className='icon'
								style={{color:'#000'}}
							/>
						</button>
					</form>
				</div>
				<img src={img} className='md:order-last order-first h-62'/>		
			</div>
		</div>
	);
}
export default Landing;