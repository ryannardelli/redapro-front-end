import { MessageContainer } from "@components/feedback/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { CategoryProvider } from "./provider/CategoryProvider"
import { EssayProvider } from "./provider/EssayProvider"
import { MainRouter } from "./routers/MainRouter"
import { ProfileProvider } from "provider/ProfileProvider"
import { UserProvider } from "provider/UserProvider"

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
      <EssayProvider>
      <ProfileProvider>
      <UserProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </UserProvider>
      </ProfileProvider>
      </EssayProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
