import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

interface MockState {
  isAuth: boolean;
  isFCFSEnd: boolean;
  isRandomEnd: boolean;
  setIsAuth: (isAuth: boolean) => void;
  setIsFCFSEnd: (isFCFSEnd: boolean) => void;
  setIsRandomEnd: (isRandomEnd: boolean) => void;
}

interface MockProviderInterface {
  children: ReactNode;
  initialState?: Partial<MockState>;
}

export const MockContext = createContext<MockState | undefined>(undefined);

export const MockProvider = ({
  children,
  initialState,
}: MockProviderInterface) => {
  const [isAuth, setIsAuth] = useState(initialState?.isAuth || false);
  const [isFCFSEnd, setIsFCFSEnd] = useState(initialState?.isFCFSEnd || false);
  const [isRandomEnd, setIsRandomEnd] = useState(
    initialState?.isRandomEnd || false,
  );

  return (
    <MockContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isFCFSEnd,
        setIsFCFSEnd,
        isRandomEnd,
        setIsRandomEnd,
      }}
    >
      {children}
    </MockContext.Provider>
  );
};

const Providers = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: Partial<MockState>;
}) => {
  return (
    <BrowserRouter>
      <MockProvider initialState={initialState}>{children}</MockProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: RenderOptions,
  initialState?: Partial<MockState>,
) =>
  render(ui, {
    wrapper: (props) => <Providers initialState={initialState} {...props} />,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
