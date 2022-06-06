import { FC, useMemo } from 'react';
import {
  default as styled,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';
import { useColorScheme } from 'use-color-scheme';
import { MainWidgetContainer } from './components/main-widget-container';
import { MobileContextProvider } from './services/mobile';
import { useSetting } from './services/settings';
import { darkTheme, lightTheme } from './theme/theme';

const getLightGradient = (theme: DefaultTheme) => `${theme.colors.background}`;

const getDarkGradient = (theme: DefaultTheme) => `${theme.colors.background}`;

const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  padding-bottom: 5vh;
  background: ${({ theme }) =>
    theme.dark ? getDarkGradient(theme) : getLightGradient(theme)};

  transition: background 0.5s ease;

  .ant-switch {
    background-color: rgba(0, 0, 0, 0.25);
    background-image: unset;
  }

  .ant-switch-checked {
    background: var(--ant-primary-color);
  }
`;

export const App: FC = () => {
  const { scheme } = useColorScheme();
  const [darkMode] = useSetting('darkMode', scheme === 'dark');

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);
  const antTheme = useMemo(
    () =>
      ({
        '--ant-primary-color': theme.colors.primary,
        '--ant-primary-color-hover': theme.colors.primary,
      } as React.CSSProperties),
    [theme]
  );
  return (
    <ThemeProvider theme={theme}>
      <MobileContextProvider>
        <Container style={antTheme}>
          <MainWidgetContainer />
        </Container>
      </MobileContextProvider>
    </ThemeProvider>
  );
};
