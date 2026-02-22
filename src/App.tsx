import { MessageContainer } from "@components/feedback/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { CategoryProvider } from "./provider/CategoryProvider"
import { EssayProvider } from "./provider/EssayProvider"
import { MainRouter } from "./routers/MainRouter"
import { ProfileProvider } from "provider/ProfileProvider"

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
      <EssayProvider>
      <ProfileProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </ProfileProvider>
      </EssayProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
