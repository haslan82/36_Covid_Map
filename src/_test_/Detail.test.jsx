import { render, screen } from "@testing-library/react";
import Detail from "../pages/Detail/index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { exa_data } from "../constants";



// test ortamında ki sahte store un kurulumunu yap
const mockStore = configureStore([thunk]);

it("yüklenme durumunda loader bilşenleri ekrana basılır", () => {
  // yüklenme durumunda ki store u simule et
  const store = mockStore({ isLoading: true, error: null, data: null });

  const container = render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );

  // Loader' lar ekrana geliyor mu
  screen.getByTestId("header-loader");
  screen.getAllByTestId("card-loader");
});

it("hata gelme durumunda error bileşeni ekrana basılır", () => {
  const store = mockStore({
    isLoading: false,
    error: " 404 content not found",
    data: null,
  });

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Detail />
      </Provider>
    </BrowserRouter>
  );

// hatanın metnini içeren element ekrana basıldı mı?
screen.getByText(/404 content/i);


});



it("veri gelme durumunda ülke bilgisi ve kartlar ekrana basılır", () =>{

    // veri gelme durumunda ki store u simule et
    const store = mockStore({
        isLoading: false,
        error: null,
        data: exa_data,
      });
    
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Detail />
          </Provider>
        </BrowserRouter>
      );
    
      // 1) ülke detayları ekrana geliyor mu?


      // ) ülke ismi ekrana geliyor mu?
      screen.getByText("Germany");

      // ekranda ki resmi al

const img = screen.getByRole("img");

      // resmin kaynağı doğru mu?
      expect(img).toHaveProperty("src", exa_data.country.flags.png);



 // 2) Kartlar ekrana geliyor mu?

  // covid nesnesini diziye çevir
const arr = Object.entries(exa_data.covid);

// dizideki bütün elemaların key ve value değerleri ekrana basılıyor mu?
arr.forEach((item)=> {
    // başlık ekrana geldi mi ?
screen.getByText(item[0].split("_").join(" "));
    // değer ekrana geldi mi ?
    screen.getByText(item[1]);
})

    });


    