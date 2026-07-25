import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Dua, Theme } from "../types";
import { duas } from "../data/duas";
import { getColors } from "../constants/colors";
import {
  supabase,
  getTheme,
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../services/supabase";

export default function CategoriesScreen({ theme }: { theme: Theme }) {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const colors = getColors(theme);

  // Group duas by category
  const categorizedDuas = useMemo(() => {
    const groups: Record<string, Dua[]> = {};
    duas.forEach((dua) => {
      if (!groups[dua.category]) {
        groups[dua.category] = [];
      }
      groups[dua.category].push(dua);
    });
    return groups;
  }, []);

  const categoryList = useMemo(
    () => Object.keys(categorizedDuas),
    [categorizedDuas],
  );

  useEffect(() => {
    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        // Load favorites
        const { data } = await supabase
          .from("favorites")
          .select("dua_id")
          .eq("user_id", user.id);
        if (data) {
          setFavoriteIds(new Set(data.map((f) => f.dua_id)));
        }
      }
      setLoading(false);
    }
    init();
  }, []);

  const toggleFavorite = async (duaId: string) => {
    if (!userId) return;
    const isFav = favoriteIds.has(duaId);
    if (isFav) {
      await removeFavorite(userId, duaId);
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        next.delete(duaId);
        return next;
      });
    } else {
      await addFavorite(userId, duaId);
      setFavoriteIds((prev) => new Set(prev).add(duaId));
    }
  };

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.background },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 24,
      paddingVertical: 18,
      backgroundColor: colors.cardBackground,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerTitle: {
      fontSize: 19,
      color: colors.darkText,
      fontFamily: "Georgia",
      fontWeight: "600",
    },
    categoryItem: {
      backgroundColor: colors.cardBackground,
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    categoryHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    categoryName: {
      fontSize: 17,
      fontWeight: "600",
      color: colors.darkText,
    },
    duaCard: {
      marginTop: 16,
      paddingTop: 20,
      paddingHorizontal: 16,
      paddingBottom: 16,
      backgroundColor: colors.background,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
    },
    duaArabic: {
      fontSize: 24,
      textAlign: "right",
      marginBottom: 12,
      marginTop: 8,
      paddingTop: 4,
      color: colors.darkText,
      lineHeight: 48,
      includeFontPadding: true,
    },
    duaTransliteration: {
      fontSize: 15,
      fontStyle: "italic",
      marginBottom: 8,
      color: colors.mutedText,
    },
    duaTranslation: {
      fontSize: 15,
      marginBottom: 4,
      color: colors.darkText,
      lineHeight: 22,
    },
    duaReference: {
      fontSize: 12,
      color: colors.gold,
      marginTop: 8,
    },
    favoriteButton: {
      padding: 4,
    },
  });

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color={colors.primaryGreen} />
        </View>
      </SafeAreaView>
    );
  }

  const renderCategory = ({ item: category }: { item: string }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() =>
        setExpandedCategory(expandedCategory === category ? null : category)
      }
    >
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryName}>{category}</Text>
        <Ionicons
          name={expandedCategory === category ? "chevron-up" : "chevron-down"}
          size={20}
          color={colors.mutedText}
        />
      </View>
      {expandedCategory === category &&
        categorizedDuas[category].map((dua) => (
          <View key={dua.id} style={styles.duaCard}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.duaArabic}>{dua.arabic}</Text>
                <Text style={styles.duaTransliteration}>
                  {dua.transliteration}
                </Text>
                <Text style={styles.duaTranslation}>
                  {dua.translationEnglish}
                </Text>
                <Text style={styles.duaTranslation}>{dua.translationUrdu}</Text>
                <Text style={styles.duaReference}>{dua.reference}</Text>
              </View>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => toggleFavorite(dua.id)}
              >
                <Ionicons
                  name={favoriteIds.has(dua.id) ? "heart" : "heart-outline"}
                  size={24}
                  color={favoriteIds.has(dua.id) ? "#E74C3C" : colors.mutedText}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </SafeAreaView>
  );
}
