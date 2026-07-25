import { Theme } from '../types';

export const Colors = {
  light: {
    background: '#F9F4ED',
    cardBackground: '#FFFFFF',
    primaryGreen: '#4A6741',
    darkText: '#2D3436',
    mutedText: '#8A8578',
    gold: '#B8935F',
    border: '#EDE3D3',
    userBubble: '#4A6741',
    assistantBubble: '#FFFFFF',
  },
  dark: {
    background: '#121212',
    cardBackground: '#1E1E1E',
    primaryGreen: '#6B8F5F',
    darkText: '#E8E6E3',
    mutedText: '#9E9A90',
    gold: '#D4AF37',
    border: '#333333',
    userBubble: '#6B8F5F',
    assistantBubble: '#2D2D2D',
  },
};

export function getColors(theme: Theme) {
  return Colors[theme];
}
