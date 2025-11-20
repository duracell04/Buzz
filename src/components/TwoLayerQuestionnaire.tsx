import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Intent = "casual" | "dating" | "serious" | "long_term" | "unsure";

interface YouState {
  age: string;
  gender: string;
  orientation: string;
}

interface LookingForState {
  intent: Intent;
  nonNegotiables: string[];
}

const nonNegotiableOptions = [
  "Non-smoker",
  "Wants kids / OK with kids",
  "Comfortable with my religion",
  "Within my height range",
];

export const TwoLayerQuestionnaire: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  const [you, setYou] = useState<YouState>({
    age: "28",
    gender: "Woman",
    orientation: "Straight",
  });

  const [lookingFor, setLookingFor] = useState<LookingForState>({
    intent: "serious",
    nonNegotiables: ["Non-smoker", "Within my height range"],
  });

  const toggleNonNegotiable = (label: string) => {
    setLookingFor((prev) => {
      const exists = prev.nonNegotiables.includes(label);
      return {
        ...prev,
        nonNegotiables: exists
          ? prev.nonNegotiables.filter((n) => n !== label)
          : [...prev.nonNegotiables, label],
      };
    });
  };

  const intentLabel = (intent: Intent) => {
    switch (intent) {
      case "casual":
        return "Something light / casual";
      case "dating":
        return "Dating, see where it goes";
      case "serious":
        return "Serious relationship";
      case "long_term":
        return "Long-term / marriage";
      case "unsure":
      default:
        return "Still figuring it out";
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              See how Buzz gets to know you in 2 steps
            </h3>
            <p className="text-sm text-muted-foreground">
              A light mock of the real setup: who you are, and what you're open to right now.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span
              className={`h-2 w-8 rounded-full transition-colors ${
                activeStep === 1 ? "bg-accent" : "bg-muted"
              }`}
            />
            <span
              className={`h-2 w-8 rounded-full transition-colors ${
                activeStep === 2 ? "bg-accent" : "bg-muted"
              }`}
            />
          </div>
        </div>

        {/* Step tabs */}
        <div className="flex mb-6 rounded-xl bg-muted p-1">
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
              activeStep === 1
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            1 · Who you are
          </button>
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
              activeStep === 2
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            2 · What you're looking for
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Left: active step form */}
          <div className="space-y-6">
            {activeStep === 1 ? (
              <>
                <p className="text-sm text-muted-foreground">
                  This is the light "Who are you?" layer Buzz asks once.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Your age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      min={18}
                      max={80}
                      value={you.age}
                      onChange={(e) =>
                        setYou((prev) => ({ ...prev, age: e.target.value }))
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Gender
                    </Label>
                    <RadioGroup
                      value={you.gender}
                      onValueChange={(value) =>
                        setYou((prev) => ({ ...prev, gender: value }))
                      }
                      className="grid grid-cols-2 gap-3"
                    >
                      <div className="flex items-center space-x-2 rounded-lg border border-input bg-background px-4 py-3 has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                        <RadioGroupItem value="Woman" id="woman" />
                        <Label htmlFor="woman" className="flex-1 cursor-pointer">Woman</Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-lg border border-input bg-background px-4 py-3 has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                        <RadioGroupItem value="Man" id="man" />
                        <Label htmlFor="man" className="flex-1 cursor-pointer">Man</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orientation" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      You're mostly interested in…
                    </Label>
                    <Select
                      value={you.orientation}
                      onValueChange={(value) =>
                        setYou((prev) => ({ ...prev, orientation: value }))
                      }
                    >
                      <SelectTrigger id="orientation">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Straight">Straight</SelectItem>
                        <SelectItem value="Gay / lesbian">Gay / lesbian</SelectItem>
                        <SelectItem value="Bi / pan">Bi / pan</SelectItem>
                        <SelectItem value="Queer / other">Queer / other</SelectItem>
                        <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-muted-foreground">
                  Now the "What are you open to right now?" layer.
                </p>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Intent
                    </Label>
                    <div className="grid grid-cols-1 gap-2">
                      {(["casual", "dating", "serious", "long_term", "unsure"] as Intent[]).map(
                        (intent) => (
                          <button
                            key={intent}
                            type="button"
                            onClick={() =>
                              setLookingFor((prev) => ({ ...prev, intent }))
                            }
                            className={`rounded-lg border px-4 py-3 text-left transition-all ${
                              lookingFor.intent === intent
                                ? "border-accent bg-accent/10 text-foreground shadow-sm"
                                : "border-input bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                            }`}
                          >
                            <span className="text-sm font-medium">
                              {intentLabel(intent)}
                            </span>
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Non-negotiables (Buzz enforces these)
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {nonNegotiableOptions.map((label) => {
                        const active = lookingFor.nonNegotiables.includes(label);
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => toggleNonNegotiable(label)}
                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                              active
                                ? "border-accent bg-accent/10 text-accent-foreground"
                                : "border-input bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                            }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right: live summary */}
          <div className="rounded-xl border border-border bg-muted/50 p-6 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">
              Tonight, Buzz would quietly look for…
            </p>
            <p className="mb-3 text-foreground">
              Someone near you who matches a{" "}
              <span className="font-semibold text-accent">{intentLabel(lookingFor.intent)}</span>{" "}
              vibe, and is comfortable with people like you:
            </p>
            <ul className="mb-4 list-disc pl-5 space-y-2 text-foreground">
              <li>
                Around <span className="font-semibold">{you.age}</span> and{" "}
                <span className="font-semibold lowercase">{you.gender}</span>
              </li>
              <li>
                Orientation:{" "}
                <span className="font-semibold">{you.orientation}</span>
              </li>
              {lookingFor.nonNegotiables.length > 0 && (
                <li>
                  Respects these non-negotiables:{" "}
                  <span className="font-semibold">
                    {lookingFor.nonNegotiables.join(", ")}
                  </span>
                </li>
              )}
            </ul>
            <p className="text-xs text-muted-foreground">
              In the real app, this setup happens once. After that, Buzz just
              waits quietly for a strong mutual fit while you live your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
