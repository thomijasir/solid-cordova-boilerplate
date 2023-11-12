export interface IAppContext {
  loadingState: {
    isLoading: boolean;
    text: string;
  };
  errorState: {
    isError: boolean;
    title: string;
    message: string;
  };
}

// Initial State
const initState: IAppContext = {
  loadingState: {
    isLoading: false,
    text: 'Loading...',
  },
  errorState: {
    isError: false,
    title: 'Something Wrong!',
    message:
      'Opps, please check app configuration or service that might cause this error.',
  },
};

export default initState;
