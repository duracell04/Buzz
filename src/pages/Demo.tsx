import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PhoneMock } from "@/components/PhoneMock";

type DemoScreen = "who-you-are" | "what-youre-looking-for" | "roam";

const Demo = () => {
  const [activeScreen, setActiveScreen] = useState<DemoScreen>("who-you-are");

  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text */}
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Demo · Not the real app (yet), but close
              </p>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                See how Buzz actually feels in your hand.
              </h1>
              
              <p className="text-lg text-muted-foreground">
                A two-layer questionnaire to tell Buzz who you are and what you're open to,
                and a single Roam button that decides when the app is allowed to move.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={() => setActiveScreen("who-you-are")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeScreen === "who-you-are"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  1 · Who you are
                </button>
                <button
                  onClick={() => setActiveScreen("what-youre-looking-for")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeScreen === "what-youre-looking-for"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  2 · What you're looking for
                </button>
                <button
                  onClick={() => setActiveScreen("roam")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeScreen === "roam"
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  3 · Roam ON
                </button>
              </div>
            </div>
            
            {/* Right: Phone Mock */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMock screen={activeScreen} />
            </div>
          </div>
        </section>

        {/* Explanation Under Phone */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Think of it as two questions and one switch:
            Who are you? What are you looking for? And am I open right now?
          </p>
        </section>

        {/* Psychology Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Intent clarity &gt; profile perfection
              </h3>
              <p className="text-sm text-muted-foreground">
                You'll never impress everyone. Buzz only cares that you're honest about what you want.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Non-negotiables protect your time
              </h3>
              <p className="text-sm text-muted-foreground">
                They're not demands, they're boundaries. Buzz enforces them so you don't have to argue about them later.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                The Roam switch respects your life
              </h3>
              <p className="text-sm text-muted-foreground">
                Sometimes you're just out for groceries. Sometimes you're open to a conversation. Buzz knows the difference because you tell it.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Demo;
