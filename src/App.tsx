// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Requests from './pages/Requests/requests'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'

// stylesheets
import './App.css'

// types
import { User, Profile } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [unauthorizedProfs, setUnauthorizedProfs] = useState<Profile[]>([])
  const [authorizedProfs, setAuthorizedProfs] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchProfiles()
  }, [user])

  useEffect((): void => {
    const unauthProfData = profiles.filter((p: Profile) => {
      return p.User?.authorized === false
    })
    setUnauthorizedProfs(unauthProfData)
  }, [profiles])

  useEffect((): void => {
    const authProfData = profiles.filter((p: Profile) => {
      return p.User?.authorized === true
    })
    setAuthorizedProfs(authProfData)
  }, [profiles])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/requests"
          element={
            <ProtectedRoute user={user}>
              <Requests 
                unauthorizedProfs={unauthorizedProfs}
                authorizedProfs={authorizedProfs}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
