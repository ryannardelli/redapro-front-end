import { MessageContainer } from "@components/feedback/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { CategoryProvider } from "./provider/CategoryProvider"
import { EssayProvider } from "./provider/EssayProvider"
import { MainRouter } from "./routers/MainRouter"

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
      <EssayProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </EssayProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
