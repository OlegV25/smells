import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '@/modules/Main';
import CreatePost from '@/modules/CreatePost';
import ContactUs from '@/modules/ContactUs';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/create" component={CreatePost} />
    <Route exact path="/contact-us" component={ContactUs} />
  </Switch>
)

export default Routes;
