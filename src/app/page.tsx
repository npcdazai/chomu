const lines = [
  "It started when you were an intern.",
  "You didnt make a dramatic entrance. You were just there. Slightly annoyed at something, moving fast, already in your own world. But somehow, in that ordinary moment, everything shifted for me.",
  "I remember looking at you and, without knowing why, imagining you in a saree.",
  "Not in some fantasy way.",
  "Just you - the same fiery eyes, the same short temper, the same stubborn little expressions - wrapped in something soft and graceful. It felt strange how natural that thought was, like my heart recognized you before my mind did.",
  "Before you, office was just office. Then you happened.",
  "You brought noise into my routine.",
  "Youre short-tempered - your anger arrives quickly, especially when things dont go your way. And somehow its cute.",
  "Five minutes later, youre calm again - talking about food, smiling like you didnt just declare war on half the floor.",
  "If I had to say it simply:",
  "I like you.",
  "In your anger. In your softness. In your messy little accidents. In every lunch break.",
  "And maybe this is the part I was always afraid to say out loud.",
  "You dont realize it, but you changed the rhythm of my days. Mornings feel lighter because I might see you. Evenings linger because I replay your voice in my head.",
  "Sometimes I catch myself waiting for your footsteps, like theyre a kind of music I never knew I needed.",
  "I dont love you in a loud way. There are no fireworks here. Just quiet moments.",
  "Just the way my chest tightens when youre upset. Just the way I smile when you talk about food. Just the way your presence makes ordinary hours feel important.",
  "I dont need promises. I dont need grand gestures.",
  "I just wanted you to know that somewhere between your temper and your laughter, between your chaos and your calm, you found a place in me.",
  "And it stayed."
];

export default function Home() {
  return (
    <main className="page">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="letter">
        <p className="tag">a little confession</p>
        <h1>For You</h1>
        <figure className="photo-section">
          <img src="/us.jpeg" alt="Your favorite photo together" className="photo-frame" />
          {/* <figcaption>replace this with your photo in `public/photo-placeholder.svg`</figcaption> */}
        </figure>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
    </main>
  );
}
