import BaseNewsletterForm from "./BaseNewsletterForm";

export default function MatesNewsletterForm() {
  return (
    <BaseNewsletterForm
      endpoint="/api/subscribe/mates"
      redirectTo="/mates/confirma-tu-email"
      buttonText="Vale"
    />
  );
}