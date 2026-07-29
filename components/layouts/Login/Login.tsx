import LoginForm from "@/components/forms/login/LoginForm";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative bg-black overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-brand-primary/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>

          <p className="text-gray-500 mt-2 text-sm">Secure dashboard access</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
