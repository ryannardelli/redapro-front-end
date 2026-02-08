import { MessageContainer } from "./components/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { EssayProvider } from "./provider/EssayProvider"
import { MainRouter } from "./routers/MainRouter"

function App() {
  return (
    <AuthProvider>
      <EssayProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </EssayProvider>
    </AuthProvider>
  )
}

export default App
