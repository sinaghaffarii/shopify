const Hero = () => {
  return (
    <div
      className="
      mt-10
        grid
        grid-cols-1
        grid-rows-5
        gap-4

        md:grid-cols-5
        md:grid-rows-5
      "
    >
      <div
        className="
          rounded-lg bg-red-500 min-h-20 p-1
          row-span-3
          md:col-span-3
          md:row-span-5
        "
      >
        1
      </div>

      <div
        className="
          rounded-lg bg-blue-500 min-h-20 p-1 h-full
          md:col-span-2
          md:col-start-4
          md:row-span-2
        "
      >
        2
      </div>

      <div
        className="
          rounded-lg bg-green-500 min-h-20 p-1 h-full
          md:col-span-2
          md:col-start-4
          md:row-start-3
          md:row-span-2
        "
      >
        3
      </div>

      <div
        className="
          rounded-lg bg-yellow-500 min-h-20 p-1 h-full
          md:col-span-2
          md:col-start-4
          md:row-start-5
          md:row-span-1
        "
      >
        4
      </div>
    </div>
  );
};

export default Hero;
