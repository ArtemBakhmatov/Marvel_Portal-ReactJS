import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

// динамические импорты всегда в последнюю очередь
const Page404 = lazy(() => import('../pages/404'));         // ленивая загрузка
const MainPage = lazy(() => import('../pages/MainPage'));   
const ComicsPage = lazy(() => import('../pages/ComicsPage')); 
//const SingleComicPage = lazy(() => import('../pages/SingleComicPage')); 

const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>} />
                            <Route path="/comics" element={<ComicsPage/>} />  
                            <Route path="/comics/:comicId" element={<SinglePage Component={SingleComicLayout} dataType='comic' />} />  
                            <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} /> 
                            <Route path="*" element={<Page404/>} /> 
                        </Routes>
                    </Suspense>
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