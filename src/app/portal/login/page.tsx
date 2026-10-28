import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, Users, Sparkles } from "lucide-react";
import { Campus } from "@/components/portal/campus";
import { babcDemoEnabled, currentAccount, homeFor } from "@/lib/babc/server";
import { PortalSignIn } from "@/components/babc/portal-sign-in";
import { Feedback } from "@/components/babc/ui";

export const metadata = { title: "Welcome | SKYWARD MEGA SCHOOL" };

export default async function PortalLogin({ searchParams }: { searchParams: Promise<{ error?: string; success?: string }> }) {
  const search = await searchParams;
  const account = await currentAccount();
  return <main id="main-content" className="sms-entry">
    <header className="sms-entry-header">
      <Link href="/" className="sms-wordmark"><Image src="/brand/sms-mark.svg" alt="SMS monogram" width={46} height={46} priority/><span><strong>SKYWARD MEGA SCHOOL</strong><small>School management portal</small></span></Link>
      <span className="sms-secure"><ShieldCheck size={16}/> Your school, securely connected</span>
    </header>
    <div className="sms-entry-layout">
      <section className="sms-entry-cover" aria-label="Welcome to Skyward Mega School">
        <div className="sms-cover-copy"><span className="sms-school-stage"><span/>Nursery, primary & secondary</span><h1>One school.<br/>So many<br/>possibilities.</h1><p>A connected place for the people<br className="sms-desktop-break"/> who make every school day count.</p></div>
        <div className="sms-campus-scene"><div className="sms-campus-orbit"/><div className="sms-floating-label sms-label-learning"><BookOpen size={19}/><span>Room to learn.</span></div><Campus/><div className="sms-floating-label sms-label-growing"><Sparkles size={18}/><span>Space to grow.</span></div></div>
        <div className="sms-cover-footer"><span><GraduationCap size={18}/> Every student. Every step.</span><span>SMS</span></div>
      </section>
      <section className="sms-entry-access" aria-label="Sign in">
        <div className="sms-access-content"><span className="sms-access-icon"><Users size={23}/></span><h2>Welcome back.</h2><p className="sms-access-description">Your school day starts here.<br/>Sign in to your Skyward workspace.</p>
          <Feedback {...search}/>
          {account && <Link className="sms-resume" href={homeFor(account.role)}>Continue as {account.name}<ArrowRight size={16}/></Link>}
          <PortalSignIn showDemo={babcDemoEnabled()}/>
          <div className="sms-activate"><span>Joining us for the first time?</span><Link href="/portal/signup">Activate student account <ArrowRight size={14}/></Link></div>
          <details className="sms-login-help"><summary>Need help signing in?</summary><p>Staff: use your school email and password. Students: use your admission number and your surname in CAPITAL LETTERS. Contact school ICT if you need help with your account.</p></details>
        </div>
        <p className="sms-access-footer"><ShieldCheck size={14}/> A private workspace for your school community.</p>
      </section>
    </div>
    <footer className="sms-entry-footer"><span>© {new Date().getFullYear()} Skyward Mega School</span><span>Learning. People. Possibilities.</span></footer>
  </main>;
}
