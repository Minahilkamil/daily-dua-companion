import { supabase } from './supabase';
import { findMatchingDua } from '../data/duas';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

// Errors whose message is safe to show to the user.
export class UserFacingError extends Error {}

export async function generateAIResponse(userMessage: string): Promise<string> {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      throw new UserFacingError('Your session has expired. Please log in again.');
    }

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
        apikey: SUPABASE_ANON_KEY,
        // The logged-in user's token, not the public anon key.
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify(body),
    });

    if (response.status === 401) {
      throw new UserFacingError('Your session has expired. Please log in again.');
    }
    // 429 (rate limit) still returns a friendly message in the body.
    if (!response.ok && response.status !== 429) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating AI response:', error);
    if (error instanceof UserFacingError) throw error;
    throw new UserFacingError(
      "Sorry, I couldn't get a response right now. Please try again in a moment."
    );
  }
}