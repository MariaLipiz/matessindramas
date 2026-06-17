import BaseNewsletterForm from "./BaseNewsletterForm";

export default function PrincipalNewsletterForm() {
  return (
    <BaseNewsletterForm
      endpoint="/api/subscribe/principal"
      redirectTo="/confirma-tu-email"
      buttonText="Vale"
    />
  );
}