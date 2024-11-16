
const Hero = () => {
    return (
        <div className="container flex items-center h-[100vh] mobile-container flex-col sm:flex-row md:gap-5" style={{ height: 'calc(100vh - 72px)'}} >
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-extrabold text-black">YOUR FEET
                    DESERVE
                    THE BEST</h2>
                <p className="font-semibold text-[#5A5959] text-[16px]">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="flex gap-4">
                    <button className="px-4 py-[6px] font-semibold text-white bg-custom-red">Shop Now</button>
                    <button className="bg-gray-200 border-radious-[10px] px-4 py-[6px] font-semibold text-custom-red">Category</button>
                </div>
            </div>

      <div>
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
        </div>
    )
}
export default Hero; 