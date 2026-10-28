"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, ChevronDown, Eye, EyeOff, LoaderCircle, LockKeyhole } from "lucide-react";
import { demoBabc, loginBabc } from "@/lib/babc/actions";

function SubmitButton({ demo = false }: { demo?: boolean }) {
  const { pending } = useFormStatus();
  return <button className={demo ? "sms-demo-submit" : "sms-signin-submit"} disabled={pending}>
    {pending ? "Opening your workspace…" : demo ? "Explore workspace" : "Sign in"}
    {pending ? <LoaderCircle size={18} className="sms-spinner"/> : <ArrowRight size={18}/>}
  </button>;
}

export function PortalSignIn({ showDemo }: { showDemo: boolean }) {
  const [showPassword, setShowPassword] = useState(false);
  return <>
    <form action={loginBabc} className="sms-signin-form">
      <label htmlFor="sms-identifier">School email or admission number</label>
      <input id="sms-identifier" name="identifier" autoComplete="username" autoCapitalize="none" spellCheck={false} placeholder="Enter your email or admission number" required maxLength={254}/>
      <label htmlFor="sms-password">Password</label>
      <div className="sms-password-field"><input id="sms-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required maxLength={128}/><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword}>{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div>
      <SubmitButton/>
      <span className="sms-signin-note"><LockKeyhole size={13}/> Your school records stay private.</span>
    </form>
    {showDemo && <details className="sms-demo-access"><summary><span>Take a look around <small>Explore the demo</small></span><ChevronDown size={17}/></summary><p>Try a workspace with fictional records. No real payments are made.</p><form action={demoBabc}><label htmlFor="sms-demo-role">Choose a role</label><select id="sms-demo-role" name="role" defaultValue="principal"><option value="principal">Principal</option><option value="ict">ICT administrator</option><option value="bursar">Bursar</option><option value="academic_lead">Academic lead</option><option value="teacher">Teacher</option><option value="student">Student</option></select><SubmitButton demo/></form></details>}
  </>;
}
