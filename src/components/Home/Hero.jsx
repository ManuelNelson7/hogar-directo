import React, { useEffect, useState } from "react"

const Hero = () => {
    const [buyOrRent, setBuyOrRent] = useState("alquilar")
    const [imageCover, setImageCover] = useState("https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

    useEffect(() => {
        buyOrRent === 'alquilar' && setImageCover("https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        buyOrRent === 'comprar' && setImageCover("https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    }, [buyOrRent])

    const propertyTypes = [
        { title: 'Casa', value: 'house' },
        { title: 'Departamento', value: 'departamento' },
        { title: 'PH', value: 'ph' },
        { title: 'Quinta', value: 'quinta' },
        { title: 'Garage', value: 'garage' },
        { title: 'Oficina comercial', value: 'oficina' },
        { title: 'Local comercial', value: 'local' },
        { title: 'Terreno', value: 'terreno' },
    ]

    return (
        <div className="min-h-screen bg-white">
            <main className="pt-20">
                <div>
                    {/* Hero card */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={imageCover}
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-40" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Encontr?? tu hogar</span>
                                        <span className="block text-yellow-400">sin dramas</span>
                                    </h1>

                                    <div className="mt-10 sm:mt-12 flex flex-col w-10/12">
                                        <div className="flex justify-start">
                                            <button
                                                className={"px-8 py-3 rounded-tl-lg border-r-2 border-gray-300" + (buyOrRent === "alquilar" ? "font-bold bg-white" : "font-base bg-gray-200")}
                                                onClick={() => setBuyOrRent("alquilar")}
                                            >Alquilar</button>

                                            <button
                                                className={"px-8 py-3 rounded-tr-lg border-gray-300" + (buyOrRent === "comprar" ? "font-bold bg-white" : "font-base bg-gray-200")}
                                                onClick={() => setBuyOrRent("comprar")}
                                            >Comprar</button>
                                        </div>

                                        <form action="#" className="rounded-lg">
                                            <div className="sm:flex">

                                                <select
                                                    id="property-type"
                                                    defaultValue="departamento"
                                                    className="block px-4 py-3 w-100 rounded-bl-lg bg-white border-0 text-base text-gray-900 placeholder-gray-700 focus:outline-none"
                                                >
                                                    {propertyTypes.map(propertyType => (
                                                        <option key={propertyType.value} value={propertyType.value}>{propertyType.title}</option>
                                                    ))}
                                                </select>

                                                <div className="bg-white w-full">
                                                    <input
                                                        id="location"
                                                        type="text"
                                                        placeholder={`Ingres?? una localidad, por ejemplo "Caballito"`}
                                                        className="block w-full px-4 py-3 w-100 bg-white border-0 text-sm text-gray-900 placeholder-gray-700 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="">
                                                    <button
                                                        type="submit"
                                                        className="block w-full py-3 px-6 rounded-lg sm:rounded-none sm:rounded-r-lg shadow bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-all duration-10"
                                                    >
                                                        Buscar
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo cloud */}
                    <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                Trusted by over 5 very average small businesses
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                        alt="StaticKit"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                        alt="Transistor"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                        alt="Workcation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}

export default Hero