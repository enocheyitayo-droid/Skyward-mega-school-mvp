import { branding } from "@/lib/branding";
import Image from "next/image";
export function Brand({ name = branding.name, compact = false }: { name?: string; compact?: boolean }) {
  return <div className="brand"><Image className="school-logo" src="/brand/sms-mark.svg" width={64} height={64} alt="SMS monogram" priority/>{!compact && <span><strong>{name}</strong><small>SMS · School management</small></span>}</div>;
}
