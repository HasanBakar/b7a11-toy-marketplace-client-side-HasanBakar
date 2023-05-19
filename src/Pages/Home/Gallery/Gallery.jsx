const Gallery = () => {
    return (
        <div>
            <div className="flex items-center py-8 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <h3 className="text-center px-5 text-2xl font-semibold" >Our Toy Gallery</h3>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 card-compact p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/qWbJdWB/car5.png" />
      </div>
      <div className="w-1/2 card-compact p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/0ZBWLGL/mini-police-car1.jpg" />
      </div>
      <div className="w-full card-compact p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/TMVsCmf/mini-police-car6.webp" />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/nB5Prqw/Bus3.png" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/7yCYQzL/truck4.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://i.ibb.co/QjVPKvR/car4.png" />
      </div>
    </div>
  </div>
</div>
    );
};

export default Gallery;