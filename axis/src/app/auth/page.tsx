import Navbar from "@/components/templates/axis/navbar";
import Footer from "@/components/templates/axis/footer";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="relative px-4 py-6 mx-auto w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center mt-32">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-medium tracking-tight">Welcome back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your Axis account</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <Button className="w-full rounded-full">Sign in</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
