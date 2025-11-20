const StorySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-lg text-foreground/90 leading-relaxed">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              "Buzz, no fuzz" story
            </h2>
            <p className="text-xl text-accent font-semibold">
              You know who you are. You know what you're looking for.
            </p>
          </div>

          <p>
            If you've dated in the last few years, you already know this:
          </p>

          <div className="space-y-4 pl-6 border-l-4 border-accent/30">
            <p className="text-xl font-medium text-foreground">
              You don't actually need more options.
            </p>
            <p className="text-xl font-medium text-foreground">
              You don't need better banter over text.
            </p>
            <p className="text-xl font-medium text-foreground">
              You need the right person to cross your path — and a way to notice each other that doesn't feel creepy or high-pressure.
            </p>
          </div>

          <p className="text-muted-foreground italic">
            Every relationship researcher will tell you the same thing:
            most real connections start when two people are in the same place, at the same time, and both are open to it.
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 my-8">
            <p className="text-xl text-center font-semibold text-foreground">
              What if your best match walks right past you in real life…<br />
              and the usual swipe-algorithms simply never see that?
            </p>
          </div>

          <p className="text-xl font-semibold text-foreground">
            Buzz is the small, kind nudge at exactly that moment:
          </p>

          <div className="space-y-6 mt-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground">
                <span className="font-semibold text-accent">Anyone you buzz with has already crossed your non-negotiables</span><br />
                <span className="text-muted-foreground">(your height floor or ceiling, smoker vs non-smoker, religion a must or a no-go, kids or no kids — your rules, not ours).</span>
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground">
                <span className="font-semibold text-accent">You both know from the first second that you're in the same lane</span><br />
                <span className="text-muted-foreground">(light and casual, dating and seeing, or serious long-term).</span>
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground">
                <span className="font-semibold text-accent">In that place, in that exact moment, you can trade a simple "hey".</span><br />
                <span className="text-muted-foreground">Within a few seconds, your brain will do what it does best:
                Do I feel curious about this person… or not?</span>
              </p>
            </div>
          </div>

          <p className="text-center text-muted-foreground pt-4">
            No weeks of guessing. No "will they look like their photos?"<br />
            Just a clean yes, a polite no, or a "maybe later" — and you move on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
