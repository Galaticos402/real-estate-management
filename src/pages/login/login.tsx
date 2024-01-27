import React from "react";
import { Button, Card, Input, Text } from "@mantine/core";
import classes from "./login.module.css";
import { IconLock, IconMail } from "@tabler/icons-react";

const LoginPage: React.FC = () => {
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
              <Input.Label style={{ color: "#B37FEB" }}>Username</Input.Label>
            </div>
            <Input radius="sm" placeholder="E.x minhquan4501" />
          </Input.Wrapper>
          {/* Password */}
          <Input.Wrapper className={classes.input_wrapper}>
            <div style={{ display: "flex" }}>
              <div>
                <IconLock size="0.9em" color="#B37FEB" />
              </div>
              <Input.Label style={{ color: "#B37FEB" }}>Password</Input.Label>
            </div>
            <Input type="password" radius="sm" placeholder="E.x minhquan4501" />
          </Input.Wrapper>
          <Button
            variant="light"
            style={{ background: "#B37FEB", color: "white" }}
            fullWidth
            mt="md"
            radius="md"
          >
            Log In
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
