import { Routes, Route } from "react-router-dom";
import React from "react";
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import AuthLayout from "./_auth/AuthLayout";
import { Home } from "./_root/pages";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
