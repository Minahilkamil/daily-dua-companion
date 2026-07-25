import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Chat: undefined;
  Categories: undefined;
  Favorites: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type TabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

export type Message = {
  id: string;
  user_id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
};

export type Dua = {
  id: string;
  keywords: string[];
  category: string;
  arabic: string;
  transliteration: string;
  translationUrdu: string;
  translationEnglish: string;
  reference: string;
};

export type Favorite = {
  id: string;
  user_id: string;
  dua_id: string;
  created_at: string;
};

export type Theme = 'light' | 'dark';
