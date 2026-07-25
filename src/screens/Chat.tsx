import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Message, Dua, Theme } from '../types';
import { supabase, addFavorite, removeFavorite } from '../services/supabase';
import { generateAIResponse } from '../services/ai';
import { getColors } from '../constants/colors';
import { duas } from '../data/duas';
import { extractDuaFromMessage } from '../data/duas';

type Props = {
  theme: Theme;
  toggleTheme: () => void;
};

export default function ChatScreen({ theme, toggleTheme }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const flatListRef = useRef<FlatList>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const isInitialLoad = useRef(true);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const colors = getColors(theme);
  const insets = useSafeAreaInsets();

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 48,
    },
    emptyTitle: {
      fontSize: 22,
      fontFamily: 'Georgia',
      marginTop: 14,
      marginBottom: 8,
    },
    emptySubtitle: {
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 22,
    },
    messagesList: {
      padding: 16,
      paddingBottom: 8,
      flexGrow: 1,
    },
    messageRow: {
      marginBottom: 16,
      maxWidth: '85%',
    },
    messageRowUser: {
      alignSelf: 'flex-end',
      alignItems: 'flex-end',
    },
    messageRowAssistant: {
      alignSelf: 'flex-start',
      alignItems: 'flex-start',
    },
    messageBubble: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 18,
    },
    userMessage: {
      borderBottomRightRadius: 4,
    },
    assistantMessage: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 1,
      borderWidth: 1,
    },
    messageText: {
      fontSize: 15.5,
      lineHeight: 22,
    },
    userMessageText: {
      color: '#fff',
    },
    assistantMessageText: {
      color: colors.darkText,
    },
    timestamp: {
      fontSize: 11,
      marginTop: 4,
      marginHorizontal: 4,
    },
    timestampUser: {
      textAlign: 'right',
    },
    timestampAssistant: {
      textAlign: 'left',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingHorizontal: 14,
      paddingTop: 14,
      borderTopWidth: 1,
    },
    input: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 22,
      fontSize: 15.5,
      maxHeight: 120,
      borderWidth: 1,
    },
    sendButton: {
      marginLeft: 10,
      width: 46,
      height: 46,
      borderRadius: 23,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendButtonDisabled: {
    },
    typingIndicator: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 8,
    },
    typingText: {
      fontSize: 13,
      marginRight: 8,
    },
    dots: {
      flexDirection: 'row',
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      marginHorizontal: 2,
    },
  }), [colors]);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUserId(user.id);
      await Promise.all([
        fetchMessages(user.id),
        fetchFavorites(user.id),
      ]);
    } else {
      await supabase.auth.signOut();
    }
    setInitialLoading(false);
  }

  async function fetchMessages(uid: string) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('user_id', uid)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
    } else {
      setMessages(data as Message[]);
      setTimeout(() => {
        isInitialLoad.current = false;
      }, 500);
    }
  }

  async function fetchFavorites(uid: string) {
    const { data, error } = await supabase
      .from('favorites')
      .select('dua_id')
      .eq('user_id', uid);
    if (error) {
      console.error('Error fetching favorites:', error);
    } else if (data) {
      setFavoriteIds(new Set(data.map(f => f.dua_id)));
    }
  }

  async function toggleFavoriteDua(duaId: string) {
    if (!userId) return;
    const isFav = favoriteIds.has(duaId);
    if (isFav) {
      await removeFavorite(userId, duaId);
      setFavoriteIds(prev => {
        const next = new Set(prev);
        next.delete(duaId);
        return next;
      });
    } else {
      await addFavorite(userId, duaId);
      setFavoriteIds(prev => new Set(prev).add(duaId));
    }
  }

  async function sendMessage() {
    if (!text.trim() || loading || !userId) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      user_id: userId,
      role: 'user',
      content: text.trim(),
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setText('');
    setLoading(true);

    try {
      await saveMessage(userMessage);

      const aiText = await generateAIResponse(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        user_id: userId,
        role: 'assistant',
        content: aiText,
        created_at: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      await saveMessage(aiMessage);
    } catch (error) {
      Alert.alert('Error', 'Failed to generate response');
    } finally {
      setLoading(false);
    }
  }

  async function saveMessage(message: Message) {
    const { error } = await supabase.from('messages').insert([
      {
        user_id: message.user_id,
        role: message.role,
        content: message.content,
      },
    ]);

    if (error) {
      console.error('Error saving message:', error);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  function formatTime(iso: string) {
    try {
      const d = new Date(iso);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  }

  if (initialLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primaryGreen} />
      </View>
    );
  }

  const renderMessage = ({ item }: { item: Message }) => {
    const dua = item.role === 'assistant' ? extractDuaFromMessage(item.content) : null;
    return (
      <View
        style={[
          styles.messageRow,
          item.role === 'user' ? styles.messageRowUser : styles.messageRowAssistant,
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <View
            style={[
              styles.messageBubble,
              item.role === 'user'
                ? [styles.userMessage, { backgroundColor: colors.userBubble }]
                : [styles.assistantMessage, { backgroundColor: colors.assistantBubble, borderColor: colors.border }],
            ]}
          >
            <Text
              style={[
                styles.messageText,
                item.role === 'user' ? styles.userMessageText : styles.assistantMessageText,
              ]}
            >
              {item.content}
            </Text>
          </View>
          {dua && (
            <TouchableOpacity
              style={{ marginLeft: 8, marginTop: 8 }}
              onPress={() => toggleFavoriteDua(dua.id)}
            >
              <Ionicons
                name={favoriteIds.has(dua.id) ? 'heart' : 'heart-outline'}
                size={20}
                color={favoriteIds.has(dua.id) ? '#E74C3C' : colors.mutedText}
              />
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={[
            styles.timestamp,
            item.role === 'user' ? styles.timestampUser : styles.timestampAssistant,
          ]}
        >
          {formatTime(item.created_at)}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        {messages.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="moon-outline" size={40} color={colors.gold} />
            <Text style={[styles.emptyTitle, { color: colors.darkText }]}>Assalamu Alaikum</Text>
            <Text style={[styles.emptySubtitle, { color: colors.mutedText }]}>
              Ask about a moment in your day — waking up, eating, travel, distress —
              and receive an authentic dua for it.
            </Text>
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderMessage}
            contentContainerStyle={styles.messagesList}
            onContentSizeChange={() => {
              flatListRef.current?.scrollToEnd({ animated: !isInitialLoad.current });
            }}
            keyboardShouldPersistTaps="handled"
          />
        )}

        {loading && (
          <View style={styles.typingIndicator}>
            <Text style={[styles.typingText, { color: colors.mutedText }]}>Typing</Text>
            <View style={styles.dots}>
              <View style={[styles.dot, { backgroundColor: colors.primaryGreen, opacity: 0.3 }]} />
              <View style={[styles.dot, { backgroundColor: colors.primaryGreen, opacity: 0.6 }]} />
              <View style={[styles.dot, { backgroundColor: colors.primaryGreen }]} />
            </View>
          </View>
        )}

        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: colors.cardBackground,
              borderTopColor: colors.border,
              paddingBottom: Math.max(insets.bottom, 14),
            },
          ]}
        >
          <TextInput
            style={[styles.input, { backgroundColor: colors.background, color: colors.darkText, borderColor: colors.border }]}
            value={text}
            onChangeText={setText}
            placeholder="Type your question..."
            placeholderTextColor={colors.mutedText}
            multiline
          />
          <TouchableOpacity
            style={[
              styles.sendButton, { backgroundColor: colors.primaryGreen },
              (!text.trim() || loading) && { backgroundColor: '#E5DFD1' },
            ]}
            onPress={sendMessage}
            disabled={!text.trim() || loading}
          >
            <Ionicons
              name="send"
              size={19}
              color={text.trim() && !loading ? '#fff' : colors.mutedText}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}