import { A } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import PageLayout from "../layouts/page.layout";
import useAppContext from "../hooks/useAppContext";

const HomePage: Component<{}> = () => {

  const [count, setCount] = createSignal(0);
  const [, setContext] = useAppContext();

  const handleOpenLoading = () => {
    setContext('loadingState', 'isLoading', true);
    setTimeout(() => {
      setContext('loadingState', 'isLoading', false);
    }, 2000)
  }

  return (
    <PageLayout styleClass="fade-in">
      <div class="flex flex-col max-w-lg h-screen justify-center items-center m-auto p-4 space-y-12">
        <div class="flex space-x-10">
          <img src="res/solid.svg" width={165} height={166} />
          <img src="vite.svg" width={140} />
        </div>
        <div class="flex flex-col space-y-4">
          <div class="flex w-full justify-center space-x-4">
            <div class="font-bold text-xs bg-gray-200 py-2 px-4">
              <A href="/">Home</A>
            </div>
            <div class="font-bold text-xs bg-gray-200 py-2 px-4">
              <A href="/about">About</A>
            </div>
            <div class="font-bold text-xs bg-gray-200 py-2 px-4">
              <A href="/login">Login</A>
            </div>
          </div>
          <h2 class="font-bold text-lg">Solid + Cordova Boilerplate</h2>
          <p>Create solid application faster with solid boilerplate with pre configure project and component</p>
          <div class="leading-4">
            <h3 class="font-bold mb-2">Features</h3>
            <ul class="list-inside text-sm">
              <li>- Pre-Setup Store</li>
              <li>- Pre-Setup model type, interface</li>
              <li>- Custom Store React Context Approach</li>
              <li>- Router Ready</li>
              <li>- Auth Ready</li>
              <li>- Folder System</li>
              <li>- Tailwind Integrated</li>
              <li>- Loading Component</li>
              <li>- Normalize Css Integrated</li>
              <li>- Basic Animation CSS</li>
              <li>- Page Layout base</li>
              <li>- Build legacy Support ie 11</li>
              <li>- Cordova Support</li>
            </ul>
          </div>
          <div class="flex space-x-4 items-center justify-center">
            <button onClick={handleOpenLoading} class="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">
              Open Loading
            </button>
            <button onClick={() => {
              setCount((prev: number) => prev + 1)
            }} class="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">
              Count ({count()})
            </button>
          </div>

        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage