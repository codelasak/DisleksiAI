// Navigation types
export enum AppView {
  WELCOME = 'WELCOME',
  AGE_SELECTION = 'AGE_SELECTION',
  DIAGNOSIS_INTRO = 'DIAGNOSIS_INTRO',
  DIAGNOSIS_TEST = 'DIAGNOSIS_TEST',
  RESULTS = 'RESULTS',
  DASHBOARD = 'DASHBOARD',
}

// User Profile
export interface UserProfile {
  name: string;
  age: number | null;
  score: number;
  difficulty: string;
  strength: string;
}

// Diagnosis
export interface DiagnosisQuestion {
  id: number;
  target: string;
  options: string[];
  correct: string;
  imageHint?: string;
}

export interface DiagnosisResult {
  type: 'letter' | 'word' | 'text';
  score: number;
  responses: Array<{
    questionId: number;
    correct: boolean;
    responseTime: number;
  }>;
}

// Dyslexia Profile
export interface DyslexiaProfile {
  primaryType: 'phonological' | 'visual' | 'rapid_naming' | 'mixed';
  difficultyScore: number; // 0-1
  strengths: string[];
  challenges: string[];
  recommendedStrategies: string[];
}

// Exercise types
export interface Exercise {
  id: string;
  type: 'word_recognition' | 'text_comprehension' | 'spelling' | 'phonics';
  question: string;
  options: string[];
  correct: string;
  hint?: string;
  audioText?: string;
  imageHint?: string;
  difficultyLevel: number;
}

export interface ExerciseResponse {
  id: string;
  exerciseId: string;
  studentId: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  responseTimeMs: number;
  hintsUsed: number;
  timestamp: Date;
}

// Progress and Reports
export interface WeeklyMetrics {
  sessions: number;
  totalTimeMinutes: number;
  successRate: number;
  skillsProgress: Record<string, { previous: number; current: number }>;
  newWordsLearned: number;
}

export interface Achievement {
  id: string;
  badgeType: string;
  badgeName: string;
  badgeIcon?: string;
  earnedAt: Date;
}

// API Request/Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface StudentCreateInput {
  firebaseUid: string;
  name: string;
  email?: string;
  age: number;
  grade?: number;
}

// Student data from Prisma
export interface Student {
  id: string;
  firebaseUid: string;
  name: string;
  email?: string | null;
  age: number;
  grade?: number | null;
  dyslexiaProfile?: DyslexiaProfile | null;
  createdAt: Date;
  updatedAt: Date;
}
