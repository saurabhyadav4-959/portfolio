import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styled, { keyframes } from 'styled-components';

/* ─── Keyframes ─── */
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-18px) rotate(2deg); }
  66% { transform: translateY(8px) rotate(-1deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.08); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const cursorBlink = keyframes`
  50% { border-color: transparent; }
`;

/* ─── Styled Components ─── */
const HeroWrap = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 0 60px;
`;

const BgOrbs = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const Orb = styled.div<{ $size: number; $top: string; $left: string; $delay: number; $color: string }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(80px);
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: ${pulseGlow} ${({ $delay }) => 4 + $delay}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const FloatingShape = styled.div<{ $top: string; $left: string; $delay: number; $size: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ $size }) => ($size > 30 ? '16px' : '50%')};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: ${float} ${({ $delay }) => 6 + $delay * 2}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  opacity: 0.25;
  z-index: 0;
  background: ${({ theme }) => theme.colors.accentSoft};
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  @media (max-width: 640px) {
    width: calc(100% - 32px);
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Greeting = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const GradientName = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    #8b5cf6,
    #ec4899,
    ${({ theme }) => theme.colors.accent}
  );
  background-size: 300% 300%;
  animation: ${gradientMove} 4s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TypewriterWrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TypewriterText = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  border-right: 2px solid ${({ theme }) => theme.colors.accent};
  animation: ${cursorBlink} 0.75s step-end infinite;
  padding-right: 4px;
  white-space: nowrap;
  overflow: hidden;
`;

const Description = styled.p`
  font-size: 1.08rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 540px;
  margin-bottom: 36px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentStrong});
  box-shadow: 0 6px 24px ${({ theme }) => theme.colors.accentGlow};
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px ${({ theme }) => theme.colors.accentGlow};
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: border-color 180ms ease, transform 180ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceSubtle};
  transition: all 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.accentGlow};
  }
`;

const AvatarColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const AvatarGlow = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 28px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, #8b5cf6, #ec4899);
    z-index: -1;
    opacity: 0.6;
    filter: blur(18px);
    animation: ${pulseGlow} 3s ease-in-out infinite;
  }
`;

const AvatarImage = styled.img`
  width: clamp(280px, 28vw, 380px);
  height: clamp(280px, 28vw, 380px);
  border-radius: 24px;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const StatusBadge = styled.div`
  position: absolute;
  bottom: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.colors.success};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.success};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.success};
`;

/* ─── Component ─── */
const roles = [
  'CSE Student',
  'Frontend Developer',
  'Problem Solver',
  'React Enthusiast',
  'Tech Explorer',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timerRef.current = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timerRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <HeroWrap id="home">
      <BgOrbs aria-hidden="true">
        <Orb $size={500} $top="-10%" $left="60%" $delay={0} $color="rgba(99, 102, 241, 0.12)" />
        <Orb $size={350} $top="60%" $left="-5%" $delay={1.5} $color="rgba(139, 92, 246, 0.1)" />
        <Orb $size={250} $top="30%" $left="80%" $delay={3} $color="rgba(236, 72, 153, 0.08)" />
        <FloatingShape $top="15%" $left="10%" $delay={0} $size={40} />
        <FloatingShape $top="70%" $left="75%" $delay={1} $size={24} />
        <FloatingShape $top="25%" $left="85%" $delay={2} $size={50} />
        <FloatingShape $top="80%" $left="20%" $delay={1.5} $size={32} />
        <FloatingShape $top="45%" $left="5%" $delay={0.5} $size={18} />
      </BgOrbs>

      <Container>
        <HeroContent>
          <Greeting>
            <span>👋</span>
            <span>Welcome to my portfolio</span>
          </Greeting>

          <Title>
            Hi, I'm <GradientName>Saurabh Yadav</GradientName>
          </Title>

          <TypewriterWrap>
            <TypewriterText>{displayText}</TypewriterText>
          </TypewriterWrap>

          <Description>
            A passionate Computer Science Engineering student with a love for building
            beautiful, performant web applications. I turn ideas into elegant digital experiences.
          </Description>

          <ButtonGroup>
            <PrimaryBtn href="#projects">
              <span>View My Work</span>
              <FiArrowRight size={18} />
            </PrimaryBtn>
            <SecondaryBtn href="#contact">
              <FiDownload size={18} />
              <span>Get In Touch</span>
            </SecondaryBtn>
          </ButtonGroup>

          <SocialRow>
            <SocialIcon href="https://github.com/saurabh-yadav" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/saurabh-yadav" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/saurabh_yadav" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter size={20} />
            </SocialIcon>
          </SocialRow>
        </HeroContent>

        <AvatarColumn>
          <AvatarGlow>
            <AvatarImage src="/avatar.jpg" alt="Saurabh Yadav — CSE Student & Developer" />
            <StatusBadge>
              <StatusDot />
              <span>Open to Opportunities</span>
            </StatusBadge>
          </AvatarGlow>
        </AvatarColumn>
      </Container>
    </HeroWrap>
  );
}