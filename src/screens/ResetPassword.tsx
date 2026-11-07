import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../types';
import { supabase } from '../services/supabase';
import { getColors } from '../constants/colors';
import { notify } from '../utils/notify';

type Props = {
  theme: Theme;
  onDone: () => void;
};

export default function ResetPasswordScreen({ theme, onDone }: Props) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const colors = getColors(theme);

  async function handleSave() {
    if (password.length < 6) {
      notify('Password too short', 'Use at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        throw error;
      }

      notify('Password updated', 'You can now sign in with your new password.');
      onDone();
    } catch (error: any) {
      notify('Could not update password', error.message);
    } finally {
      setLoading(false);
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      padding: 28,
      justifyContent: 'center',
    },
    logoCircle: {
      alignSelf: 'center',
      width: 72,
      height: 72,
      borderRadius: 36,
      backgroundColor: colors.cardBackground,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },
    title: {
      fontSize: 30,
      fontWeight: '400',
      color: colors.darkText,
      textAlign: 'center',
      marginBottom: 6,
      fontFamily: 'Georgia',
    },
    subtitle: {
      fontSize: 15,
      color: colors.mutedText,
      textAlign: 'center',
      marginBottom: 36,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.cardBackground,
      borderRadius: 14,
      marginBottom: 16,
      paddingHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 6,
      elevation: 2,
    },
    inputIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      paddingVertical: 16,
      fontSize: 16,
      color: colors.darkText,
      // Hide the browser's default focus ring; only the caret shows.
      outlineStyle: 'none',
    } as any,
    button: {
      backgroundColor: colors.primaryGreen,
      paddingVertical: 17,
      borderRadius: 14,
      alignItems: 'center',
      marginTop: 8,
      marginBottom: 24,
      shadowColor: colors.primaryGreen,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 4,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Ionicons name="lock-closed" size={34} color={colors.gold} />
        </View>

        <Text style={styles.title}>Set a new password</Text>
        <Text style={styles.subtitle}>Choose a new password to continue</Text>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color={colors.primaryGreen} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="New password"
            placeholderTextColor={colors.mutedText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={colors.mutedText}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
          disabled={loading}
          activeOpacity={0.85}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Save</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
