"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

// Login action
export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect("/login?error=missing-fields");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/login?error=invalid-credentials");
  }

  redirect("/dashboard");
}

// Signup action (Instant registration, no email confirmation required)
export async function signup(formData: FormData) {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const phone = String(formData.get("phone") ?? "").trim();
  const gender = String(formData.get("gender") ?? "").trim();
  const program = String(formData.get("program") ?? "").trim();

  if (
    !fullName ||
    !email ||
    !phone ||
    !gender ||
    !program ||
    password.length < 8
  ) {
    redirect(
      "/signup?error=" +
        encodeURIComponent(
          "Please fill in all fields correctly. Password must be at least 8 characters.",
        ),
    );
  }

  const supabase = await createClient();

  // Sign up user and pass custom metadata into auth.users (which automatically syncs to public.students via your DB trigger)
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone,
        gender,
        program,
      },
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  // If email confirmation is disabled in Supabase, a session is created instantly
  if (data.session) {
    redirect("/dashboard");
  }

  // Fallback if session isn't returned immediately
  redirect(
    "/login?message=" +
      encodeURIComponent("Account created successfully. Please sign in."),
  );
}

// Logout action
export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}

// submitInquiry action
export async function submitInquiry(formData: FormData) {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const program = String(formData.get("program") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!fullName || !email || !program || !message) {
    redirect("/contact?error=Please fill in all fields.");
  }

  const supabase = await createClient();

  const { error } = await supabase.from("contact_inquiries").insert([
    {
      full_name: fullName,
      email,
      program,
      message,
    },
  ]);

  if (error) {
    redirect(
      `/contact?error=${encodeURIComponent("Failed to send message. Please try again.")}`,
    );
  }

  redirect("/contact?success=true");
}
