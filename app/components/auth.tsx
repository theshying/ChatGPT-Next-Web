import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useAccessStore } from "../store";
import { Guard, GuardMode } from "@authing/react-ui-components";

import { useState } from "react";

const appId = "649f0422d18ddf388b8ed9fd";

const config = {
  mode: GuardMode.Modal,
};

export function AuthPage() {
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();
  const access = useAccessStore();
  const goHome = () => navigate(Path.Home);

  const onLogin = () => {};
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Guard
      visible={visible}
      appId={appId}
      config={config}
      onLogin={onLogin}
      onClose={onClose}
    />
  );
}
