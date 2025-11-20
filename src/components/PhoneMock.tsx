import { useState } from "react";
import buzzIcon from "@/assets/buzz-icon.png";

type PhoneMockProps = {
  screen: "who-you-are" | "what-youre-looking-for" | "roam";
};

export const PhoneMock = ({ screen }: PhoneMockProps) => {
  const [age, setAge] = useState("28");
  const [gender, setGender] = useState("Woman");
  const [orientation, setOrientation] = useState("Straight");
  const [intent, setIntent] = useState("serious");
  const [nonNegotiables, setNonNegotiables] = useState([
    "Non-smoker",
    "Comfortable with my religion",
    "Within my height range"
  ]);
  const [roamOn, setRoamOn] = useState(false);

  const toggleNonNegotiable = (item: string) => {
    setNonNegotiables(prev =>
      prev.includes(item)
        ? prev.filter(n => n !== item)
        : [...prev, item]
    );
  };

  const intentLabel = (key: string) => {
    const labels: Record<string, string> = {
      casual: "Something light / casual",
      dating: "Dating, see where it goes",
      serious: "Serious relationship",
      long_term: "Long-term / marriage",
      unsure: "Still figuring it out"
    };
    return labels[key] || labels.serious;
  };

  const allNonNegotiables = [
    "Non-smoker",
    "Wants kids / okay with kids",
    "Comfortable with my religion",
    "Within my height range",
    "Doesn't want marriage",
    "Same language (or open to English)"
  ];

  return (
    <div className="w-full max-w-[380px] mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-gradient-to-b from-[hsl(280,60%,7%)] to-[hsl(280,50%,15%)] rounded-[3rem] p-4 shadow-2xl border-8 border-foreground/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-3xl" />
        
        {/* Screen Content */}
        <div className="bg-[hsl(280,50%,12%)] rounded-[2.5rem] min-h-[640px] p-6 overflow-hidden">
          {/* App Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <img src={buzzIcon} alt="Buzz" className="w-6 h-6 rounded-lg" />
              <span className="text-foreground font-semibold">buzz</span>
            </div>
            <span className="text-xs text-muted-foreground">
              Step {screen === "who-you-are" ? "1" : screen === "what-youre-looking-for" ? "2" : "—"} of 2
            </span>
          </div>

          {/* Screen Content Based on Active Screen */}
          {screen === "who-you-are" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  First, who are you?
                </h2>
                <p className="text-sm text-muted-foreground">
                  You only do this once. Buzz doesn't need your life story, just the basics.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                    I'm mostly…
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Woman", "Man", "Non-binary", "Prefer not to say"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setGender(option)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                          gender === option
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted/20 border border-border text-foreground"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                    I'm mostly interested in…
                  </label>
                  <select
                    value={orientation}
                    onChange={(e) => setOrientation(e.target.value)}
                    className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-foreground"
                  >
                    <option>Straight</option>
                    <option>Gay / lesbian</option>
                    <option>Bi / pan</option>
                    <option>Queer / other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="bg-muted/20 border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground">
                  In the real app, this stays on your phone and doesn't get shown to anyone.
                  It just helps Buzz decide who not to bother you with.
                </p>
              </div>

              <button className="w-full bg-muted/20 text-muted-foreground py-3 rounded-lg font-medium">
                Next · What you're open to
              </button>
            </div>
          )}

          {screen === "what-youre-looking-for" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  What are you open to right now?
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
                    Intent
                  </label>
                  <div className="space-y-2">
                    {["casual", "dating", "serious", "long_term", "unsure"].map((key) => (
                      <button
                        key={key}
                        onClick={() => setIntent(key)}
                        className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                          intent === key
                            ? "bg-accent/10 border border-accent text-foreground"
                            : "bg-muted/20 border border-border text-muted-foreground"
                        }`}
                      >
                        {intentLabel(key)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">
                    Non-negotiables (Buzz enforces these for you)
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {allNonNegotiables.map((item) => (
                      <button
                        key={item}
                        onClick={() => toggleNonNegotiable(item)}
                        className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
                          nonNegotiables.includes(item)
                            ? "bg-accent/10 border border-accent text-accent"
                            : "bg-muted/20 border border-border text-muted-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Anything you mark here is a hard rule. Buzz simply never proposes someone who doesn't pass it.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Don't want to share a detail (like height)? Then Buzz just won't match you with people who insist on it.
                  </p>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-xs font-semibold text-accent mb-2">
                  Tonight Buzz will quietly look for:
                </p>
                <ul className="text-xs text-foreground space-y-1">
                  <li>– Someone within your age range,</li>
                  <li>– Who's also on a {intentLabel(intent).toLowerCase()} wavelength,</li>
                  <li>– And who respects the non-negotiables you picked.</li>
                </ul>
              </div>
            </div>
          )}

          {screen === "roam" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {roamOn ? "Roam is ON" : "Roam is OFF"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {roamOn
                    ? "If someone nearby is a strong mutual fit, both your phones will feel a small buzz. That's it."
                    : "Buzz is completely quiet. No scanning, no buzzing, no one can see that you're here."}
                </p>
              </div>

              {/* Big Toggle */}
              <div className="flex justify-center">
                <button
                  onClick={() => setRoamOn(!roamOn)}
                  className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
                    roamOn
                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/50"
                      : "bg-muted/20 border border-border text-muted-foreground"
                  }`}
                >
                  Roam {roamOn ? "ON" : "OFF"}
                </button>
              </div>

              {/* Settings */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-muted/20 border border-border rounded-lg p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">When</p>
                    <p className="text-xs text-muted-foreground">Evenings 18:00–22:00, weekends</p>
                  </div>
                  <button className="text-xs text-accent font-medium">Change</button>
                </div>

                <div className="flex items-center justify-between bg-muted/20 border border-border rounded-lg p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Where</p>
                    <p className="text-xs text-muted-foreground">In cafés, bars, concerts · Not at home · Not at work</p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-muted/20 border border-border rounded-lg p-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">How strict</p>
                    <p className="text-xs text-muted-foreground">Very strong match only</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/20 border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground">
                  {roamOn
                    ? "You can flip this off any time. The moment you do, Buzz goes back to sleep."
                    : "Turn Roam ON only when you'd be happy to say hello to someone new. When it's OFF, Buzz treats you like you don't exist."}
                </p>
              </div>

              {roamOn && (
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground italic">
                    "Someone who fits what you're looking for is nearby. Tap if you'd like to see if you both say yes."
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
