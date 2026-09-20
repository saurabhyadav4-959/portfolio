import { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiTwitter } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

/* ─── Animations ─── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 20px 4px rgba(99, 102, 241, 0.15); }
`;

/* ─── Styles ─── */
const Section = styled.section`
  padding: 100px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: calc(100% - 32px);
  }
`;

const SectionHeader = styled.div`
  max-width: 640px;
  margin-bottom: 48px;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const Kicker = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 8px;
  font-family: 'JetBrains Mono', monospace;
`;

const SectionTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 12px;
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  line-height: 1.7;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.div`
  padding: 32px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  animation: ${fadeInUp} 0.6s ease-out 0.1s both;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.02em;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.border};
  outline: none;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSoft};
  }
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentStrong});
  box-shadow: 0 6px 20px ${({ theme }) => theme.colors.accentGlow};
  transition: transform 200ms ease, box-shadow 200ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.accentGlow};
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const SuccessMsg = styled.div`
  padding: 14px 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.successSoft};
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeInUp} 0.6s ease-out 0.25s both;
`;

const InfoCard = styled.div`
  padding: 28px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const InfoTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

const InfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.92rem;
  transition: color 180ms ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.accentSoft};
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
    animation: ${pulseGlow} 2s ease-in-out infinite;
  }
`;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <Kicker>Get In Touch</Kicker>
          <SectionTitle>Let's Connect</SectionTitle>
          <SectionDescription>
            Have a project in mind, want to collaborate, or just want to say hi? 
            Feel free to reach out — I'd love to hear from you!
          </SectionDescription>
        </SectionHeader>

        <ContactGrid>
          <FormCard>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="contact-name">Your Name</Label>
                <Input id="contact-name" type="text" placeholder="John Doe" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact-email">Your Email</Label>
                <Input id="contact-email" type="email" placeholder="john@example.com" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact-message">Message</Label>
                <TextArea id="contact-message" placeholder="Tell me about your project..." required />
              </FormGroup>
              {submitted ? (
                <SuccessMsg>✅ Message sent successfully! I'll get back to you soon.</SuccessMsg>
              ) : (
                <SubmitBtn type="submit">
                  <FiSend size={18} />
                  <span>Send Message</span>
                </SubmitBtn>
              )}
            </Form>
          </FormCard>

          <InfoColumn>
            <InfoCard>
              <InfoTitle>Contact Info</InfoTitle>
              <InfoItem href="mailto:saurabh.yadav@email.com">
                <InfoIcon><FiMail size={18} /></InfoIcon>
                <span>saurabh.yadav@email.com</span>
              </InfoItem>
              <InfoItem as="div">
                <InfoIcon><FiMapPin size={18} /></InfoIcon>
                <span>India</span>
              </InfoItem>
            </InfoCard>

            <InfoCard>
              <InfoTitle>Follow Me</InfoTitle>
              <SocialGrid>
                <SocialCard href="https://github.com/saurabh-yadav" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={18} />
                  <span>GitHub</span>
                </SocialCard>
                <SocialCard href="https://linkedin.com/in/saurabh-yadav" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin size={18} />
                  <span>LinkedIn</span>
                </SocialCard>
                <SocialCard href="https://twitter.com/saurabh_yadav" target="_blank" rel="noopener noreferrer">
                  <FiTwitter size={18} />
                  <span>Twitter/X</span>
                </SocialCard>
                <SocialCard href="mailto:saurabh.yadav@email.com">
                  <FiMail size={18} />
                  <span>Email</span>
                </SocialCard>
              </SocialGrid>
            </InfoCard>
          </InfoColumn>
        </ContactGrid>
      </Container>
    </Section>
  );
}
