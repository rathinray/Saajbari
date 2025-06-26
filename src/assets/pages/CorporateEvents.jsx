import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CorporateEvents() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-pink-300 border-t-pink-700 rounded-full animate-spin mb-6"></div>
                <h1 className="text-2xl text-primary font-bold text-center mt-4">Under Constraction...</h1>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default CorporateEvents;