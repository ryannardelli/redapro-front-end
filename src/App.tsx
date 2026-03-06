import { MessageContainer } from "@components/feedback/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { CategoryProvider } from "./provider/CategoryProvider"
import { EssayProvider } from "./provider/EssayProvider"
import { MainRouter } from "./routers/MainRouter"
import { ProfileProvider } from "provider/ProfileProvider"
import { UserProvider } from "provider/UserProvider"
import { ReferenceEssayProvider } from "provider/ReferenceEssayProvider"
import { DashboardProvider } from "provider/DashboardProvider"

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
      <EssayProvider>
      <ProfileProvider>
      <UserProvider>
      <ReferenceEssayProvider>
      <DashboardProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </DashboardProvider>
      </ReferenceEssayProvider>
      </UserProvider>
      </ProfileProvider>
      </EssayProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
