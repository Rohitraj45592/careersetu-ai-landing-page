"use client";

import { Bell, Search } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

interface UserData {
  email?: string;
  user_metadata?: {
    full_name?: string;
    avatar_url?: string;
  };
}

export default function Navbar() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    async function loadUser() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user as UserData);
    }

    loadUser();
  }, []);

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <div className="relative w-80">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <img
            src={
              user?.user_metadata?.avatar_url ||
              "https://ui-avatars.com/api/?name=User"
            }
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h3 className="text-sm font-semibold">
              {user?.user_metadata?.full_name || "CareerSetu User"}
            </h3>

            <p className="text-xs text-gray-500">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}