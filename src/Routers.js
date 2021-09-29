import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./auth/privateRoute";
import Header from "./componets/Header";
import LayoutAdmin from "./layouts/admin";
import LayoutWebsite from "./layouts/website";
import NotFoundPage from "./pages/404";
import AboutPage from "./pages/about";
import AdminProductPage from "./pages/admin/product";
import AdminCategoryPage from "./pages/admin/category";
import UserDashboard from "./pages/admin/dashbroad"
import AdminProductAddPage from "./pages/admin/product/add";
import AdminCategoryAddPage from "./pages/admin/category/add";
import HomePage from "./pages/home";
import ProductDetail from "./pages/productdetail";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import AdminRoute from "./auth/adminRoute";
import AdminDashbroad from "./pages/admin/admindashbroad";
import EditProduct from "./pages/admin/product/edit";
// import EditCategory from "./pages/admin/category/edit";
function Test(props) {
  console.log(props);
  return null;
}
const Routers = (props) => {
  return (
    <>    
     <Router>
            < Switch>
                <Route exact path="/admin/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <AdminRoute>
                            <Route exact path="/admin">
                                <Redirect to="/admin/dashboard"/>
                            </Route>
                            <Route exact path="/admin/dashboard">
                                <AdminDashbroad/>
                            </Route>
                            <Route exact path="/admin/dashboard">
                                <AdminProductPage {...props} />
                            </Route>
                            <Route exact path="/admin/product">
                                <AdminProductPage {...props} />
                            </Route>
                            <Route exact path="/admin/product/add">
                                <AdminProductAddPage {...props} />
                            </Route>
                            <Route exact path="/admin/product/:id">
                                <EditProduct  {...props}/>
                            </Route>
                            <Route exact path="/admin/category">
                                <AdminCategoryPage {...props} />
                            </Route>                        
                            <Route exact path="/admin/category/add">
                               <AdminCategoryAddPage {...props}/>
                            </Route>
                            {/* <Route exact path="/admin/category/:id">
                                <EditCategory {...props} />
                            </Route> */}
                            </AdminRoute>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutWebsite>
                        <Switch>
                            <Route exact path="/">
                                <HomePage {...props} />
                            </Route>
                            <Route path="/product/:id">
                                <ProductDetail {...props}/>
                            </Route>
                            <Route exact path="/about">
                                <AboutPage />
                            </Route>
                            <Route path="/signin">
                                <SignIn />
                            </Route>
                            <Route path="/signup">
                                <SignUp />
                            </Route>
                            <PrivateRoute exact path="/user/dashboard">
                                <UserDashboard/>
                            </PrivateRoute>
                            <Route exact path="*">
                                <NotFoundPage />
                            </Route>

                        </Switch>
                    </LayoutWebsite>
                </Route>
            </Switch>



        </Router>
    </>
  );
};

export default Routers;
