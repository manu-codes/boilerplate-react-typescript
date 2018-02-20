import {
  applyMiddleware,
  createStore,
  GenericStoreEnhancer,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middleware";
import rootReducer, { IRootState } from "../reducers";
import localStorage from "./localStorage";

export function configureStore(initialState?: IRootState) {
  let middleware: GenericStoreEnhancer = applyMiddleware(logger);

  if (process.env.NODE_ENV === "development") {
    middleware = composeWithDevTools(middleware);
  }
  const store: Store<IRootState> = createStore(rootReducer, initialState, middleware) as Store<IRootState>;

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
export { localStorage };

