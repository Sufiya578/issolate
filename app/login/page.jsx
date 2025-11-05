"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import logoImg from '@/public/assets/images/logo.webp';
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGoogleLogin = () => {
    alert("Redirecting to Google Login (to be integrated later)");
    // Later, backend will provide the actual Google OAuth link
    // window.location.href = "https://your-backend.com/api/auth/google";
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    alert(`Logged in as ${email}`);
    router.push("/account"); // redirect temporarily
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground px-6 pt-32">
<div className="w-full max-w-sm bg-card rounded-xl shadow-lg p-8 border border-border">       
    {/* logo */}
    <Image src={logoImg} alt='ISSO·LATE Logo' className='w-20 mx-auto ' />
     {/* Header */}
        <h1 className="md:font-xl font-semibold text-center mb-6">
          Sign in to access your account
        </h1>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 border border-border rounded-lg hover:bg-gray-200 cursor-pointer transition mb-6"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-border"></div>
          <span className="px-3 text-sm text-muted-foreground">or</span>
          <div className="flex-1 border-t border-border"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:opacity-80 transition cursor-pointer"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}