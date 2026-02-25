import { MessageContainer } from "@components/feedback/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { CategoryProvider } from "./provider/CategoryProvider"
import { EssayProvider } from "./provider/EssayProvider"
import { MainRouter } from "./routers/MainRouter"
import { ProfileProvider } from "provider/ProfileProvider"
import { UserProvider } from "provider/UserProvider"
import { ReferenceEssayProvider } from "provider/ReferenceEssayProvider"

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
      <EssayProvider>
      <ProfileProvider>
      <UserProvider>
      <ReferenceEssayProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </ReferenceEssayProvider>
      </UserProvider>
      </ProfileProvider>
      </EssayProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
