import { Html, Tailwind, Button } from "@react-email/components";

export function Email(props: { url: string }) {
  const { url } = props;

  return (
    <Html lang="en">
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <h1>react email</h1>
        <p>Send email using react-email, Tailwind, and Resend</p>
        <Button
          href={url}
          className="bg-brand px-3 py-2 font-medium leading-4 text-white"
        >
          Click me
        </Button>
      </Tailwind>
    </Html>
  );
}

export default Email;