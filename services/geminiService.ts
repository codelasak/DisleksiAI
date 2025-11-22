import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set. Gemini features will strictly rely on mock responses for demo purposes if this is missing in prod.");
    // In a real app, we might throw or handle this gracefully. 
    // For this demo, we'll assume the key is present or the UI handles the error.
  }
  return new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });
};

export const getPersonalizedFeedback = async (age: number, score: number): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Act as a supportive dyslexia specialist. Write a very short, encouraging 2-sentence message for a ${age}-year-old student who just scored ${score}/100 on a reading test. Keep it simple and motivating.`,
    });
    return response.text || "Harika bir iş çıkardın! Okuma yolculuğunda seninle birlikteyiz.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Harika bir iş çıkardın! Okuma yolculuğunda seninle birlikteyiz.";
  }
};

export const getHelpResponse = async (query: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are DisleksiAI, a helpful assistant for students with dyslexia. Answer this question simply and clearly in Turkish: "${query}"`,
    });
    return response.text || "Şu anda bağlantı kuramıyorum, ancak harika gidiyorsun!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Şu anda bağlantı kuramıyorum, ancak harika gidiyorsun!";
  }
};
