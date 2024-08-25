import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import getData from "../../redux/actions";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import InfoCard from "./InfoCard";

const Detail = () => {
  // store abone olma;
  const { data, error, isLoading } = useSelector((store) => store);

  // url'deki arama parametresini al
  const [params] = useSearchParams();
  const code = params.get("code");
  const query = params.get("q");

  const dispatch = useDispatch();

  useEffect(() => {
    // verileri alıp stora aktaran aksiyonu tetikle
    dispatch(getData({ code, query }));
  }, [code, query]);

  // covid nesnesini diziye çevirme işlemi;
  const covidArr = Object.entries(data?.covid || {});
  console.log(data);
  return (
    <div className=" min-h-[calc(100vh-74px)] grid place-items-center text-white p-6">
      <div className="min-h-[80vh] bg-white rounded-lg max-md:w-full max-w-3xl p-8">
        {/* üst içerik */}
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            className="bg-gray-900 hover:bg-gray-800 py-2 px-3 rounded-lg"
          >
            Geri
          </Link>
          <div className=" flex items-center space-x-2">
            {isLoading ? (
              <Loader type="header" />
            ) : (
              data && (
                <>
                  <img
                    src={data.country.flags.png}
                    alt={data.country.flags.alt}
                    className="w-16 lg:w-24 rounded-md"
                  />
                  <h1 className="text-gray-900 text-lg lg:text-2xl font-bold">
                    {data.country.altSpellings[1]}
                  </h1>
                </>
              )
            )}
          </div>
        </div>
        {/* alt içerik */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error info={error} retry={() => dispatch(getData(code, query))} />
          ) : (
            covidArr.map((item, key) => <InfoCard item={item} key={key} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
