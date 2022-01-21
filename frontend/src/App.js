import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import NavbarBottom from './components/NavbarBottom/NavbarBottom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import GiftScreen from './screens/GiftScreen/GiftScreen';
import CardScreen from './screens/CardScreen/CardScreen';
import ReviewBestScreen from './screens/ReviewBestScreen/ReviewBestScreen';
import RecordScreen from './screens/RecordScreen/RecordScreen';
import GamePreviewScreen from './screens/GamePreviewScreen/GamePreviewScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import PlayPreviewScreen from './screens/PlayPreviewScreen/PlayPreviewScreen';
import PlayScreen from './screens/PlayScreen/PlayScreen';
import RanksScreen from './screens/RanksScreen/RanksScreen';
import SettingPreviewScreen from './screens/SettingPreviewScreen/SettingPreviewScreen';
import GroupScreen from './screens/GroupScreen/GroupScreen';
import WeeklyRanksScreen from './screens/WeeklyRanksScreen/WeeklyRanksScreen';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <section role='main' className='container-sm'>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/gift' component={GiftScreen} />
        <Route path='/card' component={CardScreen} />
        <Route path='/reviewbest' component={ReviewBestScreen} />
        <Route path='/record' component={RecordScreen} />
        <Route path='/gamepreview' component={GamePreviewScreen} />
        <Route path='/game' component={GameScreen} />
        <Route path='/playpreview' component={PlayPreviewScreen} />
        <Route path='/play' component={PlayScreen} />
        <Route path='/ranksme' component={RanksScreen} />
        <Route path='/ranksbest' component={RanksScreen} />
        <Route path='/settingpreview' component={SettingPreviewScreen} />
        <Route path='/group' component={GroupScreen} />
        <Route path='/ranksweeklyme' component={WeeklyRanksScreen} />
        <Route path='/ranksweeklybest' component={WeeklyRanksScreen} />
        <Route path='/ranksgroupme' component={RanksScreen} />
        <Route path='/ranksgroupbest' component={RanksScreen} />
      </section>
      <NavbarBottom />
    </div>
  );
}

export default App;
