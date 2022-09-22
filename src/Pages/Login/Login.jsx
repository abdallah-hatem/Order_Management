import React, { useCallback, useEffect, useRef, useState } from "react"

import { useTranslation } from "react-i18next"

import { useNavigate } from "react-router-dom"
import {
  GetFromLocalStorage,
  StoreToLocalStorage,
} from "../../Services/localStorageService"
import ButtonComponent from "../../Web Components/ButtonComponent/ButtonComponent"
import FormComponent from "../../Web Components/FormComponent/FormComponent"
import InputComponent from "../../Web Components/InputComponent/InputComponent"

function Login() {
  let navigate = useNavigate()

  const defaultValues = useRef({
    username: "",
    password: "",
  })

  const [values, setValues] = useState(defaultValues.current)

  useEffect(() => {
    if (GetFromLocalStorage("user")) {
      navigate("/")
    }
    return () => {}
  }, [])

  const handleChange = useCallback((e) => {
    console.log({ [e.target.name]: e.target.value })
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }, [])

  const [loading, setloading] = useState(false)

  function handleSubmit(e) {
    if (!values.username || !values.password) {
      alert(t("Fill the inputs"))
      return
    }

    if (values.username === "admin" && values.password === "admin") {
      StoreToLocalStorage(
        "user",
        "token",
        new Date().setDate(new Date().getDate() + 7)
      )
      navigate("/add-product")
      alert(t("Saved Successfully"))
    }
  }

  const { t, i18n } = useTranslation()

  return (
    <FormComponent title={"Sign In"} loading={loading}>
      <div className="row">
        <div className="col-lg-12">
          <InputComponent
            label={"Username"}
            handleChange={handleChange}
            name="username"
            type="text"
            value={values["username"]}
            required
          />
          <InputComponent
            label={"Password"}
            handleChange={handleChange}
            name="password"
            type="password"
            value={values["password"]}
            required
          />
          <div style={{ fontSize: 20 }}>
            username: admin <br /> password : admin
          </div>
        </div>
      </div>
      <div style={{ float: "right", marginTop: 20 }}>
        <ButtonComponent onClick={handleSubmit} title={"Sign In"} />
      </div>
    </FormComponent>
  )
}

export default Login
