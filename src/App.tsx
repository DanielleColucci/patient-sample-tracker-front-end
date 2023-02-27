// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/ProfilesList/ProfilesList'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Requests from './pages/Requests/Requests'
import NewSample from './pages/NewSample/NewSample'
import SamplesList from './pages/SamplesList/SamplesList'
import SampleDetails from './pages/SampleDetails/SampleDetails'
import EditSample from './pages/EditSample/EditSample'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

// components
import NavBar from './components/NavBar/NavBar'
import SmallScreenNav from './components/NavBar/SmallScreenNav'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as sampleService from './services/sampleService'

// stylesheets
import './App.css'

// types
import { User, Profile, Sample } from './types/models'
import { SampleFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [samples, setSamples] = useState<Sample[]>([])
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect((): void => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user?.authorized) fetchProfiles()
  }, [user])

  useEffect((): void => {
    const fetchAllSamples = async (): Promise<void> => {
      try {
        const sampleData: Sample[] = await sampleService.index()
        setSamples(sampleData)
      } catch (error) {
        console.log(error)
      }
    }
    if (user?.authorized) fetchAllSamples()
  }, [user])

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  const handleUpdateAuthorization = async (profile: Profile): Promise<void> => {
    const updatedProfile = await profileService.updateAuthorization(profile)
    setProfiles(profiles.map(p => p.id === profile.id ? updatedProfile : p))
  }
  
  const handleUpdateAdmin = async (profile: Profile): Promise<void> => {
    const updatedProfile = await profileService.updateAdmin(profile)
    setProfiles(profiles.map(p => p.id === profile.id ? updatedProfile : p))
  }

  const handleAddSample = async (sampleData: SampleFormData): Promise<void> => {
    const newSample = await sampleService.create(sampleData)
    setSamples([newSample, ...samples])
    navigate('/samples')
  }

  const handleUpdateSample = async (sampleData: SampleFormData): Promise<void> => {
    const updatedSample = await sampleService.update(sampleData)
    setSamples(samples.map(s => sampleData.id === s.id ? updatedSample : s))
    navigate(`/samples/${sampleData.id}`)
  }

  const handleDeleteSample = async (id: number): Promise<void> => {
    const deletedSample = await sampleService.delete(id)
    setSamples(samples.filter(s => s.id !== deletedSample.id))
    navigate('/samples')
  }

  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const handlePageChange = (): void => {
    setIsOpen(false)
  }

  return (
    <>
      {width < 768 ? 
        <SmallScreenNav 
          width={width}
          user={user}
          isOpen={isOpen}
          handleLogout={handleLogout}
          handleOpen={handleOpen}
          />
        : 
        <NavBar 
          width={width}
          user={user}
          isOpen={isOpen}
          handleLogout={handleLogout}
          handlePageChange={handlePageChange}
        />
      }
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
              <Profiles 
                profiles={profiles} 
                user={user}
                handleUpdateAuthorization={handleUpdateAuthorization}
                handleUpdateAdmin={handleUpdateAdmin}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails user={user}/>
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
                profiles={profiles}
                user={user}
                handleUpdateAuthorization={handleUpdateAuthorization}
                handleUpdateAdmin={handleUpdateAdmin}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/samples"
          element={
            <ProtectedRoute user={user}>
              <SamplesList samples={samples} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/samples/new"
          element={
            <ProtectedRoute user={user}>
              <NewSample handleAddSample={handleAddSample} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/samples/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditSample handleUpdateSample={handleUpdateSample} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/samples/:id"
          element={
            <ProtectedRoute user={user}>
              <SampleDetails 
                user={user} 
                handleDeleteSample={handleDeleteSample}
            />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
