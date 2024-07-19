import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import getData from "../../redux/actions";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import InfoCard from "./InfoCard";
import { retry } from "@reduxjs/toolkit/query";

const Detail = () => {
  const { data, error, isLoading } = useSelector((store) => store);

  // url deki arama parametresini al
  const [params] = useSearchParams();
  const code = params.get("code");
  const dispatch = useDispatch();
  //! console.log(code)

// covid nesnesini diziye çevirme
const covidArr = Object.entries(data?.covid || {})
//! console.log(data.covid);
//! console.log(covidArr);

  useEffect(() => {
    // verileri alıp store a aktaran aksiyonu tetikle
    dispatch(getData({ code }));
  }, []);

  return (
    <div
      className="min-h-[calc(100vh-74px)]
     text-white grid place-items-center p-6"
    >
      <div
        className="min-h-[80vh] bg-white p-8 rounded-lg
      shadow-lg max-w-3xl max-md:w-full"
      >
        {/* üst içerik */}
        <div className="flex justify-between items-center">
          <Link
            className="bg-gray-700 py-2 px-3 rounded-md 
          hover:bg-grat-800"
            to="/"
          >
            Geri
          </Link>
          <div className="flex items-center space-x-2">
            {isLoading ? <Loader type="header"/> : data && (<>

            <img className="w-16 lg:w-24 rounded-md" src={data.country.flags.png}
             alt={data.country.flags.alt} />
            <h1 className="text-gray-900 text-lg lg:text-2xl font-bold">{data.country.altSpellings[1]}</h1>
            </>)}
          </div>
        </div>
        {/* alt içerik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {isLoading? (
          <Loader/>
        ) : error ? (<Error info={error} retry={()=>dispatch(getData(code))} />

        ):(

        covidArr.map((item, key)=> <InfoCard item={item} key={key} />)

        )}

        </div>
      </div>
    </div>
  );
};

export default Detail;
