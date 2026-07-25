import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, Theme } from '../types';
import { supabase } from '../services/supabase';
import { getColors } from '../constants/colors';

type Props = {
  navigation: NavigationProp;
  theme: Theme;
  toggleTheme: () => void;
};

export default function SignUpScreen({ navigation, theme, toggleTheme }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const colors = getColors(theme);

  async function handleSignUp() {
    if (!email || !password) {
      Alert.alert('Please enter both email and password');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      Alert.alert('Account created successfully');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Sign up failed', error.message);
    } finally {
      setLoading(false);
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 16,
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
    },
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
    linkButton: {
      alignItems: 'center',
    },
    linkText: {
      color: colors.mutedText,
      fontSize: 14,
    },
    linkTextBold: {
      color: colors.gold,
      fontWeight: '600',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            name={theme === 'light' ? 'moon-outline' : 'sunny-outline'}
            size={24}
            color={colors.darkText}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Ionicons name="moon" size={34} color={colors.gold} />
        </View>

        <Text style={styles.title}>Daily Dua Companion</Text>
        <Text style={styles.subtitle}>Create a new account</Text>

        <View style={styles.inputWrapper}>
          <Ionicons name="mail-outline" size={20} color={colors.primaryGreen} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.mutedText}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed-outline" size={20} color={colors.primaryGreen} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
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
          onPress={handleSignUp}
          disabled={loading}
          activeOpacity={0.85}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>
            Already have an account? <Text style={styles.linkTextBold}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
