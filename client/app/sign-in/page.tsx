"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; 
import ceate from "../../public/ceate.jpg"; 
import { IoBagRemoveOutline } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this with your actual sign-in API call
      const response = await fakeSignInApi(formData); // Example placeholder
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Sign in successful!");
        router.push("/"); // Redirect to the home page
      }
    } catch (error: any) {
      toast.error(error.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full mx-auto p-4 min-h-screen bg-gray-100">
      {/* Sign-In Form */}
      <div className="md:w-6/12 w-full p-6 bg-white rounded-lg shadow-lg relative">
        <div className="flex items-center justify-start mb-6">
          <p className="text-2xl font-bold text-gray-700 ml-2">FIRST FEMALE</p>
        </div>
        <h2 className="text-3xl font-semibold pb-4">Sign In</h2>
        <p className="text-sm text-gray-500 pb-6">
          Don't have an account?{" "}
          <a href="/create-account" className="text-pink-500 font-semibold">
            Create an account
          </a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-pink-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-pink-300"
          />
          <p
            className="text-sm text-pink-500 font-semibold py-2 cursor-pointer"
            onClick={() => router.push("/forget-password")}
          >
            Forgot Password?
          </p>
          <button
            type="submit"
            className={`w-full py-3 ${
              loading ? "bg-gray-500" : "bg-pink-500"
            } text-white font-semibold rounded-md hover:bg-pink-600 transition-colors duration-200`}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-lg">
            <BeatLoader color="#e91e63" loading={loading} size={15} />
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-6/12 h-full">
        <Image
          src={ceate}
          alt="Office"
          className="object-cover w-full h-full rounded-lg"
          priority
        />
      </div>

      <Toaster />
    </div>
  );
};

const fakeSignInApi = async (data: SignInFormData): Promise<{ token: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "test@example.com" && data.password === "password") {
        resolve({ token: "fake-jwt-token" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1500);
  });
};

export default SignIn;
