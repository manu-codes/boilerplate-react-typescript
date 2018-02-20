import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  Route,
  Router,
  Switch,
} from "react-router";
import App from "./containers/App";
import { createBrowserHistory } from "history";
import { configureStore, localStorage } from "./store";

const APP_STORAGE = "KanbanStore";
const store = configureStore(localStorage.get(APP_STORAGE) || {});

store.subscribe(() => {
  if (!localStorage.get("debug")) {
    localStorage.set(APP_STORAGE, store.getState());
  }
});

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root"),
);
