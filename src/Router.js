import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FriendList from "./FriendList";
import EnterApp_3ofghost from "./EnterApp_3ofghost";
import Eye_LoadingScene from "./Eye_LodeingScene";
import Profiletar from "./Profile-Tar";
import LobbySetting from "./LobbySetting";
import ChatBox from "./Chatbox";
import LobbyHeader from "./LobbyHeader";
import LoadingBar from "./LoadingBar";
import Phai from './ProfilePhai';

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Profile_Tar">
                    <Profiletar/>
                </Route>
                <Route path="/ProfilePhai">
                    <Phai/>
                </Route>
                <Route path="/Eye_Scene">
                    <LoadingBar/>
                </Route>
                <Route path="/friend-list">
                    <FriendList/>
                </Route>
                <Route path="/App">
                    <ChatBox/>
                </Route>
                <Route path="/LobbySetting">
                    <LobbySetting/>
                </Route>
                <Route path="/">
                    <EnterApp_3ofghost/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

