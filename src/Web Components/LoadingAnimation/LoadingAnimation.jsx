import React from "react"
import ReactLoading from "react-loading"
import "./style.css"

function LoadingAnimation({ type = "spin", color = "green" }) {
  return <ReactLoading className="loading-component" type={type} color={color} />
}

export default LoadingAnimation
