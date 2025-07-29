export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-[#001F3F] to-[#0073ff] text-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-start justify-center min-h-[80vh] gap-10">
          
          <h1 className="text-4xl lg:text-6xl font-bold max-w-4xl leading-tight">
            Get Ready for an Awesome <br /> Adventure
          </h1>

          <p className="text-base lg:text-lg font-medium max-w-2xl opacity-90">
            We are a company that builds high-quality all-terrain vehicles
            with an emphasis on power, safety, and performance.
          </p>

          <button className="bg-white text-[#0073ff] text-sm font-bold px-10 py-4 rounded-lg shadow-lg transition duration-300 hover:bg-[#e0eaff] hover:scale-105">
            See Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}
