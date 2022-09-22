import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Avatar, Indicator } from "@mantine/core"

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar"

import "react-pro-sidebar/dist/css/styles.css"
import { routes } from "../Routes/Routes"
import { GetFromLocalStorage } from "../Services/localStorageService"

function SideBar({ clicked, hidden }) {
  const { t } = useTranslation()
  const location = useLocation()

  const [currentRoute, setCurrentRoute] = useState("")

  const [currentIndex, setCurrentIndex] = useState("")
  const [currentIndex2, setCurrentIndex2] = useState("")

  useEffect(() => {
    setCurrentRoute(location.pathname)
  }, [location])

  function handleOpen(el) {
    let opened = false

    if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
      opened = true
      return opened
    }

    el.data?.map((el) => {
      if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
        opened = true
        return opened
      }
    })

    return opened
  }

  function handleColor(el) {
    let color = ""
    el.path === currentRoute && (color = "white")

    return { color }
  }

  function handleClassName(el) {
    let className = ""

    if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
      className = "Active"
      return className
    }

    el.data?.map((el) => {
      if (el.data?.filter((e) => e.path === currentRoute).length > 0) {
        className = "Active"
        return className
      }
    })

    return className
  }

  function handleTitle(title) {
    return <span style={{ color: "red" }}>{title}</span>
  }

  ///////////// collapse side bar on item clicking in mobile mode /////////////

  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [collapseMobile, setCollapseMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowSize(window.innerWidth)
    })
  }, [windowSize])

  useEffect(() => {
    let leftPanelId = document.getElementById("side-bar")
    if (windowSize < 500 && collapseMobile) {
      leftPanelId.classList.toggle("closed")

      setCollapseMobile(false)
    }
  }, [collapseMobile])

  return (
    <ProSidebar hidden={hidden} width={"100%"} collapsed={clicked}>
      <SidebarHeader>
        <div className="text-center p-3">
          <div>
            <Indicator
              inline
              size={16}
              offset={7}
              position="bottom-end"
              color="green"
              withBorder
            >
              <Avatar
                size="lg"
                radius="xl"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Indicator>
          </div>
          <span style={{ color: "white" }}>Admin</span>
        </div>
      </SidebarHeader>

      <Menu iconShape="square">
        {routes.map((el) => (
          <>
            {el.data ? (
              <SubMenu title={t(el.title)} className={handleClassName(el)}>
                {el.data.map((el) => (
                  <MenuItem>
                    <div style={handleColor(el)}>{t(el.title)}</div>
                    <Link to={el.path} />
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem>
                <div style={handleColor(el)}>{t(el.title)}</div>
                <Link to={el.path} />
              </MenuItem>
            )}
          </>
        ))}
      </Menu>
    </ProSidebar>
  )
}

export default SideBar
