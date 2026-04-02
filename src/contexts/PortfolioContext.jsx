import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from './AuthContext';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};

const defaultPortfolioData = {
  personal: {
    fullName: '',
    title: '',
    profileImage: '',
    bio: '',
    location: '',
    email: '',
    phone: '',
    socialLinks: { github: '', linkedin: '', portfolio: '', twitter: '' }
  },
  skills: [],
  projects: [],
  experience: [],
  education: [],
  settings: {
    template: 'template1',
    themeColor: '#667eea',
    sectionVisibility: {
      about: true,
      skills: true,
      projects: true,
      experience: true,
      education: true
    },
    sectionOrder: ['about', 'skills', 'projects', 'experience', 'education']
  }
};

export const PortfolioProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : defaultPortfolioData;
  });
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
  }, [portfolioData]);

  // Load from Firebase when user logs in
  useEffect(() => {
    if (currentUser) {
      loadFromFirebase();
    }
  }, [currentUser]);

  // Add to history for undo/redo
  const addToHistory = (newData) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newData);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Update portfolio data
  const updatePortfolioData = (newData) => {
    addToHistory(portfolioData);
    setPortfolioData(newData);
  };

  // Undo
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setPortfolioData(history[historyIndex - 1]);
    }
  };

  // Redo
  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setPortfolioData(history[historyIndex + 1]);
    }
  };

  // Save to Firebase
  const saveToFirebase = async () => {
    if (!currentUser) {
      alert('Please login to save to cloud');
      return;
    }

    try {
      setLoading(true);
      const portfolioRef = doc(db, 'portfolios', currentUser.uid);
      await setDoc(portfolioRef, {
        ...portfolioData,
        updatedAt: new Date().toISOString(),
        userId: currentUser.uid
      });
      alert('Portfolio saved to cloud successfully!');
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      alert('Error saving to cloud. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Load from Firebase
  const loadFromFirebase = async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      const portfolioRef = doc(db, 'portfolios', currentUser.uid);
      const portfolioSnap = await getDoc(portfolioRef);

      if (portfolioSnap.exists()) {
        const data = portfolioSnap.data();
        delete data.updatedAt;
        delete data.userId;
        setPortfolioData(data);
      }
    } catch (error) {
      console.error('Error loading from Firebase:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    portfolioData,
    setPortfolioData: updatePortfolioData,
    history,
    historyIndex,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    saveToFirebase,
    loadFromFirebase,
    loading
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
