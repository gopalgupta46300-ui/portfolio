/* ============================================================
   PORTFOLIO DATA
   Edit ONLY this file to update site content.
   Replace resumeLink with your actual resume file path
   (e.g. "./assets/resume.pdf") to update the Resume section.
   ============================================================ */

const portfolioData = {
  personalInfo: {
    name: "Aarav Sharma",
    role: "AI / ML Engineer & Generative AI Enthusiast",
    taglineWords: [
      "Generative AI",
      "Machine Learning",
      "Deep Learning",
      "AI Agents",
      "Computer Vision"
    ],
    intro:
      "I design and build intelligent systems — from neural networks to LLM-powered agents — turning research into real, usable products.",
    location: "Bengaluru, India",
    email: "aarav.sharma.ai@gmail.com",
    about: {
      summary:
        "I'm a final-year Computer Science undergrad with an obsession for understanding how machines learn to think, see, and create. What started as curiosity about how ChatGPT 'knows' things turned into a full-blown journey through ML, deep learning and now, agentic AI systems.",
      education: [
        {
          degree: "B.Tech in Computer Science & Engineering",
          institute: "Indian Institute of Information Technology",
          year: "2022 — 2026",
          detail: "Specialization in Artificial Intelligence & Data Science · CGPA 8.9/10"
        },
        {
          degree: "Senior Secondary (XII), PCM",
          institute: "Delhi Public School",
          year: "2020 — 2022",
          detail: "School Topper — Computer Science"
        }
      ],
      journey:
        "My AIML journey began with a simple linear regression model that took me three days to debug. Since then I've trained CNNs for medical imaging, fine-tuned LLMs for domain-specific chatbots, and built RAG pipelines that actually ship to production. Every model that fails to converge teaches me something new.",
      passion:
        "I thrive on ambiguous problems — the ones with no clear answer key. Whether it's optimizing a loss landscape or designing the right prompt chain for an agent, I love the loop of hypothesize → experiment → break → understand → repeat."
    }
  },

  socialLinks: {
    github: { username: "aaravsharma-ai", url: "https://github.com/" },
    linkedin: { username: "aarav-sharma-ai", url: "https://linkedin.com/" },
    leetcode: { username: "aarav_codes", url: "https://leetcode.com/" },
    email: "mailto:aarav.sharma.ai@gmail.com"
  },

  skills: [
    { name: "Python", level: 92, icon: "🐍", category: "Language" },
    { name: "C++", level: 80, icon: "⚙️", category: "Language" },
    { name: "SQL", level: 78, icon: "🗄️", category: "Language" },
    { name: "Machine Learning", level: 88, icon: "🤖", category: "Core" },
    { name: "Deep Learning", level: 85, icon: "🧠", category: "Core" },
    { name: "Generative AI", level: 90, icon: "✨", category: "Core" },
    { name: "Data Analysis", level: 84, icon: "📊", category: "Data" },
    { name: "Data Visualization", level: 80, icon: "📈", category: "Data" },
    { name: "DSA", level: 86, icon: "🧩", category: "Foundations" }
  ],

  projects: [
    {
      title: "NeuroChat — RAG-Powered Knowledge Assistant",
      description:
        "An end-to-end Retrieval-Augmented Generation chatbot that answers questions over private document collections using vector search and an open-source LLM.",
      tech: ["Python", "LangChain", "FAISS", "FastAPI", "React"],
      github: "https://github.com/aaravsharma-ai/neurochat",
      demo: "https://neurochat-demo.vercel.app",
      image: "🧠"
    },
    {
      title: "VisionGuard — Real-Time Object Detection",
      description:
        "A YOLOv8-based surveillance system that detects, tracks and classifies objects in real time from live video feeds with a custom-trained dataset.",
      tech: ["PyTorch", "OpenCV", "YOLOv8", "Streamlit"],
      github: "https://github.com/aaravsharma-ai/visionguard",
      demo: "https://visionguard-demo.vercel.app",
      image: "👁️"
    },
    {
      title: "SentiTrade — Market Sentiment Predictor",
      description:
        "ML pipeline that scrapes financial news and social sentiment, then uses an LSTM model to forecast short-term stock movement trends.",
      tech: ["Python", "Scikit-learn", "LSTM", "Pandas"],
      github: "https://github.com/aaravsharma-ai/sentitrade",
      demo: "https://sentitrade-demo.vercel.app",
      image: "📉"
    },
    {
      title: "PromptForge — Agent Orchestration Toolkit",
      description:
        "A lightweight framework for building, testing and chaining multi-step AI agents with tool-calling and memory, fine-tuned for task automation.",
      tech: ["Python", "OpenAI API", "LangGraph", "Docker"],
      github: "https://github.com/aaravsharma-ai/promptforge",
      demo: "https://promptforge-demo.vercel.app",
      image: "🛠️"
    }
  ],

  hackathons: [
    {
      title: "Smart India Hackathon",
      year: "2025",
      role: "Team Lead",
      achievement: "Winner — National Finals",
      learning:
        "Built a real-time crop disease detection app under 36 hours. Learned how to balance model accuracy with on-device latency.",
      tags: ["Computer Vision", "TensorFlow Lite", "Android"]
    },
    {
      title: "HackGenAI 2.0",
      year: "2025",
      role: "ML Engineer",
      achievement: "Runner-Up",
      learning:
        "Designed a RAG-based legal document summarizer. Learned the importance of chunking strategy on retrieval quality.",
      tags: ["LLMs", "RAG", "Vector DB"]
    },
    {
      title: "Google Solution Challenge",
      year: "2024",
      role: "Participant",
      achievement: "Top 50 Regional",
      learning:
        "First exposure to building for scale with cloud-native ML services and CI/CD pipelines.",
      tags: ["GCP", "Vertex AI", "MLOps"]
    },
    {
      title: "Internal AI Hack Day",
      year: "2024",
      role: "Participant",
      achievement: "Best Innovation Award",
      learning:
        "Prototyped a sentiment-aware customer support bot. Learned rapid iteration with prompt engineering.",
      tags: ["Prompt Engineering", "NLP"]
    }
  ],

  certificates: [
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "Mar 2025",
      image: "🎓",
      link: "#"
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "AWS & DeepLearning.AI",
      date: "Jan 2025",
      image: "📜",
      link: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online (Coursera)",
      date: "Aug 2024",
      image: "🏅",
      link: "#"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "May 2024",
      image: "🧾",
      link: "#"
    },
    {
      title: "SQL for Data Science",
      issuer: "IBM",
      date: "Feb 2024",
      image: "🗄️",
      link: "#"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "GeeksforGeeks",
      date: "Nov 2023",
      image: "🧩",
      link: "#"
    }
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      company: "NeuralForge Labs",
      duration: "Jun 2025 — Aug 2025",
      points: [
        "Built and deployed a fine-tuned LLM-based support assistant, reducing response time by 40%.",
        "Optimized data pipelines processing 2M+ records using Pandas and SQL.",
        "Collaborated with senior ML engineers on model evaluation frameworks."
      ]
    },
    {
      role: "AI Research Intern",
      company: "VisionLabs AI",
      duration: "Dec 2024 — Feb 2025",
      points: [
        "Researched and implemented attention-based architectures for image segmentation.",
        "Authored an internal report on transformer efficiency techniques.",
        "Presented findings to a cross-functional team of 15+ engineers."
      ]
    },
    {
      role: "Open Source Contributor",
      company: "Hugging Face Community",
      duration: "2024 — Present",
      points: [
        "Contributed dataset preprocessing scripts to open-source NLP repositories.",
        "Helped maintain documentation for transformer fine-tuning tutorials."
      ]
    }
  ],

  genAIFocus: [
    { title: "LLMs", icon: "🪄", desc: "Exploring architectures & capabilities of large language models." },
    { title: "RAG", icon: "🔗", desc: "Building retrieval-augmented pipelines for grounded responses." },
    { title: "Fine-Tuning", icon: "🎯", desc: "Adapting pretrained models to domain-specific tasks." },
    { title: "AI Agents", icon: "🤖", desc: "Designing autonomous, tool-using multi-step agents." },
    { title: "Prompt Engineering", icon: "✍️", desc: "Crafting precise prompts for reliable model behavior." },
    { title: "Deep Learning", icon: "🧠", desc: "Neural network architectures powering modern AI." },
    { title: "Computer Vision", icon: "👁️", desc: "Teaching machines to see, detect and understand images." }
  ],

  resumeLink: "./assets/resume.pdf",
  resumeLastUpdated: "June 10, 2026",
  resumeVersions: [
    { version: "v3.0", date: "June 10, 2026", link: "./assets/resume.pdf" },
    { version: "v2.0", date: "Jan 15, 2026", link: "./assets/resume_v2.pdf" },
    { version: "v1.0", date: "Aug 02, 2025", link: "./assets/resume_v1.pdf" }
  ]
};
