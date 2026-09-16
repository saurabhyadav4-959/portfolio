import { useState } from 'react';
import type { FormEvent } from 'react';
import { FiCheckCircle, FiMail } from 'react-icons/fi';
import styled from 'styled-components';
import type { ContactErrors, ContactFormData } from '../types';

const Section = styled.section`
  padding: 110px 0;
`;

const Inner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 70px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 38px;
  }
`;

const Kicker = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.1rem, 5vw, 3.7rem);
  line-height: 1;
  letter-spacing: -0.055em;
`;

const Copy = styled.p`
  max-width: 430px;
  margin: 20px 0 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`;

const Form = styled.form`
  padding: 26px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: 0 24px 60px ${({ theme }) => theme.colors.shadow};
`;

const Fields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label<{ $full?: boolean }>`
  display: grid;
  gap: 8px;
  grid-column: ${({ $full }) => ($full ? '1 / -1' : 'auto')};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.82rem;
  font-weight: 700;
`;

const InputBase = styled.input`
  width: 100%;
  padding: 13px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentSoft};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  resize: vertical;
  padding: 13px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color 180ms ease, box-shadow 180ms ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentSoft};
  }
`;

const ErrorText = styled.span`
  color: #ef4444;
  font-size: 0.72rem;
`;

const Submit = styled.button`
  width: 100%;
  margin-top: 18px;
  padding: 13px 16px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: ${({ theme }) => theme.colors.accent};
  font-weight: 800;
  transition: transform 180ms ease, filter 180ms ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.06);
  }
`;

const Success = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 14px;
  padding: 12px 13px;
  border-radius: 12px;
  color: #15803d;
  background: #dcfce7;
  font-size: 0.82rem;
  font-weight: 700;
`;

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Please enter a message.';
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  };

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  return (
    <Section id="contact">
      <Inner>
        <Layout>
          <div>
            <Kicker>Contact</Kicker>
            <Title>Let&apos;s connect and build something useful.</Title>
            <Copy>
              Have a question, project idea, or simply want to say hello? Use the form.
              This portfolio form is a frontend demo and does not send messages to a backend.
            </Copy>
            <Copy><FiMail style={{ verticalAlign: 'middle', marginRight: 7 }} /> Email: vinayak.singh.demo@example.com</Copy>
          </div>

          <Form onSubmit={handleSubmit} noValidate>
            <Fields>
              <Field>
                Name
                <InputBase
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
              </Field>

              <Field>
                Email
                <InputBase
                  type="email"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <ErrorText>{errors.email}</ErrorText>}
              </Field>

              <Field $full>
                Message
                <Textarea
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder="Write your message..."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <ErrorText>{errors.message}</ErrorText>}
              </Field>
            </Fields>

            <Submit type="submit">Send Demo Message</Submit>
            {submitted && (
              <Success role="status">
                <FiCheckCircle /> Form validated successfully. No message was sent; this is a demo.
              </Success>
            )}
          </Form>
        </Layout>
      </Inner>
    </Section>
  );
}