import React from "react";
import { GiScooter } from "react-icons/gi";
import { MdAccessAlarm } from "react-icons/md";
const FreeService = () => {
    const services = [
        {
            icon: <GiScooter />,
            title: "Free shipping",
            description: "Sign up for updates and get free shipping",
        },
        {
            icon: <MdAccessAlarm />,
            title: "Quick service",
            description: "focused on providing customers with food as quickly and efficiently as possible",
        }

    ];
    return (
        <div className="pb-24 font-JosefinSans">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:p-0">
                    {services.map((service, index) => (
                        <div key={index} className="flex items-center justify-between p-5 border-4 border-dashed border-gray-300 hover:border-primary rounded-lg">
                            <span className="text-7xl hover:scale-110 transition-all duration-200 ease-in-out text-primary mr-6">{service.icon}</span>
                            <div>
                                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                                <p className="text-lg text-gray-400">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreeService;
