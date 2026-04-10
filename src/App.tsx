/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Sprout, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  XCircle,
  Home,
  Search,
  BookMarked,
  Star,
  StarOff,
  Bookmark
} from 'lucide-react';
import { EDUCATIONAL_DATA, CategoryData, Entry, QuizQuestion } from './data';

type Screen = 'HOME' | 'LEARN' | 'QUIZ' | 'CATEGORY_DETAIL' | 'FAVORITES';

interface FavoriteEntry {
  categoryKey: string;
  entryIndex: number;
  title: string;
  description: string;
}


const pageVariants = {
  initial: { opacity: 0, x: 10 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    x: -10,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('HOME');
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<QuizQuestion[]>([]);
  const [favorites, setFavorites] = useState<FavoriteEntry[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [visitedCategories, setVisitedCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('visited_categories');
    const savedDate = localStorage.getItem('visited_date');
    const today = new Date().toDateString();
    
    if (saved && savedDate === today) {
      return JSON.parse(saved);
    }
    return [];
  });

  const toggleFavorite = (categoryKey: string, entryIndex: number, entry: Entry) => {
    const isFav = favorites.some(f => f.categoryKey === categoryKey && f.entryIndex === entryIndex);
    let updated;
    if (isFav) {
      updated = favorites.filter(f => !(f.categoryKey === categoryKey && f.entryIndex === entryIndex));
    } else {
      updated = [...favorites, { categoryKey, entryIndex, title: entry.title, description: entry.description }];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const navigateToCategory = (key: string) => {
    setSelectedCategoryKey(key);
    setScreen('CATEGORY_DETAIL');
    
    if (!visitedCategories.includes(key)) {
      const updated = [...visitedCategories, key];
      setVisitedCategories(updated);
      localStorage.setItem('visited_categories', JSON.stringify(updated));
      localStorage.setItem('visited_date', new Date().toDateString());
    }
  };

  const startQuiz = () => {
    let questions: QuizQuestion[] = [];
    
    // Filter questions based on what they read "on that day"
    if (visitedCategories.length > 0) {
      visitedCategories.forEach(catKey => {
        if (EDUCATIONAL_DATA[catKey]) {
          questions = [...questions, ...EDUCATIONAL_DATA[catKey].questions];
        }
      });
    } else {
      // Fallback: if they haven't read anything, use all questions
      Object.values(EDUCATIONAL_DATA).forEach(cat => {
        questions = [...questions, ...cat.questions];
      });
    }

    // Shuffle and pick 10
    const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    setActiveQuizQuestions(shuffled);
    setQuizIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setScreen('QUIZ');
  };

  const handleQuizAnswer = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === activeQuizQuestions[quizIndex].answer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (quizIndex < activeQuizQuestions.length - 1) {
      setQuizIndex(q => q + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen font-sans max-w-md mx-auto bg-warm-bg shadow-xl flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-between border-b border-black/5">
        <h1 className="text-xl font-serif font-bold tracking-tight">Vawleipia hngalhnak (Youth)</h1>
        {screen !== 'HOME' && (
          <button 
            onClick={() => setScreen('HOME')}
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Home className="w-6 h-6" />
          </button>
        )}
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          {screen === 'HOME' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="text-center space-y-2">
                <h2 className="text-3xl font-serif font-bold">Hngalhnak thar i lak u</h2>
                <p className="text-black/60">Vawleicung thil sining le thiamnak lei cawnnak</p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                <motion.button
                  variants={itemVariants}
                  onClick={() => setScreen('LEARN')}
                  className="group relative overflow-hidden bg-white p-8 rounded-[32px] shadow-sm border border-black/5 flex items-center justify-between transition-all hover:shadow-md active:scale-95"
                >
                  <div className="space-y-1 text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-olive">Cawnnak Hmun</span>
                    <h3 className="text-2xl font-serif font-bold">Thil thar cawnnak</h3>
                  </div>
                  <BookOpen className="w-10 h-10 text-olive opacity-80" />
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  onClick={() => setScreen('FAVORITES')}
                  className="group relative overflow-hidden bg-white p-8 rounded-[32px] shadow-sm border border-black/5 flex items-center justify-between transition-all hover:shadow-md active:scale-95"
                >
                  <div className="space-y-1 text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600">I Khonmi</span>
                    <h3 className="text-2xl font-serif font-bold">Na duhmi hna</h3>
                  </div>
                  <Star className="w-10 h-10 text-amber-500 opacity-80" />
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  onClick={startQuiz}
                  className="group relative overflow-hidden bg-olive text-white p-8 rounded-[32px] shadow-sm flex items-center justify-between transition-all hover:shadow-md active:scale-95"
                >
                  <div className="space-y-1 text-left">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">Hneksaknak Hmun</span>
                    <h3 className="text-2xl font-serif font-bold">Na theihmi hneksak</h3>
                  </div>
                  <ChevronRight className="w-10 h-10 opacity-80" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {screen === 'LEARN' && (
            <motion.div
              key="learn"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <button onClick={() => setScreen('HOME')} className="p-2 rounded-full bg-white shadow-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-serif font-bold">Cawnnak</h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                {Object.keys(EDUCATIONAL_DATA).map((key) => (
                  <motion.button
                    key={key}
                    variants={itemVariants}
                    onClick={() => navigateToCategory(key)}
                    className="bg-white p-6 rounded-[24px] shadow-sm border border-black/5 flex items-center gap-6 transition-all hover:bg-black/[0.02]"
                  >
                    <div className="p-4 rounded-2xl bg-black/[0.03]">
                      {EDUCATIONAL_DATA[key].icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-serif font-bold">{EDUCATIONAL_DATA[key].title}</h3>
                      <p className="text-sm text-black/50">Cawn awk tampi a um</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'CATEGORY_DETAIL' && selectedCategoryKey && (
            <motion.div
              key="category"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <button onClick={() => setScreen('LEARN')} className="p-2 rounded-full bg-white shadow-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-serif font-bold">{EDUCATIONAL_DATA[selectedCategoryKey].title}</h2>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white p-6 rounded-[32px] shadow-sm border border-black/5 space-y-6">
                <div className="flex justify-center">
                  <div className="p-6 rounded-full bg-black/[0.03]">
                    {EDUCATIONAL_DATA[selectedCategoryKey].icon}
                  </div>
                </div>
                <div className="space-y-4">
                  {EDUCATIONAL_DATA[selectedCategoryKey].entries.map((entry, i) => (
                    <motion.div 
                      key={i}
                      variants={itemVariants}
                      className="p-4 rounded-xl bg-black/[0.02] space-y-2 relative group"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-olive flex items-center gap-2 pr-8">
                          <div className="w-1.5 h-1.5 rounded-full bg-olive" />
                          {entry.title}
                        </h4>
                        <button 
                          onClick={() => toggleFavorite(selectedCategoryKey, i, entry)}
                          className="p-1 rounded-lg hover:bg-black/5 transition-colors absolute top-3 right-3"
                        >
                          {favorites.some(f => f.categoryKey === selectedCategoryKey && f.entryIndex === i) ? (
                            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                          ) : (
                            <Star className="w-5 h-5 text-black/20" />
                          )}
                        </button>
                      </div>
                      <p className="text-base leading-relaxed text-black/80">{entry.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                onClick={() => setScreen('LEARN')}
                className="w-full py-4 bg-olive text-white rounded-2xl font-bold shadow-sm"
              >
                Kirnak
              </motion.button>
            </motion.div>
          )}

          {screen === 'FAVORITES' && (
            <motion.div
              key="favorites"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <button onClick={() => setScreen('HOME')} className="p-2 rounded-full bg-white shadow-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-serif font-bold">I Khonmi (Favorites)</h2>
              </motion.div>

              {favorites.length === 0 ? (
                <motion.div variants={itemVariants} className="text-center py-12 space-y-4">
                  <Bookmark className="w-16 h-16 text-black/10 mx-auto" />
                  <p className="text-black/40 font-medium">Na duhmi thil pakhat hmanh na khon rih lo.</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {favorites.map((fav, i) => (
                    <motion.div 
                      key={`${fav.categoryKey}-${fav.entryIndex}`}
                      variants={itemVariants}
                      className="bg-white p-6 rounded-[24px] shadow-sm border border-black/5 space-y-3 relative"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-olive opacity-60">
                            {EDUCATIONAL_DATA[fav.categoryKey]?.title || 'Hngalhnak'}
                          </span>
                          <h4 className="text-lg font-serif font-bold text-olive">{fav.title}</h4>
                        </div>
                        <button 
                          onClick={() => toggleFavorite(fav.categoryKey, fav.entryIndex, { title: fav.title, description: fav.description })}
                          className="p-2 rounded-xl bg-amber-50 text-amber-600"
                        >
                          <Star className="w-5 h-5 fill-amber-500" />
                        </button>
                      </div>
                      <p className="text-base leading-relaxed text-black/80">{fav.description}</p>
                      <button 
                        onClick={() => navigateToCategory(fav.categoryKey)}
                        className="text-xs font-bold text-olive/60 flex items-center gap-1 pt-2"
                      >
                        Category zoh tthan <ChevronRight className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {screen === 'QUIZ' && (
            <motion.div
              key="quiz"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              {!showResult ? (
                <>
                  <motion.div variants={itemVariants} className="flex items-center justify-between">
                    <button onClick={() => setScreen('HOME')} className="p-2 rounded-full bg-white shadow-sm">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="text-sm font-bold text-olive uppercase tracking-widest">
                      {quizIndex + 1} / {activeQuizQuestions.length}
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.h3 variants={itemVariants} className="text-2xl font-serif font-bold text-center leading-tight">
                      {activeQuizQuestions[quizIndex].question}
                    </motion.h3>

                    <div className="space-y-3">
                      {activeQuizQuestions[quizIndex].options.map((option, i) => {
                        const isSelected = selectedOption === i;
                        const isCorrect = i === activeQuizQuestions[quizIndex].answer;
                        
                        let bgColor = 'bg-white';
                        let borderColor = 'border-black/5';
                        let textColor = 'text-black';

                        if (selectedOption !== null) {
                          if (isSelected) {
                            bgColor = isCorrect ? 'bg-green-50' : 'bg-red-50';
                            borderColor = isCorrect ? 'border-green-500' : 'border-red-500';
                            textColor = isCorrect ? 'text-green-700' : 'text-red-700';
                          } else if (isCorrect) {
                            bgColor = 'bg-green-50';
                            borderColor = 'border-green-500';
                            textColor = 'text-green-700';
                          }
                        }

                        return (
                          <motion.button
                            key={i}
                            variants={itemVariants}
                            disabled={selectedOption !== null}
                            onClick={() => handleQuizAnswer(i)}
                            className={`w-full p-5 rounded-2xl border-2 text-left text-lg font-medium transition-all ${bgColor} ${borderColor} ${textColor} flex items-center justify-between`}
                          >
                            <span>{String.fromCharCode(65 + i)}) {option}</span>
                            {selectedOption !== null && isCorrect && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                              </motion.div>
                            )}
                            {selectedOption !== null && isSelected && !isCorrect && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                <XCircle className="w-6 h-6 text-red-500" />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {selectedOption !== null && (
                      <motion.div 
                        variants={itemVariants}
                        className={`text-center p-3 rounded-xl font-bold ${
                          selectedOption === activeQuizQuestions[quizIndex].answer 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-red-600 bg-red-50'
                        }`}
                      >
                        {selectedOption === activeQuizQuestions[quizIndex].answer ? 'Na hman!' : 'A hman lo!'}
                      </motion.div>
                    )}
                  </div>

                  {selectedOption !== null && (
                    <motion.button
                      variants={itemVariants}
                      onClick={nextQuestion}
                      className="w-full py-4 bg-olive text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                    >
                      {quizIndex === activeQuizQuestions.length - 1 ? 'Zoh tthan' : 'A hmai'}
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  )}
                </>
              ) : (
                <div className="text-center space-y-8 py-8">
                  <motion.div variants={itemVariants} className="space-y-4">
                    <div className="inline-block p-6 rounded-full bg-white shadow-sm">
                      <CheckCircle2 className="w-16 h-16 text-olive" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold">Hneksaknak tlamtling!</h2>
                    <p className="text-xl text-black/60">Na hmuhmi score: {score} / {activeQuizQuestions.length}</p>
                  </motion.div>

                  <div className="space-y-3">
                    <motion.button
                      variants={itemVariants}
                      onClick={startQuiz}
                      className="w-full py-4 bg-olive text-white rounded-2xl font-bold flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Tuah tthan
                    </motion.button>
                    <motion.button
                      variants={itemVariants}
                      onClick={() => setScreen('HOME')}
                      className="w-full py-4 bg-white text-black border border-black/10 rounded-2xl font-bold"
                    >
                      Innkung ah kir
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <footer className="p-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-bold">
          Chin State • Hakha • 2026
        </p>
      </footer>
    </div>
  );
}
