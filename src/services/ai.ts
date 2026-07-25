import { supabase } from './supabase';
import { findMatchingDua } from '../data/duas';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

export async function generateAIResponse(userMessage: string): Promise<string> {
  try {
    const matchedDua = findMatchingDua(userMessage);

    const body: any = { message: userMessage };

    if (matchedDua) {
      body.verifiedDua = {
        category: matchedDua.category,
        arabic: matchedDua.arabic,
        transliteration: matchedDua.transliteration,
        translation: matchedDua.translationEnglish,
        reference: matchedDua.reference,
      };
    }

    const response = await fetch(`${SUPABASE_URL}/functions/v1/chat-completion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw new Error('Failed to generate response');
  }
}