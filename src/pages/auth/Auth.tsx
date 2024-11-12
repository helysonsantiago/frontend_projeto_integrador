import * as React from "react";
import * as Redux from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { Formik, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import logo from "../../assets/clinica.jpg";
import * as Yup from "yup";
import {
  HiOutlineLockClosed,
  HiOutlineEyeOff,
  HiOutlineEye,
} from "react-icons/hi";
import {
  StyledFormAuth,
  StyledContainerAuth,
  StyledInputAuth,
  StyledLogoAuth,
  StyledButtonAuth,
  StyledCheckbox,
  StyledContentAuth,
} from "./styled-auth";
import { CustomTsDispatch } from "../../hooks/dispatch";
import { loginUSer, resetAuth } from "../../slices/AuthSlice";
import { authState } from "../../types/auth/authType";

const Auth = (): React.ReactElement => {
  const dispatch = CustomTsDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Informe seu email.")
      .email("Preencha com um email válido."),
    password: Yup.string()
      .required("Informe sua senha.")
      .min(8, "A senha deve ter pelo menos 6 caracteres.")
      .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula."),
  });

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const { loading_login, error_login } = Redux.useSelector(
    (state: { authStore: authState }) => state.authStore
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(resetAuth());
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, error_login]);

  React.useEffect(() => {
    const notify = () => {
      if (error_login !== false && typeof error_login === "string")
        toast.error(error_login);
    };
    notify();
  }, [dispatch, error_login]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(loginUSer(values));
      }}
    >
      <StyledContainerAuth>
        <main>
        <StyledContentAuth>
        <StyledLogoAuth src={logo}></StyledLogoAuth>
      <h2>Bem Vindo de Volta!</h2>
      <p>Mantenha-se conectado conosco.</p>  
        </StyledContentAuth>
      
          <StyledFormAuth>

            <span className="erro">
              <ErrorMessage name="email" component="span" className="span" />
            </span>
            <StyledInputAuth>
              <span className="icon">
                <AiOutlineUser />
              </span>
              <Field
                type="text"
                id="email"
                name="email"
                className="input"
                autoComplete="off"
                normalize={(value: string) => value.toLowerCase()} // Transforma para minúsculas
                placeholder="Email"
              />
            </StyledInputAuth>
            <span className="erro">
              <ErrorMessage name="password" component="span" className="span" />
            </span>
            <StyledInputAuth showPassword={showPassword}>
              <span className="icon">
                <HiOutlineLockClosed />
              </span>

              <Field
                autoComplete="off"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Senha"
              />

              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              </span>
            </StyledInputAuth>

            <StyledCheckbox>
              <input type="checkbox" className="checkbox" />
              <p className="label"> Continuar conectado </p>
            </StyledCheckbox>
            <StyledButtonAuth
              type={loading_login ? "button" : "submit"}
              disabled={loading_login ? true : false}
            >
              Login
            </StyledButtonAuth>
          </StyledFormAuth>
        </main>
      </StyledContainerAuth>
    </Formik>
  );
};
export default Auth;
