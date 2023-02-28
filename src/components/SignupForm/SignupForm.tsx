// npm modules
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// stylesheets
import styles from './SignupForm.module.css'

// types
import { AuthFormProps } from '../../types/props'
import { SignupFormData, PhotoFormData } from '../../types/forms'
import { handleErrMsg } from '../../types/validators'

const SignupForm = (props: AuthFormProps): JSX.Element => {
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })
  const [photoChanged, setPhotoChanged] = useState<boolean>(false)
  const hiddenFileInput = React.useRef<HTMLInputElement>(null)

  const handleClick = (): void => {
    hiddenFileInput.current?.click()
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      setPhotoData({ photo: evt.target.files.item(0) })
      setPhotoChanged(true)
    }
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if(isSubmitted) return
    try {
      setIsSubmitted(true)
      await authService.signup(formData, photoData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = (): boolean => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo:
        </label>
        <div className={styles.uploadContainer}>
          <div className={styles.upload}>
            <button 
              className={styles.uploadButton}
              form=""
              onClick={handleClick}
            >
              Choose File
            </button>
            {photoChanged && 
              <p className={styles.uploadText}>
                Image uploaded
              </p>
            }
          </div>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            className={styles.fileUpload}
            ref={hiddenFileInput}
            onChange={handleChangePhoto}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          disabled={isFormInvalid() || isSubmitted} 
          className={`${styles.button} ${isFormInvalid() ? styles.disabled : styles.enabled}`}
        >
          {!isSubmitted ? "SIGN UP" : "Sending..."}
        </button>
        <Link to="/">
          <button className={styles.button}>CANCEL</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
