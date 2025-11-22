export enum AppView {
  WELCOME = 'WELCOME',
  AGE_SELECTION = 'AGE_SELECTION',
  DIAGNOSIS_INTRO = 'DIAGNOSIS_INTRO',
  DIAGNOSIS_TEST = 'DIAGNOSIS_TEST',
  RESULTS = 'RESULTS',
  DASHBOARD = 'DASHBOARD'
}

export interface UserProfile {
  name: string;
  age: number | null;
  score: number;
  difficulty: string;
  strength: string;
}

export interface DiagnosisQuestion {
  id: number;
  target: string;
  options: string[];
  correct: string;
}
