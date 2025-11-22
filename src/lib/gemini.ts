import { GoogleGenerativeAI } from '@google/generative-ai';
import crypto from 'crypto';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

/**
 * Generate hash for caching
 */
function hashPrompt(prompt: string): string {
  return crypto.createHash('md5').update(prompt).digest('hex');
}

/**
 * Get AI model instance
 */
function getModel(modelName = 'gemini-2.0-flash-exp') {
  return genAI.getGenerativeModel({ model: modelName });
}

/**
 * Generate personalized feedback for student
 */
export async function getPersonalizedFeedback(
  age: number,
  score: number,
  context?: string
): Promise<string> {
  try {
    const model = getModel();
    const prompt = `Act as a supportive dyslexia specialist. Write a very short, encouraging 2-sentence message in Turkish for a ${age}-year-old student who just scored ${score}/100 on a reading test. ${context || ''} Keep it simple and motivating.`;
    
    const result = await model.generateContent(prompt);
    return result.response.text() || 'Harika bir iş çıkardın! Okuma yolculuğunda seninle birlikteyiz.';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Harika bir iş çıkardın! Okuma yolculuğunda seninle birlikteyiz.';
  }
}

/**
 * Generate diagnosis test questions
 */
export async function generateDiagnosisQuestions(
  type: 'letter' | 'word' | 'text',
  count: number = 5
): Promise<any[]> {
  try {
    const model = getModel();
    
    const prompts = {
      letter: `Generate ${count} dyslexia letter recognition test questions in Turkish. Focus on commonly confused letters like b-d, p-q. Return JSON array with: {id, target, options: [4 letters], correct}`,
      word: `Generate ${count} dyslexia word recognition test questions in Turkish. Use simple 2-3 syllable words. Return JSON array with: {id, target, options: [3 words], correct, imageHint}`,
      text: `Generate ${count} dyslexia text comprehension questions in Turkish. Short paragraphs (2-3 sentences) with simple questions. Return JSON array with: {id, text, question, options: [3 answers], correct}`,
    };
    
    const result = await model.generateContent(prompts[type]);
    let responseText = result.response.text();
    
    // Extract JSON from markdown code blocks if present
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    
    return JSON.parse(responseText);
  } catch (error) {
    console.error('Generate diagnosis error:', error);
    // Return mock data as fallback
    return getMockDiagnosisQuestions(type, count);
  }
}

/**
 * Generate adaptive exercise based on student profile
 */
export async function generateExercise(params: {
  profile: any;
  difficulty: number;
  type?: string;
}): Promise<any> {
  try {
    const model = getModel();
    
    const prompt = `Create a dyslexia-friendly ${params.type || 'word recognition'} exercise in Turkish for:
- Dyslexia Profile: ${JSON.stringify(params.profile)}
- Difficulty Level: ${params.difficulty}/10
- Format: Return JSON with {exerciseId, type, question, options: [3-4 items], correct, hint, audioText}

Make it engaging, age-appropriate (10-16 years), and supportive. Use simple Turkish vocabulary.`;

    const result = await model.generateContent(prompt);
    let responseText = result.response.text();
    responseText = responseText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    
    return JSON.parse(responseText);
  } catch (error) {
    console.error('Generate exercise error:', error);
    return getMockExercise(params.difficulty);
  }
}

/**
 * Generate contextual hints for incorrect answers
 */
export async function generateHint(
  question: string,
  userAnswer: string,
  correctAnswer: string,
  profile: any
): Promise<string> {
  try {
    const model = getModel();
    
    const prompt = `A student with dyslexia (profile: ${JSON.stringify(profile)}) answered incorrectly.
Question: "${question}"
Their answer: "${userAnswer}"
Correct answer: "${correctAnswer}"

Provide a gentle, encouraging hint in Turkish that guides them toward the right answer without giving it away directly. Keep it short (1-2 sentences).`;

    const result = await model.generateContent(prompt);
    return result.response.text() || 'Bir kez daha dikkatlice düşün. Doğru cevaba çok yakınsın!';
  } catch (error) {
    console.error('Generate hint error:', error);
    return 'Bir kez daha dikkatlice düşün. Doğru cevaba çok yakınsın!';
  }
}

/**
 * Get help response for student questions
 */
export async function getHelpResponse(query: string): Promise<string> {
  try {
    const model = getModel();
    
    const prompt = `You are DisleksiAI, a helpful assistant for students with dyslexia. Answer this question simply and clearly in Turkish, using short sentences and simple words: "${query}"`;
    
    const result = await model.generateContent(prompt);
    return result.response.text() || 'Şu anda bağlantı kuramıyorum, ancak harika gidiyorsun!';
  } catch (error) {
    console.error('Help response error:', error);
    return 'Şu anda bağlantı kuramıyorum, ancak harika gidiyorsun!';
  }
}

/**
 * Mock fallback data generators
 */
function getMockDiagnosisQuestions(type: string, count: number): any[] {
  const mockQuestions: Record<string, any[]> = {
    letter: [
      { id: 1, target: 'b', options: ['b', 'd', 'p', 'q'], correct: 'b' },
      { id: 2, target: 'p', options: ['p', 'q', 'b', 'd'], correct: 'p' },
    ],
    word: [
      { id: 1, target: 'elma', options: ['elma', 'alma', 'arma'], correct: 'elma', imageHint: '🍎' },
      { id: 2, target: 'kedi', options: ['kedi', 'keçi', 'köpek'], correct: 'kedi', imageHint: '🐱' },
    ],
    text: [
      {
        id: 1,
        text: 'Ayı, orman içinde yaşayan büyük bir hayvandır. Bal yemekten çok hoşlanır.',
        question: 'Ayı neyi sever?',
        options: ['Balı', 'Otu', 'Suyu'],
        correct: 'Balı',
      },
    ],
  };
  
  return (mockQuestions[type] || []).slice(0, count);
}

function getMockExercise(difficulty: number): any {
  return {
    exerciseId: crypto.randomUUID(),
    type: 'word_recognition',
    question: 'Hangi kelime bu resme uyuyor?',
    options: ['kedi', 'keçi', 'köpek'],
    correct: 'kedi',
    hint: 'Kediler miyav yapar',
    audioText: 'Kedi',
    imageHint: '🐱',
  };
}
