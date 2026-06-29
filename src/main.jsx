import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './components/Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
 
<UserContext>
<BrowserRouter>
    <App />
</BrowserRouter>
</UserContext> 
 
)
