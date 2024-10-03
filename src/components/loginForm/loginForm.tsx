'use client';

import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
//import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FormInput from "../formInput/FormInput";
import { register } from "@/lib/actions/userActions";
import { useSession } from "next-auth/react";

const formInputs = [
  {
    id: 1,
    type: 'text',
    name: 'email',
    placeholder: 'Email',
  },
  {
    id: 2,
    type: 'password',
    name: 'password',
    placeholder: 'Password',
  },
  {
    id: 3,
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
  },
]

export default function LoginForm() {
  const [state, formAction] = useFormState(register, undefined);

  const {data: session} = useSession();
  console.log(session);

  // function register(): void {
  //   console.log('register form test!');
  // }

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
        {state?.error}
        <Link href="/register">Don't have an account?  <b>Register</b></Link>
      </ div>
    </form>
  );
};
