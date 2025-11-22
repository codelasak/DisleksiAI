import React, { useState } from 'react';
import { AppView } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AgeSelection } from './components/AgeSelection';
import { DiagnosisIntro } from './components/DiagnosisIntro';
import { DiagnosisTest } from './components/DiagnosisTest';
import { ResultsProfile } from './components/ResultsProfile';
import { Dashboard } from './components/Dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.WELCOME);
  const [userAge, setUserAge] = useState<number | null>(null);

  const renderView = () => {
    switch (currentView) {
      case AppView.WELCOME:
        return <WelcomeScreen onNavigate={setCurrentView} />;
      case AppView.AGE_SELECTION:
        return <AgeSelection onNavigate={setCurrentView} setAge={setUserAge} />;
      case AppView.DIAGNOSIS_INTRO:
        return (
          <DiagnosisIntro 
            onNavigate={setCurrentView} 
            onBack={() => setCurrentView(AppView.AGE_SELECTION)} 
          />
        );
      case AppView.DIAGNOSIS_TEST:
        return <DiagnosisTest onNavigate={setCurrentView} />;
      case AppView.RESULTS:
        return <ResultsProfile onNavigate={setCurrentView} age={userAge} />;
      case AppView.DASHBOARD:
        return <Dashboard onNavigate={setCurrentView} />;
      default:
        return <WelcomeScreen onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="antialiased text-gray-900">
      {renderView()}
    </div>
  );
};

export default App;
