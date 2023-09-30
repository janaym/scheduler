import { useState } from 'react';

const useVisualMode = function(initialMode) {
  const [ history, setHistory] = useState([initialMode]);

  const transition = function(transitionMode, isReplace = false) {
    if(isReplace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), transitionMode]);
      return;
    }
    setHistory(prev => [...prev, transitionMode]);
  }

  const back = function() { 

    if(history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  }

  return { mode: history[history.length-1], transition, back };
}

export default useVisualMode;