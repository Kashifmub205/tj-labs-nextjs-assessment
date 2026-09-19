import { AuthPageShell } from "@/components/auth-page-shell";
import { NumberGenerator } from "@/components/number-generator";

export default function GeneratorPage() {
  return (
    <AuthPageShell label="Number generator" language="de" showSettings>
      <NumberGenerator />
    </AuthPageShell>
  );
}
