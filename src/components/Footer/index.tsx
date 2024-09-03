import GitHub from "../../assets/github.svg"
const Footer = () => {
    return (
        <>
            <a href='{ /*TODO*/ }' className='hidden cursor-pointer btn-container md:flex align-center'>
                <div className='svg-container bg-white h-[54px] w-[54px] p-1'><img src={GitHub} alt="github" /></div>
                <button className="btn-17">
                    <span className="text-container">
                        <span className="text">Contribute on github</span>
                    </span>
                </button>
            </a>
        </>
    )
}
export default Footer