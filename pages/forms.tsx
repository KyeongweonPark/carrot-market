import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}
export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    setError,
  } = useForm<LoginForm>({
    mode: "onBlur",
  });

  const onValid = (data: LoginForm) => {
    console.log("valid");

    setError("errors", { message: "error message" });
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  console.log(errors);

  setValue("password", "Asdf");

  console.log(watch("email"));

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "The username should be longer than 5 characters.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      <div className="translate-x-5">{errors.email?.message}</div>
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
