// src/App.jsx
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, orderBy, query } from 'firebase/firestore';
import './App.css'; // Make sure to style this later so it fits mobile screens!

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  // 1. READ DATA (Real-time Listener)
  useEffect(() => {
    const q = query(collection(db, 'shopping-list'), orderBy('timestamp', 'desc'));
    
    // onSnapshot listens for changes instantly
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  // 2. ADD DATA
  const addItem = async (e) => {
    e.preventDefault();
    if(input === '') return;
    await addDoc(collection(db, 'shopping-list'), {
      text: input,
      timestamp: new Date()
    });
    setInput('');
  };

  return (
    <div className="app-container">
      <h1>My Sync List</h1>
      
      <form onSubmit={addItem}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add item..." 
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;