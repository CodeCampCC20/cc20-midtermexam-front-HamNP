import { useState } from "react";
import InputForm from "../components/form/InputForm";
import { schemaRegister } from "../validate/schemaRegister";
import yupValidate from "../validate/yupValidate";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Loader } from "lucide-react";
import todoApi from "../apis/authenApi";

const initialInput = {
  username: "",
  password: "",
  confirmPassword: "",
};

function LoginPage() {
    const [input, setInput] = useState(initialInput);
    const [inputError, setInputError] = useState(initialInput);
    const [isLoading, setIsLoading] = useState(false);
  
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInput((prev) => ({ ...prev, [name]: value }));
      setInputError((prev) => ({ ...prev, [name]: "" }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
  
      console.log("input", input);
      try {
        await schemaRegister.validate(input, { abortEarly: false });

        const res = await todoApi.register(input);
        console.log("res.data",res.data)

  
        navigate("/");
        setInput(initialInput);
        setInputError(initialInput);
  
        toast.success("Register Success");
      } catch (err) {
        console.log(err);
        toast.error("Register invalid");
  
        if (err instanceof Yup.ValidationError) {
          const errorYup = yupValidate(err);
          setInputError(errorYup);
        }
      } finally {
        setIsLoading(false);
        console.log('fianl')
      }
    };
  
    console.log("inputError", inputError);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-2/5 border mx-auto rounded-2xl p-12 space-y-6 bg-gray-600"
      >
        <h1 className="text-3xl text-white">Register</h1>

        <InputForm
          handleChange={handleChange}
          value={input.username}
          name="username"
          placeholder="username"
          error={inputError.username}
        />

        <InputForm
          handleChange={handleChange}
          value={input.password}
          name="password"
          type="password"
          placeholder="Enter your password"
          error={inputError.password}
        />
        <InputForm
          handleChange={handleChange}
          value={input.confirmPassword}
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          error={inputError.confirmPassword}
        />

        <button
          disabled={isLoading}
          className="w-full flex justify-center gap-2 py-2 bg-gray-500 text-white rounded-xl cursor-pointer hover:underline"
          type="submit"
        >
          {isLoading && <Loader className="animate-spin" />}
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default LoginPage;