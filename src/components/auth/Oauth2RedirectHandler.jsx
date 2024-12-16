import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Oauth2RedirectHandler = () => {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {

    const param = new URLSearchParams(location.search)
    const token = param.get("token")

    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        localStorage.setItem("JWT_TOKEN", token)
        setTimeout(() => {
          navigate("/blogs")
        }, 200)
      } catch (error) {
        console.log(error)
        navigate("/login")

      }
    }
    else {
      console.log("error aaya")
      navigate("/login")
    }
  }, [])

  return (
    <div>Redirecting......</div>
  )
}

export default Oauth2RedirectHandler