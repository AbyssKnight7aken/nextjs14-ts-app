'use client';

//import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormInput from "../formInput/FormInput";

const formInputs = [
  {
    id: 1,
    type: 'text',
    name: 'username',
    placeholder: 'Username',
  },
  {
    id: 2,
    type: 'text',
    name: 'email',
    placeholder: 'Email',
  },
  {
    id: 3,
    type: 'password',
    name: 'Password',
    placeholder: 'Password',
  },
  {
    id: 4,
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
  },
]

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);

  function register(): void {
    console.log('register form test!');
  }

  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      {formInputs.map(input => (
        <FormInput key={input.id} {...input} />
      ))}

      <div>
        <button>Register</button>
        {/* {state?.error} */}
        <Link href="/login">Have an account?  <b>Login</b></Link>
      </ div>
    </form>
  );
};
