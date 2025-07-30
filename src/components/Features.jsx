import { ShieldAlert, AlertTriangle, Mail } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: (
        <ShieldAlert className="text-red-500 w-10 h-10 mx-auto mb-4" />
      ),
      title: "Real-time Protection",
      description:
        "Continuously scans emails and web pages for phishing attempts and malicious content.",
    },
    {
      icon: (
        <AlertTriangle className="text-yellow-400 w-10 h-10 mx-auto mb-4" />
      ),
      title: "Threat Alerts",
      description:
        "Instant notifications when suspicious activity is detected in your email communication.",
    },
    {
      icon: (
        <Mail className="text-white w-10 h-10 mx-auto mb-4" />
      ),
      title: "Email Security",
      description:
        "Advanced AI algorithms that learn and adapt to new phishing techniques as they evolve.",
    },
  ];

  return (
    <section className="bg-[#08192e] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-3xl font-bold mb-12">
          Powerful Features Built for Protection
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-orange-500 rounded-xl p-8 text-center text-white hover:scale-105 transition-transform duration-300 bg-[#0e1e36]"
            >
              {feature.icon}
              <h3 className="text-orange-400 font-semibold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
