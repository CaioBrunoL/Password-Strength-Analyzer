import { useState } from 'react'
import './App.css'

function App(){
  const [password, setPassword] = useState('')
  const calculateStrength = (pass) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  }
  const strength = calculateStrength(password);
  const getStrengthFeedback = () => {
    if (password.length === 0) {
      return {text: "Digite sua senha...", color: '#555'};
    }
    switch (strength) {
      case 0: return {text: "Muito Fraca", color: "#ff4d4d" };
      case 1: return {text: "Fraca", color: "#ff4d4d"};
      case 2: return {text: "Média", color: "#ffa64d"};
      case 3: return {text: "Boa", color: "#ffff4d"};
      case 4: return {text: "Forte", color: "#4dff4d"};
      default: return {text: "Senha invalida", color: "#fff"};
    }
  }
  const feedback = getStrengthFeedback();
  return (
    <div className="container">
      <div className="card">
        <h1>🔐 Verificador de Senhas</h1>
        <div className="input-group">
          <input 
            type="password" 
            placeholder="Digite sua senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="strength-bars">
          {[...Array(4)].map((_, index) => (
            <div 
              key={index}
              className="bar"
              style={{ 
                backgroundColor: index < strength ? feedback.color : '#444' 
              }}
            ></div>
          ))}
        </div>
        <p style={{ color: feedback.color, fontWeight: 'bold' }}>
          {feedback.text}
        </p>
      </div>
    </div>
  )
}
export default App