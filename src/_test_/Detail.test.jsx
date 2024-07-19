import { render, screen } from "@testing-library/react";
import Detail from "../pages/Detail/index";
import { Provider } from "react-redux";
import  configureStore  from "redux-mock-store";
import {thunk} from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
// test ortamında ki sahte store un kurulumunu yap
const mockStore = configureStore([thunk]);


it("yüklenme durumunda loader bilşenleri ekrana basılır",()=>{
    
    // yüklenme durumunda ki store u simule et
const store = mockStore({isLoading:true, error: null, data: null});

 const container = render(

<BrowserRouter>

<Provider store={store}>
    <Detail/>
    </Provider>

</BrowserRouter>

    );

// Loader' lar ekrana geliyor mu
screen.getByTestId("header-loader");
screen.getAllByTestId("card-loader");



});


/* it("hata gelme durumunda error bileşeni ekrana basılır", () => {


});


it("veri gelme durumunda ülke bilgisi ve kartlar ekrana basılır", () =>{


}); */