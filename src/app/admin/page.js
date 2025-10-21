"use client";

import { useEffect, useMemo, useState } from "react";

const fetchContent = async () => {
  const response = await fetch("/api/content", { cache: "no-store" });

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  return response.json();
};

const linesToArray = (value) =>
  value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);

const arrayToLines = (items) => (items && items.length ? items.join("\n") : "");

const DEFAULT_EXPERIENCE = {
  title: "",
  description: "",
  image: "",
  alt: "",
};

const DEFAULT_BENEFIT_CARD = {
  title: "",
  detail: "",
};

const DEFAULT_CONCIERGE_ITEM = {
  title: "",
  detail: "",
};

const DEFAULT_ASSURANCE_ITEM = {
  title: "",
  detail: "",
};

const DEFAULT_IMAGE = {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [selectedPage, setSelectedPage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const initialise = async () => {
      try {
        const initialContent = await fetchContent();
        setContent(initialContent);
        const firstKey = Object.keys(initialContent ?? {})[0] ?? "";
        setSelectedPage(firstKey);
        setIsAuthenticated(true);
      } catch (error) {
        if (error.message !== "401") {
          setErrorMessage("Failed to load content. Please try again after logging in.");
        }
      } finally {
        setLoading(false);
      }
    };

    initialise();
  }, []);

  const pageKeys = useMemo(() => Object.keys(content ?? {}), [content]);

  useEffect(() => {
    if (!selectedPage && pageKeys.length) {
      setSelectedPage(pageKeys[0]);
    }
  }, [pageKeys, selectedPage]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setStatusMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setErrorMessage("Invalid credentials. Please try again.");
        return;
      }

      const loadedContent = await fetchContent();
      setContent(loadedContent);
      const firstKey = Object.keys(loadedContent ?? {})[0] ?? "";
      setSelectedPage(firstKey);
      setIsAuthenticated(true);
      setStatusMessage("Logged in successfully.");
      setUsername("");
      setPassword("");
    } catch (error) {
      setErrorMessage("Unable to log in. Please try again.");
    }
  };

  const handleSave = async () => {
    if (!content) {
      setErrorMessage("Nothing to save yet. Try refreshing the page.");
      return;
    }

    setStatusMessage("");
    setErrorMessage("");
    setIsSaving(true);

    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      setStatusMessage("Content saved successfully.");
    } catch (error) {
      setErrorMessage("Failed to save content. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthenticated(false);
    setContent(null);
    setSelectedPage("");
    setErrorMessage("");
    setStatusMessage("Logged out.");
  };

  const updatePageContent = (pageKey, updatedData) => {
    setContent((previous) => ({
      ...(previous ?? {}),
      [pageKey]: updatedData,
    }));
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f5f0] text-[#1f2620]">
        <p>Loading admin tools...</p>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f5f0] p-4 text-[#1f2620]">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-[#1f2620]">Admin Login</h1>
          <p className="mt-2 text-sm text-[#55594F]">
            Enter the administrator credentials to manage page content.
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-[#393F37]" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                className="mt-2 w-full rounded-lg border border-[#E0E3DE] bg-white px-3 py-2 text-[#1f2620] focus:border-[#9A8C7B] focus:outline-none"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#393F37]" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-2 w-full rounded-lg border border-[#E0E3DE] bg-white px-3 py-2 text-[#1f2620] focus:border-[#9A8C7B] focus:outline-none"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1f2620] px-4 py-2 font-semibold text-white transition hover:bg-[#2a332b]"
            >
              Sign in
            </button>
          </form>
          {errorMessage ? (
            <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
          ) : null}
          {statusMessage ? (
            <p className="mt-4 text-sm text-emerald-600">{statusMessage}</p>
          ) : null}
        </div>
      </main>
    );
  }

  const renderPageEditor = () => {
    if (!selectedPage || !content?.[selectedPage]) {
      return <p>Select a page to start editing.</p>;
    }

    const pageData = content[selectedPage];

    if (selectedPage === "home") {
      return (
        <HomeEditor data={pageData} onChange={(updated) => updatePageContent("home", updated)} />
      );
    }

    if (selectedPage === "clubHospitality") {
      return (
        <ClubHospitalityEditor
          data={pageData}
          onChange={(updated) => updatePageContent("clubHospitality", updated)}
        />
      );
    }

    if (selectedPage === "luxuryTravel") {
      return (
        <LuxuryTravelEditor
          data={pageData}
          onChange={(updated) => updatePageContent("luxuryTravel", updated)}
        />
      );
    }

    return (
      <FallbackJsonEditor
        data={pageData}
        onChange={(updated) => updatePageContent(selectedPage, updated)}
      />
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f5f0] p-6 text-[#1f2620]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-6 shadow-xl lg:flex-row lg:items-center">
          <div>
            <h1 className="text-3xl font-semibold text-[#1f2620]">Content Editor</h1>
            <p className="mt-2 text-sm text-[#55594F]">
              Edit the fields below and save to update the live pages immediately.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="rounded-full bg-[#1f2620] px-5 py-2 font-semibold text-white transition hover:bg-[#2a332b] disabled:cursor-not-allowed disabled:bg-[#55594F]"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Save changes"}
            </button>
            <button
              onClick={handleLogout}
              className="rounded-full border border-[#1f2620] px-5 py-2 font-semibold text-[#1f2620] transition hover:bg-[#1f2620] hover:text-white"
            >
              Log out
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-2xl bg-white p-4 shadow-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A8C7B]">
              Pages
            </h2>
            <div className="mt-4 space-y-2">
              {pageKeys.length ? (
                pageKeys.map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPage(key)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                      selectedPage === key
                        ? "bg-[#1f2620] text-white"
                        : "bg-[#f7f5f0] text-[#393F37] hover:bg-[#e6e2d8]"
                    }`}
                  >
                    {formatPageLabel(key)}
                  </button>
                ))
              ) : (
                <p className="text-sm text-[#55594F]">No editable pages found.</p>
              )}
            </div>
          </aside>

          <section className="rounded-2xl bg-white p-6 shadow-md">
            {renderPageEditor()}
          </section>
        </div>

        {errorMessage ? (
          <p className="text-sm text-red-500">{errorMessage}</p>
        ) : null}
        {statusMessage ? (
          <p className="text-sm text-emerald-600">{statusMessage}</p>
        ) : null}
      </div>
    </main>
  );
};

export default AdminPage;

function SectionTitle({ title, description }) {
  return (
    <header className="mb-6">
      <h2 className="text-xl font-semibold text-[#1f2620]">{title}</h2>
      {description ? (
        <p className="mt-1 text-sm text-[#55594F]">{description}</p>
      ) : null}
    </header>
  );
}

function TextField({ label, value, onChange, type = "text" }) {
  return (
    <label className="block text-sm">
      <span className="text-[#393F37]">{label}</span>
      <input
        type={type}
        className="mt-1 w-full rounded-lg border border-[#E0E3DE] bg-white px-3 py-2 text-sm text-[#1f2620] focus:border-[#9A8C7B] focus:outline-none"
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange, rows = 4, placeholder }) {
  return (
    <label className="block text-sm">
      <span className="text-[#393F37]">{label}</span>
      <textarea
        className="mt-1 w-full rounded-lg border border-[#E0E3DE] bg-white px-3 py-2 text-sm text-[#1f2620] focus:border-[#9A8C7B] focus:outline-none"
        rows={rows}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function MultilineListField({ label, items, onChange, hint }) {
  return (
    <TextAreaField
      label={label}
      value={arrayToLines(items)}
      onChange={(value) => onChange(linesToArray(value))}
      rows={items?.length ? Math.max(items.length + 1, 3) : 3}
      placeholder={hint}
    />
  );
}

function ImageFields({ image, onChange }) {
  const currentImage = image ?? DEFAULT_IMAGE;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <TextField
        label="Image URL"
        value={currentImage.src}
        onChange={(value) => onChange({ ...currentImage, src: value })}
      />
      <TextField
        label="Image description (alt text)"
        value={currentImage.alt}
        onChange={(value) => onChange({ ...currentImage, alt: value })}
      />
    </div>
  );
}

function ClubHospitalityEditor({ data, onChange }) {
  if (!data) {
    return <p>No content available for this page yet.</p>;
  }

  const hero = data.hero ?? {};
  const tailored = data.tailored ?? {};
  const experiences = data.experiences ?? [];
  const benefits = data.benefits ?? {};

  const updateHero = (partial) => {
    onChange({
      ...data,
      hero: {
        ...hero,
        ...partial,
      },
    });
  };

  const updateHeroImage = (partial) => {
    updateHero({ image: { ...(hero.image ?? DEFAULT_IMAGE), ...partial } });
  };

  const updateTailored = (partial) => {
    onChange({
      ...data,
      tailored: {
        ...tailored,
        ...partial,
      },
    });
  };

  const updateExperiences = (next) => {
    onChange({
      ...data,
      experiences: next,
    });
  };

  const updateBenefits = (partial) => {
    onChange({
      ...data,
      benefits: {
        ...benefits,
        ...partial,
      },
    });
  };


  return (
    <div className="space-y-10">
      <section>
        <SectionTitle title="Hero" description="Primary headline and introduction for the page." />
        <div className="grid gap-4">
          <TextField label="Heading" value={hero.title} onChange={(value) => updateHero({ title: value })} />
          <TextAreaField
            label="Intro paragraph"
            value={hero.body}
            onChange={(value) => updateHero({ body: value })}
            rows={4}
          />
          <MultilineListField
            label="Bullet list"
            items={hero.bullets}
            onChange={(value) => updateHero({ bullets: value })}
            hint="Enter one bullet per line."
          />
          <TextField
            label="Button label"
            value={hero.ctaLabel}
            onChange={(value) => updateHero({ ctaLabel: value })}
          />
          <ImageFields image={hero.image} onChange={updateHeroImage} />
        </div>
      </section>

      <section>
        <SectionTitle title="Tailored section" description="Supporting copy that explains how the service works." />
        <div className="grid gap-4">
          <TextField
            label="Section heading"
            value={tailored.heading}
            onChange={(value) => updateTailored({ heading: value })}
          />
          <MultilineListField
            label="Paragraphs"
            items={tailored.paragraphs}
            onChange={(value) => updateTailored({ paragraphs: value })}
            hint="Enter one paragraph per line."
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="Experiences"
          description="Cards showcasing example experiences for members."
        />
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="rounded-lg border border-[#E0E3DE] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#1f2620]">Experience {index + 1}</h3>
                <button
                  type="button"
                  onClick={() =>
                    updateExperiences(experiences.filter((_, itemIndex) => itemIndex !== index))
                  }
                  className="text-sm text-rose-600 transition hover:text-rose-400"
                >
                  Remove
                </button>
              </div>
              <div className="mt-4 grid gap-4">
                <TextField
                  label="Title"
                  value={experience.title}
                  onChange={(value) =>
                    updateExperiences(
                      experiences.map((item, itemIndex) =>
                        itemIndex === index ? { ...item, title: value } : item,
                      ),
                    )
                  }
                />
                <TextAreaField
                  label="Description"
                  rows={3}
                  value={experience.description}
                  onChange={(value) =>
                    updateExperiences(
                      experiences.map((item, itemIndex) =>
                        itemIndex === index ? { ...item, description: value } : item,
                      ),
                    )
                  }
                />
                <ImageFields
                  image={{ src: experience.image, alt: experience.alt }}
                  onChange={(value) =>
                    updateExperiences(
                      experiences.map((item, itemIndex) =>
                        itemIndex === index
                          ? { ...item, image: value.src, alt: value.alt }
                          : item,
                      ),
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => updateExperiences([...experiences, { ...DEFAULT_EXPERIENCE }])}
            className="rounded-lg bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Add experience
          </button>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Benefits"
          description="Reasons to join and the associated call to action."
        />
        <div className="grid gap-4">
          <TextField
            label="Section heading"
            value={benefits.heading}
            onChange={(value) => updateBenefits({ heading: value })}
          />

          <div className="space-y-4">
            {(benefits.cards ?? []).map((card, index) => (
              <div key={index} className="rounded-lg border border-[#E0E3DE] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#1f2620]">Card {index + 1}</h3>
                  <button
                    type="button"
                    onClick={() =>
                      updateBenefits({
                        cards: (benefits.cards ?? []).filter((_, itemIndex) => itemIndex !== index),
                      })
                    }
                    className="text-sm text-rose-600 transition hover:text-rose-400"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-4 grid gap-4">
                  <TextField
                    label="Title"
                    value={card.title}
                    onChange={(value) =>
                      updateBenefits({
                        cards: (benefits.cards ?? []).map((item, itemIndex) =>
                          itemIndex === index ? { ...item, title: value } : item,
                        ),
                      })
                    }
                  />
                  <TextAreaField
                    label="Detail"
                    rows={3}
                    value={card.detail}
                    onChange={(value) =>
                      updateBenefits({
                        cards: (benefits.cards ?? []).map((item, itemIndex) =>
                          itemIndex === index ? { ...item, detail: value } : item,
                        ),
                      })
                    }
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                updateBenefits({
                  cards: [...(benefits.cards ?? []), { ...DEFAULT_BENEFIT_CARD }],
                })
              }
              className="rounded-lg bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Add benefit card
            </button>
          </div>

          <TextField
            label="Call-to-action label"
            value={benefits.ctaLabel}
            onChange={(value) => updateBenefits({ ctaLabel: value })}
          />
        </div>
      </section>
    </div>
  );
}

function HomeEditor({ data, onChange }) {
  if (!data) {
    return <p>No content available for this page yet.</p>;
  }

  const hero = data.hero ?? {};
  const about = data.about ?? {};
  const membership = data.membership ?? {};

  const updateHero = (partial) => {
    onChange({
      ...data,
      hero: {
        ...hero,
        ...partial,
      },
    });
  };

  const updateAbout = (partial) => {
    onChange({
      ...data,
      about: {
        ...about,
        ...partial,
      },
    });
  };

  const updateAboutStats = (next) => {
    updateAbout({ stats: next });
  };

  const updateMembership = (partial) => {
    onChange({
      ...data,
      membership: {
        ...membership,
        ...partial,
      },
    });
  };

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle
          title="Hero"
          description="Update the hero message and call-to-action." />
        <div className="grid gap-4">
          <TextField
            label="Headline"
            value={hero.headline}
            onChange={(value) => updateHero({ headline: value })}
          />
          <TextAreaField
            label="Subheading"
            rows={3}
            value={hero.subheadline}
            onChange={(value) => updateHero({ subheadline: value })}
          />
          <TextField
            label="Primary button label"
            value={hero.primaryCtaLabel}
            onChange={(value) => updateHero({ primaryCtaLabel: value })}
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="About section"
          description="Manage the welcome copy, image carousel, and highlight stats." />
        <div className="grid gap-4">
          <TextField
            label="Animated section title"
            value={about.sectionTitle}
            onChange={(value) => updateAbout({ sectionTitle: value })}
          />
          <TextField
            label="Heading"
            value={about.heading}
            onChange={(value) => updateAbout({ heading: value })}
          />
          <MultilineListField
            label="Intro paragraphs"
            items={about.paragraphs}
            onChange={(value) => updateAbout({ paragraphs: value })}
            hint="Enter one paragraph per line."
          />
          <TextField
            label="Features title"
            value={about.featuresTitle}
            onChange={(value) => updateAbout({ featuresTitle: value })}
          />
          <MultilineListField
            label="Feature bullet points"
            items={about.features}
            onChange={(value) => updateAbout({ features: value })}
            hint="Enter one feature per line."
          />
          <TextField
            label="Bottom call-to-action label"
            value={about.ctaLabel}
            onChange={(value) => updateAbout({ ctaLabel: value })}
          />
          <MultilineListField
            label="Carousel images (URLs)"
            items={about.images}
            onChange={(value) => updateAbout({ images: value })}
            hint="Enter one image URL per line."
          />

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-[#1f2620]">Floating stat cards</h3>
            {(about.stats ?? []).map((stat, index) => (
              <div key={index} className="rounded-lg border border-[#E0E3DE] p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#1f2620]">Card {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() =>
                      updateAboutStats((about.stats ?? []).filter((_, itemIndex) => itemIndex !== index))
                    }
                    className="text-sm text-rose-600 transition hover:text-rose-400"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-4 grid gap-3">
                  <TextField
                    label="Label"
                    value={stat.label}
                    onChange={(value) =>
                      updateAboutStats(
                        (about.stats ?? []).map((item, itemIndex) =>
                          itemIndex === index ? { ...item, label: value } : item,
                        ),
                      )
                    }
                  />
                  <TextField
                    label="Value"
                    value={stat.value}
                    onChange={(value) =>
                      updateAboutStats(
                        (about.stats ?? []).map((item, itemIndex) =>
                          itemIndex === index ? { ...item, value: value } : item,
                        ),
                      )
                    }
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => updateAboutStats([...(about.stats ?? []), { ...DEFAULT_HOME_STAT }])}
              className="rounded-lg bg-[#1f2620] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#2a332b]"
            >
              Add stat card
            </button>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Membership section"
          description="Edit benefit copy shown in the membership grid." />
        <div className="grid gap-4">
          <TextField
            label="Section title"
            value={membership.sectionTitle}
            onChange={(value) => updateMembership({ sectionTitle: value })}
          />
          <TextAreaField
            label="Subtitle"
            rows={4}
            value={membership.subtitle}
            onChange={(value) => updateMembership({ subtitle: value })}
          />

          <div className="space-y-4">
            {(membership.benefits ?? []).map((benefit, index) => (
              <div key={index} className="rounded-lg border border-[#E0E3DE] p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-[#1f2620]">Benefit {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() =>
                      updateMembership({
                        benefits: (membership.benefits ?? []).filter((_, itemIndex) => itemIndex !== index),
                      })
                    }
                    className="text-sm text-rose-600 transition hover:text-rose-400"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-4 grid gap-3">
                  <TextField
                    label="Title"
                    value={benefit.title}
                    onChange={(value) =>
                      updateMembership({
                        benefits: (membership.benefits ?? []).map((item, itemIndex) =>
                          itemIndex === index ? { ...item, title: value } : item,
                        ),
                      })
                    }
                  />
                  <TextAreaField
                    label="Description"
                    rows={3}
                    value={benefit.description}
                    onChange={(value) =>
                      updateMembership({
                        benefits: (membership.benefits ?? []).map((item, itemIndex) =>
                          itemIndex === index ? { ...item, description: value } : item,
                        ),
                      })
                    }
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                updateMembership({
                  benefits: [...(membership.benefits ?? []), { title: "", description: "" }],
                })
              }
              className="rounded-lg bg-[#1f2620] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#2a332b]"
            >
              Add benefit
            </button>
          </div>

          <TextField
            label="Call-to-action label"
            value={membership.ctaLabel}
            onChange={(value) => updateMembership({ ctaLabel: value })}
          />
        </div>
      </section>
    </div>
  );
}

function LuxuryTravelEditor({ data, onChange }) {
  if (!data) {
    return <p>No content available for this page yet.</p>;
  }

  const hero = data.hero ?? {};
  const tailored = data.tailored ?? {};
  const conciergeHighlights = data.conciergeHighlights ?? [];
  const assurance = data.assurance ?? {};

  const updateHero = (partial) => {
    onChange({
      ...data,
      hero: {
        ...hero,
        ...partial,
      },
    });
  };

  const updateHeroImage = (partial) => {
    updateHero({ image: { ...(hero.image ?? DEFAULT_IMAGE), ...partial } });
  };

  const updateTailored = (partial) => {
    onChange({
      ...data,
      tailored: {
        ...tailored,
        ...partial,
      },
    });
  };

  const updateConciergeHighlights = (next) => {
    onChange({
      ...data,
      conciergeHighlights: next,
    });
  };

  const updateAssurance = (partial) => {
    onChange({
      ...data,
      assurance: {
        ...assurance,
        ...partial,
      },
    });
  };

  return (
    <div className="space-y-10">
      <section>
        <SectionTitle title="Hero" description="Primary introduction on the page." />
        <div className="grid gap-4">
          <TextField label="Heading" value={hero.title} onChange={(value) => updateHero({ title: value })} />
          <TextAreaField
            label="Intro paragraph"
            value={hero.body}
            onChange={(value) => updateHero({ body: value })}
            rows={4}
          />
          <MultilineListField
            label="Bullet list"
            items={hero.bullets}
            onChange={(value) => updateHero({ bullets: value })}
            hint="Enter one bullet per line."
          />
          <TextField
            label="Primary button label"
            value={hero.primaryCtaLabel}
            onChange={(value) => updateHero({ primaryCtaLabel: value })}
          />
          <TextField
            label="Secondary button label"
            value={hero.secondaryCta?.label ?? ""}
            onChange={(value) => updateHero({ secondaryCta: { ...(hero.secondaryCta ?? {}), label: value } })}
          />
          <TextField
            label="Secondary button link"
            value={hero.secondaryCta?.href ?? ""}
            onChange={(value) => updateHero({ secondaryCta: { ...(hero.secondaryCta ?? {}), href: value } })}
          />
          <ImageFields image={hero.image} onChange={updateHeroImage} />
        </div>
      </section>

      <section>
        <SectionTitle title="Tailored section" description="Supporting copy plus imagery." />
        <div className="grid gap-4">
          <TextField
            label="Section heading"
            value={tailored.heading}
            onChange={(value) => updateTailored({ heading: value })}
          />
          <MultilineListField
            label="Paragraphs"
            items={tailored.paragraphs}
            onChange={(value) => updateTailored({ paragraphs: value })}
            hint="Enter one paragraph per line."
          />
          <ImageFields
            image={tailored.image}
            onChange={(partial) => updateTailored({ image: partial })}
          />
        </div>
      </section>

      <section>
        <SectionTitle
          title="Concierge highlights"
          description="Cards highlighting membership benefits."
        />
        <div className="space-y-4">
          {conciergeHighlights.map((item, index) => (
            <div key={index} className="rounded-lg border border-[#E0E3DE] p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#1f2620]">Highlight {index + 1}</h3>
                <button
                  type="button"
                  onClick={() =>
                    updateConciergeHighlights(
                      conciergeHighlights.filter((_, itemIndex) => itemIndex !== index),
                    )
                  }
                  className="text-sm text-rose-600 transition hover:text-rose-400"
                >
                  Remove
                </button>
              </div>
              <div className="mt-4 grid gap-4">
                <TextField
                  label="Title"
                  value={item.title}
                  onChange={(value) =>
                    updateConciergeHighlights(
                      conciergeHighlights.map((highlight, itemIndex) =>
                        itemIndex === index ? { ...highlight, title: value } : highlight,
                      ),
                    )
                  }
                />
                <TextAreaField
                  label="Detail"
                  rows={3}
                  value={item.detail}
                  onChange={(value) =>
                    updateConciergeHighlights(
                      conciergeHighlights.map((highlight, itemIndex) =>
                        itemIndex === index ? { ...highlight, detail: value } : highlight,
                      ),
                    )
                  }
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => updateConciergeHighlights([...conciergeHighlights, { ...DEFAULT_CONCIERGE_ITEM }])}
            className="rounded-lg bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Add highlight
          </button>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Assurance section"
          description="Closing content explaining the concierge support."
        />
        <div className="grid gap-4">
          <TextField
            label="Section heading"
            value={assurance.heading}
            onChange={(value) => updateAssurance({ heading: value })}
          />
          <TextAreaField
            label="Intro paragraph"
            rows={4}
            value={assurance.intro}
            onChange={(value) => updateAssurance({ intro: value })}
          />

          <div className="space-y-4">
            {(assurance.items ?? []).map((item, index) => (
              <div key={index} className="rounded-lg border border-[#E0E3DE] p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#1f2620]">Supporting point {index + 1}</h3>
                  <button
                    type="button"
                    onClick={() =>
                      updateAssurance({
                        items: (assurance.items ?? []).filter((_, itemIndex) => itemIndex !== index),
                      })
                    }
                    className="text-sm text-rose-600 transition hover:text-rose-400"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-4 grid gap-4">
                  <TextField
                    label="Title"
                    value={item.title}
                    onChange={(value) =>
                      updateAssurance({
                        items: (assurance.items ?? []).map((point, itemIndex) =>
                          itemIndex === index ? { ...point, title: value } : point,
                        ),
                      })
                    }
                  />
                  <TextAreaField
                    label="Detail"
                    rows={3}
                    value={item.detail}
                    onChange={(value) =>
                      updateAssurance({
                        items: (assurance.items ?? []).map((point, itemIndex) =>
                          itemIndex === index ? { ...point, detail: value } : point,
                        ),
                      })
                    }
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                updateAssurance({
                  items: [...(assurance.items ?? []), { ...DEFAULT_ASSURANCE_ITEM }],
                })
              }
              className="rounded-lg bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Add supporting point
            </button>
          </div>

          <TextField
            label="Call-to-action label"
            value={assurance.ctaLabel}
            onChange={(value) => updateAssurance({ ctaLabel: value })}
          />
        </div>
      </section>
    </div>
  );
}

function FallbackJsonEditor({ data, onChange }) {
  const [jsonValue, setJsonValue] = useState(JSON.stringify(data ?? {}, null, 2));

  useEffect(() => {
    setJsonValue(JSON.stringify(data ?? {}, null, 2));
  }, [data]);

  return (
    <div className="space-y-4">
      <SectionTitle
        title="Advanced editor"
        description="This page does not yet have a guided form. Update the JSON directly below."
      />
      <TextAreaField
        label="Page JSON"
        rows={20}
        value={jsonValue}
        onChange={(value) => {
          setJsonValue(value);
          try {
            const parsed = JSON.parse(value);
            onChange(parsed);
          } catch (error) {
            // Keep the text area editable even if JSON is invalid.
          }
        }}
      />
      <p className="text-xs text-[#55594F]">
        Tip: copy your edits somewhere safe before saving so you can revert if something looks off.
      </p>
    </div>
  );
}
