import { JSXElement, createContext, useContext } from 'solid-js';
import { SetStoreFunction, createStore } from 'solid-js/store';
import { Context } from 'solid-js';
import defaultState, { IAppContext } from "../stores/appContext";

interface IStateAppProvider {
  children?: JSXElement | JSXElement[];
}

const AppContext: Context<any> = createContext();

export const AppProvider = (props: IStateAppProvider) => {
  const [store, setStore] = createStore<IAppContext>({ ...defaultState });
  // For Modify Return Setter Object you
  // you can modify in the value return provider
  // createEffect(() => {
  // Serialize Context To LocalStorage
  //   console.log('SUBSCRIBE');
  //   localStorage.setItem('appStore', JSON.stringify(store));
  // });
  return (
    <AppContext.Provider value={[store, setStore]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default () =>
  useContext(AppContext) as [
    store: IAppContext,
    setState: SetStoreFunction<IAppContext>,
  ];
