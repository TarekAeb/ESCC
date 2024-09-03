import { FC } from 'react';
// import { Button } from "../../Common/Button";
// import GitHub from '../../assets/github.svg';
import gsap from 'gsap';
import './index.css'
import Header from '../header';
import { useGSAP } from '@gsap/react';
const Hero: FC = () => {
    useGSAP(() => {
        gsap.to('#logo', { opacity: 1, delay: 1.6, })
        gsap.to('#scroll', { opacity: 1, delay: 2, })
    }, [])
    return (
        <div className="select-none w-full h-[100vh] flex flex-col justify-between items-center p-4">
            <Header />
            <h1 id='logo' className="hero-title">ESCC</h1>
            <div className='w-full flex flex-col items-center justify-end'>
                <p id='scroll' className='opacity-0 text-xl'>scroll down to see the magic</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" className='w-20 font-normal'>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill="rgba(160, 187, 189, 0.8)">
                            <path d="M40,41.0074017 L40,41.0074017 L40,58.9925983 C40,64.5218355 44.4762336,69 50,69 C55.5234877,69 60,64.5203508 60,58.9925983 L60,41.0074017 C60,35.4781645 55.5237664,31 50,31 C44.4765123,31 40,35.4796492 40,41.0074017 L40,41.0074017 Z M38,41.0074017 C38,34.3758969 43.3711258,29 50,29 C56.627417,29 62,34.3726755 62,41.0074017 L62,58.9925983 C62,65.6241031 56.6288742,71 50,71 C43.372583,71 38,65.6273245 38,58.9925983 L38,41.0074017 L38,41.0074017 Z"></path>
                            <path d="M49,36 L49,40 C49,40.5522847 49.4477153,41 50,41 C50.5522847,41 51,40.5522847 51,40 L51,36 C51,35.4477153 50.5522847,35 50,35 C49.4477153,35 49,35.4477153 49,36 L49,36 Z"></path>
                            <path d="M50,81.9929939 L55.4998372,76.4931567 C55.8903615,76.1026324 56.5235265,76.1026324 56.9140508,76.4931567 C57.3045751,76.883681 57.3045751,77.516846 56.9140508,77.9073703 L50.7071068,84.1143143 C50.5118446,84.3095764 50.2559223,84.4072075 50,84.4072075 C49.7440777,84.4072075 49.4881554,84.3095764 49.2928932,84.1143143 L43.038379,77.8598002 C42.6478547,77.4692759 42.6478547,76.8361109 43.038379,76.4455866 C43.4289033,76.0550623 44.0620683,76.0550623 44.4525926,76.4455866 L50,81.9929939 Z" className="MouseScroll--chevron"></path>
                        </g>
                    </g>
                </svg>
            </div>
            <img src="" alt="" />
        </div>
    );
};

export default Hero;
