import styles from "./page.module.css";

export default function Home() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.DATABASEURI);
  
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
