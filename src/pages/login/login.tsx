import React from "react";
import { Button, Card, Input, Text } from "@mantine/core";
import classes from "./login.module.css";
import { IconLock, IconMail } from "@tabler/icons-react";
import * as yup from 'yup'
import { useFormik } from "formik";
import { ILoginRequest } from "../../models/auth.model";

const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

const LoginPage: React.FC = () => {

  const handleSubmit = () => {

  }

  const formik = useFormik<ILoginRequest>({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  })

  return (
    <div className={classes.container}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <div className={classes.cardContent}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: '2em', color: '#B37FEB'}}>Đăng nhập</Text>
          {/* Username */}
          <Input.Wrapper className={classes.input_wrapper}>
            <div style={{ display: "flex" }}>
              <div>
                <IconMail size="0.9em" color="#B37FEB" />
              </div>
              <Input.Label style={{ color: "#B37FEB" }}>Tên đăng nhập</Input.Label>
            </div>
            <Input value={formik.values.username} radius="sm" placeholder="E.x minhquan4501" />
          </Input.Wrapper>
          {/* Password */}
          <Input.Wrapper className={classes.input_wrapper}>
            <div style={{ display: "flex" }}>
              <div>
                <IconLock size="0.9em" color="#B37FEB" />
              </div>
              <Input.Label style={{ color: "#B37FEB" }}>Mật khẩu</Input.Label>
            </div>
            <Input value={formik.values.password}  type="password" radius="sm" placeholder="E.x minhquan4501" />
          </Input.Wrapper>
          <Button
            variant="light"
            style={{ background: "#B37FEB", color: "white" }}
            fullWidth
            mt="md"
            radius="md"
          >
            Đăng nhập
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
