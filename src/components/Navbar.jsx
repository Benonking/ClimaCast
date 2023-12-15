// Navbar.js
import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci' 
import { TiWeatherDownpour } from "react-icons/ti";
const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const content = <>
	<div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition'>
		<ul className='text-center text-x1 p-20'>
			<Link spy={true} smooth={true} to="Home">
				<li my-4 py-4 border-b border-slate-800 hover: bg-slate-800 hover: rounded>Home</li>
			</Link>
			<Link to='API'>
				<li my-4 py-4 border-b border-slate-800 hover: bg-slate-800 hover: rounded>Services</li>
			</Link>
			<Link to='Projects'>
				<li my-4 py-4 border-b border-slate-800 hover: bg-slate-800 hover: rounded>Blog</li>
			</Link>
			<Link to='Documentation'>
				<li my-4 py-4 border-b border-slate-800 hover: bg-slate-800 hover: rounded>GitHub</li>
			</Link>
		</ul>
	</div>
	</>
  return (
	<nav>
		<div className='h-10vh flex justify z-50 text-white lg:py-5 px-20 py-4 flex-1'>
			<div className='flex items-center flex-1'>
				<span className='text-2xl font-bold flex'><TiWeatherDownpour/>ClimaCast</span>
			</div>
			<div className='lg:flex md:flex lg: flex-1 items cemter justify-end font-normal hidden'>
				<div className='flex-10'>
					<ul className='flex gap-8 mr-16 text-[18px]'>
						<Link spy={true} smooth={true} to="Home">
							<li className='hover:text-fuchsia-600  transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
						</Link>
						<Link spy={true} smooth={true} to='Services'>
							<li className='hover:text-fuchsia-600  transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>API</li>
						</Link>
						<Link spy={true} smooth={true} to='Projects'>
							<li className='hover:text-fuchsia-600  transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Blog</li>
						</Link>
						<Link spy={true} smooth={true} to='Documentation'>
							<li className='hover:text-fuchsia-600  transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Github</li>
						</Link>
					</ul>
				</div>
			</div>
			<div>
				{click && content}
			</div>
			<button className='block sm:hidden transition' onClick={handleClick}>
				{click ? <FaTimes/> : <CiMenuFries/>}
			</button>
		</div>
	</nav>
  );
}

export default Navbar;
