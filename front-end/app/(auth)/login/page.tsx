import LoginForm from "@/components/layout/Pages/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-primary/5 p-5">
      <div className="flex min-h-screen items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
