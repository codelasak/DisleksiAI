'use server';

import { getPersonalizedFeedback as getFeedbackLib, getHelpResponse as getHelpLib } from '@/lib/gemini';

export async function getPersonalizedFeedback(age: number, score: number) {
  try {
    return await getFeedbackLib(age, score);
  } catch (error) {
    console.error('Server Action Error (getPersonalizedFeedback):', error);
    return "Harika bir iş çıkardın! Okuma yolculuğunda seninle birlikteyiz.";
  }
}

export async function getHelpResponse(query: string) {
  try {
    return await getHelpLib(query);
  } catch (error) {
    console.error('Server Action Error (getHelpResponse):', error);
    return "Şu anda bağlantı kuramıyorum, ancak harika gidiyorsun!";
  }
}
