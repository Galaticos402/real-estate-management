import React from "react";
import { Button, Card, Input, Text } from "@mantine/core";
import classes from "./login.module.css";
import { IconLock, IconMail } from "@tabler/icons-react";
import * as yup from "yup";
import { useFormik } from "formik";
import { ILoginRequest } from "../../models/auth.model";
import useAuth from "../../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { ROLE, TOKEN } from "../../utils/constants";
import { ROLE as RoleEnum } from "../../models/auth.model";
import { decode } from "../../utils/jwt";

const LoginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = () => {
    login(formik.values.email, formik.values.password)
      .then((res) => {
        if (res) {
          const { role, token } = res;
          localStorage.setItem(TOKEN, token);
          localStorage.setItem(ROLE, role);
          const decodedUser = decode(token);
          console.log(decodedUser);
          switch (decodedUser.role) {
            case RoleEnum.CUSTOMER:
              navigate("/customer/project");
              break;
            case RoleEnum.INVESTOR:
              navigate('/investor/project');
              break;
            case RoleEnum.AGENCY:
              navigate('/agency/division')
              break;
          }
        }
      })
      .catch((err) => {
        console.warn(err);
        // navigate('')
      });
  };

  const formik = useFormik<ILoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className={classes.container}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div className={classes.cardContent}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2em",
              color: "#B37FEB",
            }}
          >
            Đăng nhập
          </Text>
          {/* Username */}
          <Input.Wrapper className={classes.input_wrapper}>
            <div style={{ display: "flex" }}>
              <div>
                <IconMail size="0.9em" color="#B37FEB" />
              </div>
              <Input.Label style={{ color: "#B37FEB" }}>
                Gmail
              </Input.Label>
            </div>
            <Input
              onChange={(e) =>
                formik.setFieldValue("email", e.currentTarget.value)
              }
              value={formik.values.email}
              radius="sm"
              placeholder="E.x minhquan4501"
            />
          </Input.Wrapper>
          {/* Password */}
          <Input.Wrapper className={classes.input_wrapper}>
            <div style={{ display: "flex" }}>
              <div>
                <IconLock size="0.9em" color="#B37FEB" />
              </div>
              <Input.Label style={{ color: "#B37FEB" }}>Mật khẩu</Input.Label>
            </div>
            <Input
              onChange={(e) =>
                formik.setFieldValue("password", e.currentTarget.value)
              }
              value={formik.values.password}
              type="password"
              radius="sm"
              placeholder="E.x minhquan4501"
            />
          </Input.Wrapper>
          <Button
            variant="light"
            style={{ background: "#B37FEB", color: "white" }}
            fullWidth
            mt="md"
            radius="md"
            onClick={handleSubmit}
          >
            Đăng nhập
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
