import { Button, Image, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen">
      <Image
        src="src/assets/farm.gif"
        alt="login"
        className="w-full h-full brightness-75"
      />
      <div className="absolute inset-0 flex justify-center items-center px-8 md:px-0">
        <div className="rounded bg-black/80 py-10 px-6 mt-24 md:mt-0 md:max-w-sm md:px-14">
          <form onSubmit={handleSubmit(onsubmit)}>
            <h1 className="text-2xl text-white text-center font-semibold">
              Login
            </h1>
            <div className="space-y-4 mt-5">
              <Input
                color={"white"}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-[#333] inline-block"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">Email is required</p>
              )}
              <Input
                color={"white"}
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-[#333] inline-block"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs">Password is required</p>
              )}

              <Button
                type="submit"
                loadingText="Signing Up..."
                variant={"destructive"}
                color={"white"}
                className="w-full bg-red-700"
              >
                Login
              </Button>
            </div>
          </form>
          <div className="mt-2 text-sm text-center text-gray-200">
            New here?{" "}
            <Link to="/signup" className="text-blue-700 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
