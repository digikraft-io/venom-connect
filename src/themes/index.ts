import { ThemeConfig } from '../types';
import { theme } from './theme';

export const themesList = {
  [theme.name]: theme
};

export const getThemeConfig = (): ThemeConfig => {
  return themesList[theme.name];
};
