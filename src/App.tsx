import { MessageContainer } from "@components/feedback/MessageContainer"
import { AuthProvider } from "./provider/AuthProvider"
import { CategoryProvider } from "./provider/CategoryProvider"
import { MainRouter } from "./routers/MainRouter"
import { ProfileProvider } from "provider/ProfileProvider"
import { UserProvider } from "provider/UserProvider"
import { ReferenceEssayProvider } from "provider/ReferenceEssayProvider"
import { DashboardProvider } from "provider/DashboardProvider"
import { ProfileStudentProvider } from "provider/ProfileStudentProvider"
import { ProfileCorrectorProvider } from "provider/ProfileCorrectorProvider";

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
      <DashboardProvider>
      <ProfileStudentProvider>
      <ProfileCorrectorProvider>
      <ProfileProvider>
      <UserProvider>
      <ReferenceEssayProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
      </ReferenceEssayProvider>
      </UserProvider>
      </ProfileProvider>
      </ProfileCorrectorProvider>
      </ProfileStudentProvider>
      </DashboardProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App;
