import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Welcome() {
    const location = useLocation();
        
  return (
    <div>Welcome {location.state.id} to the restaurant page. </div>
  )
}
