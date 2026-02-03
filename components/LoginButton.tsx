"use client";

export default function LoginButton() {
  const handleLogin = () => {
    console.log("Login button clicked");
    // Add your login logic here
  };

  return (
    <button
      onClick={handleLogin}
      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-transparent px-5 text-blue-400 font-medium transition-all duration-300 border-2 border-blue-500 md:w-[158px]"
      style={{
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(59, 130, 246, 0.2)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 30px rgba(59, 130, 246, 1), inset 0 0 30px rgba(59, 130, 246, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(59, 130, 246, 0.2)";
      }}
    >
      Login
    </button>
  );
}
