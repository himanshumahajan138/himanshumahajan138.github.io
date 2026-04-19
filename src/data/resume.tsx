import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Mahajan",
  initials: "HM",
  url: "https://himanshumahajan.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "AI engineer by trade, builder by instinct — shipping production AI systems, contributing to compilers, and writing code that earns its keep.",
  summary:
    "Most of my work lives where AI meets production — shipping **RAG pipelines** and **serverless backends** that handle real traffic. The rest lives in open source: [70+ merged PRs](https://github.com/himanshumahajan138) across **LFortran**, **Mill**, **InVesalius**, and **spotDL**, including paid bounty work on the **Mill** build tool. I'm drawn to compilers, build systems, and the messy internals most people skip — the code that holds up when everything around it is moving.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Icons.python },
    { name: "C++", icon: Icons.cpp },
    { name: "Scala", icon: Icons.scala },
    { name: "SQL", icon: Icons.sql },
    { name: "PyTorch", icon: Icons.pytorch },
    { name: "TensorFlow", icon: Icons.tensorflow },
    { name: "Scikit-Learn", icon: Icons.scikitLearn },
    { name: "Transformers", icon: Icons.huggingface },
    { name: "LLM Fine-Tuning", icon: Icons.llm },
    { name: "RAG", icon: Icons.rag },
    { name: "LangChain", icon: Icons.langchain },
    { name: "Generative AI", icon: Icons.genAI },
    { name: "Transfer Learning", icon: Icons.transferLearning },
    { name: "FastAPI", icon: Icons.fastapi },
    { name: "Docker", icon: Icons.docker },
    { name: "AWS Lambda", icon: Icons.awsLambda },
    { name: "Pinecone", icon: Icons.pinecone },
    { name: "Serverless", icon: Icons.serverless },
    { name: "Git", icon: Icons.git },
    { name: "Streamlit", icon: Icons.streamlit },
    { name: "FFmpeg", icon: Icons.ffmpeg },
    { name: "OpenCV", icon: Icons.opencv },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "himanshumahajan138@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/himanshumahajan138",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/himanshumahajan138",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/himanshumahajan138",
        icon: Icons.leetcode,
        navbar: true,
      },
      CodeChef: {
        name: "CodeChef",
        url: "https://www.codechef.com/users/himanshumahajan",
        icon: Icons.codechef,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:himanshumahajan138@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "IOTRIC",
      href: "https://iotric.com",
      badges: [],
      location: "Remote",
      title: "Data Scientist",
      logoUrl: "", // "https://www.iotric.com/wp-content/uploads/2023/02/New-logo.png",
      icon: Icons.iot,
      start: "Nov 2025",
      end: "Present",
      description:
        "Building data-driven solutions and ML pipelines for IoT analytics. Working on predictive models and data infrastructure to derive actionable insights from large-scale sensor data.",
    },
    {
      company: "Confidential Client (via Deel)",
      href: "https://deel.com",
      badges: ["Contract"],
      location: "Remote",
      title: "AI Training & Code Review Specialist",
      logoUrl: "", // "https://website-media.deel.com/logo_revamp_164ddaed0c.svg",
      icon: Icons.deel,
      start: "Sep 2025",
      end: "Present",
      description:
        "Providing expert AI training data curation and code review for advanced language model development. Evaluating and improving model outputs across Python, C++, and ML domains to enhance code generation quality.",
    },
    {
      company: "NARRIS",
      href: "#",
      badges: [],
      location: "Remote",
      title: "AI Engineer",
      logoUrl: "",
      icon: Icons.narris,
      start: "Jun 2025",
      end: "Oct 2025",
      description:
        "Engineered AI-powered video production platform automating 100+ video productions. Built RAG pipelines processing 50k+ data points with Pinecone and LangChain. Developed scalable FastAPI microservices deployed on AWS Lambda with serverless architecture.",
    },
    {
      company: "BOTRIC",
      href: "#",
      badges: [],
      location: "Remote",
      title: "SWE Intern - AI/ML",
      logoUrl: "", // "https://www.botric.ai/logo.svg",
      icon: Icons.botric,
      start: "Sep 2024",
      end: "Apr 2025",
      description:
        "Built and deployed ML models for production use cases. Contributed to Python backend services and AI agent APIs. Worked on model integration, API development, and automated testing pipelines.",
    },
  ],
  education: [
    {
      school: "Sardar Beant Singh State University",
      href: "https://www.sbssugsp.ac.in",
      degree: "B.CSE (Computer Science & Engineering) — CGPA 8.85",
      logoUrl: "", //"https://www.sbssugsp.ac.in/assets/images/logo/beantunilogo.png",
      icon: Icons.college,
      start: "2021",
      end: "2025",
    },
    {
      school: "Kendriya Vidyalaya No. 2, Pathankot",
      href: "#",
      degree: "Class XII (CBSE) — Non-Medical — 91.2%",
      logoUrl: "",
      icon: Icons.college,
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Imagina-AI",
      href: "https://github.com/himanshumahajan138/Imagina-AI",
      dates: "2025",
      active: true,
      description:
        "AI-powered image generation platform leveraging state-of-the-art diffusion models. Features text-to-image generation with customizable parameters, style transfer, and batch processing capabilities.",
      technologies: [
        "Python",
        "PyTorch",
        "Diffusion Models",
        "Streamlit",
        "Generative AI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/himanshumahajan138/Imagina-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: "sparkles",
    },
    {
      title: "TransVox",
      href: "https://github.com/himanshumahajan138/TransVox",
      dates: "2025",
      active: true,
      description:
        "Real-time voice translation application supporting multiple languages. Uses speech recognition, neural machine translation, and text-to-speech synthesis for seamless cross-language communication.",
      technologies: [
        "Python",
        "Transformers",
        "Speech Recognition",
        "TTS",
        "FastAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/himanshumahajan138/TransVox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: "languages",
    },
    {
      title: "WebSlayer",
      href: "https://github.com/himanshumahajan138/webslayer",
      dates: "2025",
      active: true,
      description:
        "AI-powered web companion that crawls any webpage, builds semantic understanding via vector embeddings, and delivers contextual RAG conversations. Combines Gradio, Weaviate, LangChain, and Gemini into an enterprise-grade RAG pipeline.",
      technologies: [
        "Python",
        "RAG",
        "LangChain",
        "Weaviate",
        "Gemini",
        "Gradio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/himanshumahajan138/webslayer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: "globe",
    },
    {
      title: "PlagX",
      href: "https://github.com/himanshumahajan138/PlagX",
      dates: "2024",
      active: true,
      description:
        "Advanced plagiarism detection system using NLP techniques and semantic similarity analysis. Compares documents at sentence and paragraph levels for accurate detection.",
      technologies: [
        "Python",
        "NLP",
        "Scikit-Learn",
        "TF-IDF",
        "Streamlit",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/himanshumahajan138/PlagX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
      icon: "scansearch",
    },
  ],
  hackathons: [
    {
      title: "LFortran Compiler — Contributions",
      dates: "Mar 2026 — Present",
      location: "Open Source • 7 Merged • 5 Open",
      description:
        "Active contributor to LFortran, a modern interactive Fortran compiler built on LLVM. Contributed LSP hover improvements, parser fixes, edit descriptor handling, COMMON block fixes, and PDT enhancements.",
      image: "",
      icon: Icons.fortran,
      links: [
        {
          title: "LSP Hover Type Kind",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10863",
        },
        {
          title: "Integer Edit Descriptor Fix",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10771",
        },
        {
          title: "Parse Flush Fix",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10770",
        },
        {
          title: "Slash Edit Descriptor",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10658",
        },
        {
          title: "Man Page Flag Docs",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10612",
        },
        {
          title: "COMMON Block Fix",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10591",
        },
        {
          title: "PDT Struct Import",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10459",
        },
        {
          title: "LSP Document Symbols",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10984",
        },
        {
          title: "LSP Outline Fix",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10970",
        },
        {
          title: "LSP Dimension Hover",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10891",
        },
        {
          title: "Precision Warning",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10618",
        },
        {
          title: "Implied Do Loop Fix",
          icon: <Icons.fortran className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pull/10479",
        },
        {
          title: "View All PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/lfortran/lfortran/pulls?q=is%3Apr+author%3Ahimanshumahajan138",
        },
      ],
    },
    {
      title: "InVesalius — Medical Imaging Contributions",
      dates: "Mar 2026 — Present",
      location: "Open Source • 2 Merged • 4 Open",
      description:
        "Contributor to InVesalius, open-source medical imaging software for 3D reconstruction. Enhanced status bar functionality, fixed interpolation rendering, and improving code quality across the codebase.",
      image: "",
      icon: Icons.invesalius,
      links: [
        {
          title: "Status Bar Enhancement",
          icon: <Icons.invesalius className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pull/1187",
        },
        {
          title: "Interpolation Fix",
          icon: <Icons.invesalius className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pull/1151",
        },
        {
          title: "File I/O Context Managers",
          icon: <Icons.invesalius className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pull/1203",
        },
        {
          title: "Dictionary Parameter Fix",
          icon: <Icons.invesalius className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pull/1196",
        },
        {
          title: "Loop & Division Fix",
          icon: <Icons.invesalius className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pull/1176",
        },
        {
          title: "Rust Extension Guards",
          icon: <Icons.invesalius className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pull/1165",
        },
        {
          title: "View All PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/invesalius/invesalius3/pulls?q=is%3Apr+author%3Ahimanshumahajan138",
        },
      ],
    },
    {
      title: "Mill Build Tool — Bounty Contributions",
      dates: "Sep 2024 — Jan 2025",
      location: "Open Source • 10 Merged • Paid Bounties • ₹5 Lac+",
      description:
        "Major contributor to Mill, a fast multi-language build tool by Li Haoyi. Added first-class Python support across examples, testing, modules, web, and documentation. Also contributed Kotlin Spring Boot, Android Java, and Android Kotlin examples.",
      image: "",
      icon: Icons.mill,
      links: [
        {
          title: "Python Testing",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/4166",
        },
        {
          title: "Python Web Examples",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/4107",
        },
        {
          title: "Python Docs Rewrite",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/4063",
        },
        {
          title: "Python Modules",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/4058",
        },
        {
          title: "Python Basic Support",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/4000",
        },
        {
          title: "Kotlin Spring Boot",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/3965",
        },
        {
          title: "Android Bundle",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/3935",
        },
        {
          title: "Python Case Study",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/3882",
        },
        {
          title: "Android Kotlin Example",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/3679",
        },
        {
          title: "Android Java Example",
          icon: <Icons.mill className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pull/3659",
        },
        {
          title: "View All PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/com-lihaoyi/mill/pulls?q=is%3Apr+author%3Ahimanshumahajan138",
        },
      ],
    },
    {
      title: "Other Open Source Contributions",
      dates: "Sep 2024 — May 2025",
      location: "Open Source",
      description:
        "Contributed to various notable projects including Meshery (cloud native management), scautable (Scala tables), spotDL (music downloader), MetaGPT (AI agents framework), and VATSIM UK Sector File.",
      image: "",
      icon: Icons.openSource,
      links: [
        {
          title: "scautable — File Type Check",
          icon: <Icons.scala className="h-4 w-4" />,
          href: "https://github.com/Quafadas/scautable/pull/32",
        },
        {
          title: "spotDL — Skip Duplicates",
          icon: <Icons.spotify className="h-4 w-4" />,
          href: "https://github.com/spotDL/spotify-downloader/pull/2214",
        },
        {
          title: "VATSIM — TACAN Updates",
          icon: <Icons.vatsim className="h-4 w-4" />,
          href: "https://github.com/VATSIM-UK/UK-Sector-File/pull/5470",
        },
        {
          title: "MetaGPT — Docs Fix",
          icon: <Icons.metagpt className="h-4 w-4" />,
          href: "https://github.com/FoundationAgents/MetaGPT/pull/1509",
        },
        {
          title: "View All PRs",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/search?q=is%3Apr+author%3Ahimanshumahajan138&type=pullrequests",
        },
      ],
    },
    {
      title: "Hacktoberfest 2024",
      dates: "October 2024",
      location: "Global",
      description:
        "Successfully completed Hacktoberfest 2024 by contributing meaningful pull requests to multiple open source repositories. Focused on compiler tooling and build system improvements.",
      image: "",
      icon: Icons.hacktoberfest,
      links: [],
    },
    {
      title: "Smart India Hackathon 2023 — Finalist",
      dates: "December 2023",
      location: "India",
      description:
        "Selected as a finalist in Smart India Hackathon (SIH) 2023, one of India's largest hackathons organized by the Government of India. Competed among thousands of teams nationwide.",
      image: "",
      icon: Icons.sih,
      links: [],
    },
    {
      title: "Competitive Programming Achievements",
      dates: "2023 — Present",
      location: "Online",
      description:
        "CodeChef 3-Star rated programmer. LeetCode Knight badge holder. Consistently solving algorithmic challenges and participating in competitive programming contests.",
      image: "",
      icon: Icons.competitive,
      links: [
        {
          title: "LeetCode",
          icon: <Icons.leetcode className="h-4 w-4" />,
          href: "https://leetcode.com/u/himanshumahajan138",
        },
        {
          title: "CodeChef",
          icon: <Icons.codechef className="h-4 w-4" />,
          href: "https://www.codechef.com/users/himanshumahajan",
        },
      ],
    },
  ],
};
