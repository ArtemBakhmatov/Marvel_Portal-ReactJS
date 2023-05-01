import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, ComicsPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/comics" element={<ComicsPage/>} />    
                    </Routes>
                </main>
            </div>
        </Router>
    )  
}

export default App;

// Что бы обновить реакт до последней версии , нужно ввести команду:
// npm i react@latest react-dom@latest --save

// Чтобы установить react-router последней версии тоесть шестая версия:
// npm i react-router-dom --save

// Но так как не получилось реализовать результат, пришлось удалить последнюю версию:
// npm uninstall react-router-dom

// Установил пятую версию и всё сработало:
// npm install react-router-dom@5.2.0