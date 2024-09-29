import Navbar from "@/components/navbar";
const userTypes = [
  { value: 'user', label: 'User' },
  { value: 'verifier', label: 'Verifier' },
  { value: 'admin', label: 'Admin' },
];
export default function Home() {
  return (
    <div>
<Navbar userTypes={userTypes} initialUserType={{ value: 'user', label: 'User' }} />
      <h1>Home Page</h1>
    </div>
  );
}
