import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Favorite, Theme } from '../types';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Theme management
const THEME_KEY = '@daily_dua_companion:theme';

export async function getTheme(): Promise<Theme> {
  try {
    const saved = await AsyncStorage.getItem(THEME_KEY);
    return (saved as Theme) || 'light';
  } catch {
    return 'light';
  }
}

export async function setTheme(theme: Theme): Promise<void> {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    console.error('Failed to save theme:', e);
  }
}

// Favorites management
export async function getFavorites(userId: string): Promise<Favorite[]> {
  const { data, error } = await supabase
    .from('favorites')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }
  return data as Favorite[];
}

export async function addFavorite(userId: string, duaId: string): Promise<void> {
  const { error } = await supabase.from('favorites').insert([
    { user_id: userId, dua_id: duaId },
  ]);
  if (error) {
    console.error('Error adding favorite:', error);
  }
}

export async function removeFavorite(userId: string, duaId: string): Promise<void> {
  const { error } = await supabase
    .from('favorites')
    .delete()
    .eq('user_id', userId)
    .eq('dua_id', duaId);
  if (error) {
    console.error('Error removing favorite:', error);
  }
}

export async function isFavorite(userId: string, duaId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('favorites')
    .select('id')
    .eq('user_id', userId)
    .eq('dua_id', duaId)
    .single();
  if (error) {
    return false;
  }
  return !!data;
}
