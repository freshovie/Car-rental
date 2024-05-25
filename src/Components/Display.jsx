import Sidebar from './Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Label from '../Label/Label';
import { CarDisplay, OffUp, PopularCar } from './Pages';

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
                                <PopularCar />
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