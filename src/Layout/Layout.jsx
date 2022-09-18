import { Routes, Route } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"

import "./SideBar.scss"
import SideBar from "./SideBar"
import NavBar from "./NavBar"
import { routes, singleRoutes } from "../Routes/Routes"

function Layout() {
  const [collapsed, setCollapsed] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowSize(window.innerWidth)
    })

    let sidebar = document.getElementById("side-bar")

    if (windowSize < 1024) {
      sidebar.classList.add("closed")
    } else {
      sidebar.classList.remove("closed")
    }
  }, [windowSize])

  const handleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev)

    let sidebar = document.getElementById("side-bar")
    let contentContainer = document.getElementById("content-container")

    if (!sidebar.classList.contains("closed")) {
      sidebar.classList = "side-bar closed"
      contentContainer.classList.add("content-cont-tablet")
    } else {
      sidebar.classList = "side-bar"
      contentContainer.classList.remove("content-cont-tablet")
    }
  }, [collapsed])

  return (
    <>
      <NavBar handleCollapse={handleCollapse} />

      <div className="bottom-cont">
        <div className="side-bar" id="side-bar">
          <SideBar />
        </div>

        <div className="content-cont" id="content-container">
          <Routes>
            {routes.map((el) =>
              el.data ? (
                el.data.map((el) => <Route path={el.path} element={el.component} />)
              ) : (
                <Route path={el.path} element={el.component} />
              )
            )}

            {singleRoutes.map((el) => (
              <Route path={el.path} element={el.component} />
            ))}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default Layout
