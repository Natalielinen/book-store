import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BooksContainer from "./components/books/BooksContainer";

function App() {
    return (
        <div>
            <Header/>
            <BooksContainer />
            <Footer/>
        </div>

    )

}

export default App;
