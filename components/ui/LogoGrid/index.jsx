





const LogoGrid = () => (
    <div>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                PROUDLY SERVING BUSINESSES IN THE FOLLOWING STATES:
            </h2>
        </div>
        <div>
            <ul class="flex flex-wrap items-center justify-center text-gray-900 mt-2">
                <li>
                    <p class="me-4 md:me-6 ">Montana</p>
                </li>
                <li>
                    <p class="me-4 md:me-6">Washington</p>
                </li>
                <li>
                    <p class="me-4 md:me-6 ">Arizona</p>
                </li>
    
        </ul>
            
            {/* <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div> */}
        </div>
    </div>
)

export default LogoGrid