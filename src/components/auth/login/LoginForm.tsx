"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import type { AuthRequest } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/lib/api/auth/endpoints";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "The password must be at least 8 characters long")
      .matches(
        /[A-Z]/,
        "The password must contain at least one uppercase letter"
      )
      .matches(
        /[a-z]/,
        "The password must contain at least one lowercase letter"
      )
      .matches(/[0-9]/, "The password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "The password must contain at least one special character"
      )
      .required("Password is required"),
  })
  .required();

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: AuthRequest) => {
      return login(data);
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: AuthRequest) => {
    mutation.mutate(data);
    mutation.isError && console.log(mutation.error);
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <input
            className={clsx(
              "bg-theme-background outline-none border-2 border-theme-primary-light rounded-lg px-2 py-1 placeholder:text-theme-primary-light text-theme-primary-light focus:bg-theme-background focus:outline-none",
              errors.email && "border-red-500"
            )}
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <div
            className={clsx(
              "bg-theme-background outline-none border-2 border-theme-primary-light rounded-lg px-2 py-1",
              errors.password && "border-red-500"
            )}
          >
            <div className="flex flex-row gap-2 justify-center items-center pr-2 ">
              <input
                className="w-full bg-theme-background outline-none placeholder:text-theme-primary-light text-theme-primary-light focus:bg-theme-background focus:outline-none"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
              />
              {showPassword ? (
                <FaEye
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <input
          className="bg-theme-primary-normal px-4 py-2 rounded-lg text-white font-bold cursor-pointer hover:bg-theme-primary-dark"
          type="submit"
          value={mutation.isPending ? "Logging-in..." : "Login"}
        />
        {mutation.isError && (
          <div className="text-red-500">{mutation.error.message}</div>
        )}
        {mutation.isSuccess && (
          <div className="text-green-500">Logged in successfully!</div>
        )}
      </form>
    </div>
  );
};
