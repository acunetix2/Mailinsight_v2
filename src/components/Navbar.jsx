import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Logo from "@/assets/logo.svg";

const dropdownData = {
  Features: [
    {
      title: "EMAIL VERIFICATION",
      description:
        "Mail Insight verifies sender domains and detects impersonation by comparing email sources against trusted domain records and known phishing patterns.",
    },
    {
      title: "SCANNING LINKS AND IMAGES",
      description:
        "Scans embedded links in emails, checks mismatched URLs, and validates them using threat intelligence like Google Safe Browse.",
    },
    {
      title: "RISK SCORING",
      description:
        "Assigns a risk score based on sender history, message content, and known scams.",
    },
    {
      title: "ALERT SYSTEM",
      description:
        "Real-time pop-up warnings and personalized recommendations based on the risk score.",
    },
  ],
  Pricing: [
    {
      title: "Free Basic Plan",
      description:
        "Price: Free\nLimited email verification, basic link scanning, standard risk scoring, email alerts.",
    },
    {
      title: "Standard Plan",
      description:
        "Price: $5/month or $50/year (save 17%)\nAll Free Basic, plus: unlimited email verification, advanced scanning, daily reports, support.",
    },
    {
      title: "Premium Plan",
      description:
        "Price: $15/month or $150/year\nAll Standard, plus: threat intelligence, customizable risk scoring, API, account manager, 24/7 support.",
    },
  ],
  Download: [
    { title: "🧩 Chrome Extension" },
    { title: "📧 Outlook Add-in" },
  ],
  Tutorial: [
    { title: "1. Install from Chrome Web Store." },
    { title: "2. Pin to browser toolbar." },
    { title: "3. Sign in with your email." },
    { title: "4. Open inbox for real-time scanning." },
    { title: "5. Follow alerts & recommendations." },
  ],
};

export default function Navbar() {
  return (
    <nav className="bg-[#081325] px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={ Logo } alt="MailInsight Logo" className="w-20 h-20" />
        <span className="text-orange-500 font-bold text-xl">MailInsight</span>
      </div>

      {/* Menu */}
      <div className="flex space-x-4">
        <Button variant="ghost" className="text-black bg-orange-400 rounded-full px-6 hover:bg-orange-500">
          Home
        </Button>
        <Dropdown title="Features" items={dropdownData.Features} />
        <Dropdown title="Pricing" items={dropdownData.Pricing} />
        <Dropdown title="Download" items={dropdownData.Download} />
        <Dropdown title="Tutorial" items={dropdownData.Tutorial} />
      </div>

      {/* Sign In */}
      <Button className="bg-orange-400 text-black font-semibold rounded-full px-6 hover:bg-orange-500">
        Sign In
      </Button>
    </nav>
  );
}

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        className="bg-orange-400 text-black font-medium rounded-full px-6 hover:bg-orange-500 flex items-center space-x-1"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span>{title}</span>
        <ChevronDown size={16} />
      </Button>
      {open && (
        <div
		  onMouseEnter={() => setOpen(true)}
		  onMouseLeave={() => setOpen(false)}
		  className="absolute z-20 mt-2 w-[320px] bg-[#0b1c31] text-white rounded-2xl shadow-xl p-4 space-y-4 border border-orange-300"
		>
					  {items.map((item, idx) => {
			  // Optional mapping for Download titles to hrefs
			  const linksMap = {
				"🧩 Chrome Extension": "https://chrome.google.com/webstore/detail/mailinsight-extension-link",
				"📧 Outlook Add-in": "https://appsource.microsoft.com/en-us/product/office/WA200005432",
			  };

			  const isLink = linksMap[item.title];

			  return isLink ? (
				<a
				  key={idx}
				  href={linksMap[item.title]}
				  target="_blank"
				  rel="noopener"
				  className="block hover:bg-orange-100/10 p-3 rounded-xl transition-all duration-200 cursor-pointer text-white"
				>
				  <span className="text-lg mr-2">{item.title.slice(0, 2)}</span>
				  <span className="text-orange-400 font-medium">{item.title.slice(2)}</span>
				</a>
			  ) : (
				<div
				  key={idx}
				  className="hover:bg-orange-100/10 p-3 rounded-xl transition-all duration-200 cursor-pointer"
				>
				  <h4 className="font-semibold text-orange-400">{item.title}</h4>
				  {item.description && (
					<p className="text-sm text-gray-300 mt-1 whitespace-pre-line leading-relaxed">
					  {item.description}
					</p>
				  )}
				</div>
			  );
			})}

		</div>

      )}
    </div>
  );
}
