import BaseNewsletterForm from "./BaseNewsletterForm";

export default function NudesYMasNewsletterForm() {
  return (
    <BaseNewsletterForm
      endpoint="/api/subscribe/nudesymas"
      redirectTo="/nudesymas/confirma-tu-email"
      buttonText="Vale"
    />
  );
}