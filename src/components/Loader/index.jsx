const Loader = ({ type }) => {
  if (type === "header") {
    return (
      <div
        data-testid="header-loader"
        className="flex items-center space-x-2 animate-pulse"
      >
        <div className="w-16 lg:w-24 h-[32px] lg:h-[64px] bg-gray-400 rounded-md" />
        <div className="w-44  h-[32px] md:h-[36px] bg-gray-400 rounded-md" />
      </div>
    );
  }

  // map ile dönmek için 16 elemana sahip bir dizi oluştur.
  const arr = new Array(16).fill();

  return arr.map((i, key) => (
    <div
      data-testid="card-loader"
      key={key}
      className="bg-gray-200 text-transparent p-4 rounded-md min-w-[206px] select-none animate-pulse"
    >
      <p className="bg-gray-300 w-2/5 text-sm font-semibold mb-3 rounded-md">
        .
      </p>
      <h2 className="bg-gray-300 w-3/5 text-lg font-bold rounded-md">.</h2>
    </div>
  ));
};

export default Loader;
