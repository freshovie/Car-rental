import Sidebar from './Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Label from '../Label/Label';
import Footer from '../Footer/Footer';
import { CarDisplay, OffUp, PopularCar, Headpage, Recommended, ShowMore } from './Pages';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Display = () => {
    return (  
        <div>
            <Router>
                <div className="display">
                    <Label />
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                                <CarDisplay />
                                <OffUp />
                                <Headpage />
                                <PopularCar />
                                <Recommended />
                                <ShowMore />
                                <Footer />
                            </Route>
                            <Route path="/sidebar">
                                <Sidebar />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}
 
export default Display;