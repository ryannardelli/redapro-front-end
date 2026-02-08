import { MessageContainer } from "./components/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { MainRouter } from "./routers/MainRouter"

function App() {
  return (
    <AuthProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </AuthProvider>
  )
}

export default App
