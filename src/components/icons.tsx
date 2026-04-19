import {
  SiGithub,
  SiLeetcode,
  SiCodechef,
  SiPython,
  SiCplusplus,
  SiScala,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiLangchain,
  SiFastapi,
  SiStreamlit,
  SiOpencv,
  SiFfmpeg,
  SiGit,
  SiDocker,
  SiServerless,
  SiKotlin,
  SiAndroid,
  SiFortran,
  SiLlvm,
  SiSpotify,
} from "@icons-pack/react-simple-icons";
import {
  GlobeIcon,
  MailIcon,
  DatabaseIcon,
  BrainIcon,
  LayersIcon,
  SparklesIcon,
  GitBranchIcon,
  ZapIcon,
  HammerIcon,
  StethoscopeIcon,
  NetworkIcon,
  BotIcon,
  PlaneIcon,
  TrophyIcon,
  CpuIcon,
  BriefcaseIcon,
  FilmIcon,
  GraduationCapIcon,
  AwardIcon,
  SwordsIcon,
  HeartIcon,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,

  github: (props: IconProps) => <SiGithub {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  leetcode: (props: IconProps) => <SiLeetcode {...props} />,
  codechef: (props: IconProps) => <SiCodechef {...props} />,

  python: (props: IconProps) => <SiPython {...props} />,
  cpp: (props: IconProps) => <SiCplusplus {...props} />,
  scala: (props: IconProps) => <SiScala {...props} />,
  kotlin: (props: IconProps) => <SiKotlin {...props} />,
  android: (props: IconProps) => <SiAndroid {...props} />,
  fortran: (props: IconProps) => <SiFortran {...props} />,
  llvm: (props: IconProps) => <SiLlvm {...props} />,

  pytorch: (props: IconProps) => <SiPytorch {...props} />,
  tensorflow: (props: IconProps) => <SiTensorflow {...props} />,
  scikitLearn: (props: IconProps) => <SiScikitlearn {...props} />,
  huggingface: (props: IconProps) => <SiHuggingface {...props} />,
  langchain: (props: IconProps) => <SiLangchain {...props} />,

  fastapi: (props: IconProps) => <SiFastapi {...props} />,
  streamlit: (props: IconProps) => <SiStreamlit {...props} />,
  opencv: (props: IconProps) => <SiOpencv {...props} />,
  ffmpeg: (props: IconProps) => <SiFfmpeg {...props} />,
  git: (props: IconProps) => <SiGit {...props} />,
  docker: (props: IconProps) => <SiDocker {...props} />,
  serverless: (props: IconProps) => <SiServerless {...props} />,
  spotify: (props: IconProps) => <SiSpotify {...props} />,

  sql: (props: IconProps) => <DatabaseIcon {...props} />,
  pinecone: (props: IconProps) => <DatabaseIcon {...props} />,
  llm: (props: IconProps) => <BrainIcon {...props} />,
  rag: (props: IconProps) => <LayersIcon {...props} />,
  genAI: (props: IconProps) => <SparklesIcon {...props} />,
  transferLearning: (props: IconProps) => <GitBranchIcon {...props} />,
  awsLambda: (props: IconProps) => <ZapIcon {...props} />,
  mill: (props: IconProps) => <HammerIcon {...props} />,
  invesalius: (props: IconProps) => <StethoscopeIcon {...props} />,
  meshery: (props: IconProps) => <NetworkIcon {...props} />,
  metagpt: (props: IconProps) => <BotIcon {...props} />,
  vatsim: (props: IconProps) => <PlaneIcon {...props} />,
  hacktoberfest: (props: IconProps) => <TrophyIcon {...props} />,

  iot: (props: IconProps) => <CpuIcon {...props} />,
  deel: (props: IconProps) => <BriefcaseIcon {...props} />,
  narris: (props: IconProps) => <FilmIcon {...props} />,
  botric: (props: IconProps) => <BotIcon {...props} />,
  college: (props: IconProps) => <GraduationCapIcon {...props} />,
  sih: (props: IconProps) => <AwardIcon {...props} />,
  competitive: (props: IconProps) => <SwordsIcon {...props} />,
  openSource: (props: IconProps) => <HeartIcon {...props} />,
};
