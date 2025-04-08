import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to Arete Workspace</h1>
      <p className="text-xl mb-8">Find your perfect workspace today</p>
      <div className="flex gap-4">
        <Link href="/workspaces">
          <Button>Browse Workspaces</Button>
        </Link>
        <Link href="/auth">
          <Button variant="outline">Sign In</Button>
        </Link>
      </div>
    </main>
  )
} 