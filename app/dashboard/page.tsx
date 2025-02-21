import React from "react";
import { Navbar } from "@/components/navbar";
import TodoistClone from "@/components/TodoistClone";
import { getData, UserEmail } from "@/actions/todoAction";

export default async function Dashboard() {

  
  const data = await getData(userEmail);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">
        <TodoistClone todos={data} />
      </main>
    </div>
  );
}
