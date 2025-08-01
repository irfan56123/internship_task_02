
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React from "react";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  specialization: string;
  experience: number;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  specialization: Yup.string().required("Specialization is required"),
  experience: Yup.number().typeError("Experience must be a number").min(0).required("Experience is required"),
});

export default function DoctorSignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup Data:", data);
    // TODO: Replace with API call
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Doctor Signup</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input {...register("name")} className="w-full border border-gray-300 p-2 rounded" />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input {...register("email")} type="email" className="w-full border border-gray-300 p-2 rounded" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input {...register("password")} type="password" className="w-full border border-gray-300 p-2 rounded" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Specialization</label>
            <input {...register("specialization")} className="w-full border border-gray-300 p-2 rounded" />
            {errors.specialization && <p className="text-red-500 text-sm">{errors.specialization.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Experience (in years)</label>
            <input {...register("experience")} type="number" className="w-full border border-gray-300 p-2 rounded" />
            {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Sign Up
          </button>
          <div> <p className="mt-2 ml-2 text-bold">Already have an account ? <a className="underline text-blue-600 " href="/login">Login</a></p></div>
        </form>
      </div>
    </div>
  );
}