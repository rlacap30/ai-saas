import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 md:inset-x-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <div className="ml-[0] md:ml-72">
                <main className="">
                    <Navbar />
                    {children}
                </main>
            </div>
        </div>
    );
}
 
export default DashboardLayout;
